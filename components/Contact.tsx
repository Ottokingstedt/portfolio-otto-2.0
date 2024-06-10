'use client';

import React, { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import axios from 'axios';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [notification, setNotification] = useState('');
  
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not available yet');
      setNotification('reCAPTCHA not yet loaded');
      return;
    }

    try {
      const gRecaptchaToken = await executeRecaptcha('enquiryFormSubmit');
      const response = await axios.post('/api/contactFormSubmit/route', {
        email,
        subject,
        message,
        gRecaptchaToken,
      });

      if (response.data.success) {
        setNotification(`Sent successfully`);
      } else {
        setNotification(`Failure with score: ${response.data.score}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setNotification('An error occurred while submitting the form.');
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900 pt-20">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Arbeta med mig
        </h2>
        <p className="mb-8 lg:mb-16 text-center text-gray-500 dark:text-gray-400">
          Hör gärna av dig om du har frågor eller funderingar eller är nyfiken på hur ett eventuellt samarbete skulle kunna se ut. Är du osäker på vilken tjänst som passar dig bäst kan du använda det här formuläret istället så återkommer jag till dig med lite tankar och idéer.
        </p>
        <form onSubmit={handleSubmitForm} className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Din epost</label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@address.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Titeln</label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Titeln"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Meddela</label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Hej! Jag är intresserad av dig..."
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit" className="hover:bg-gray-600 bg-black py-5 px-7 font-bold text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Skickar
          </button>
          {notification && <p className={`mt-3 font-semibold  ${notification === 'success' ? 'text-red-400' : 'text-green-400' } text-info`}>{notification}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
