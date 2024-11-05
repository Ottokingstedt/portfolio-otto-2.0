'use client';

import React, { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import axios from 'axios';
import { SyncLoader } from 'react-spinners';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [notification, setNotification] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not available yet');
      setNotification('reCAPTCHA not yet loaded');
      return;
    }

    setLoading(true); // Start loading

    try {
      const gRecaptchaToken = await executeRecaptcha('enquiryFormSubmit');
      const response = await axios.post('/api/contactFormSubmit/route', {
        email,
        subject,
        message,
        gRecaptchaToken,
      });

      if (response.data.success) {
        setNotification('Nu har det skickat iväg framgångsrikt');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setNotification(`Misslyckades med poäng: ${response.data.score}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setNotification('Ett fel uppstod vid inskickning av formuläret.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <section className="px-5 pt-12 lg:px-0 lg:pt-0 ">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-300 ">
          Under Konstruktion
        </h2>
        <p className="mb-8 lg:mb-16 text-center text-gray-300">
          Tyvärr är min portföljwebbplats för närvarande under konstruktion och kommer att förbättras snart. 
          Om du har frågor eller är intresserad av att anlita mig som WordPress- och React-utvecklare eller UI- och webdesigner, vänligen kontakta mig via formuläret här.
        </p>
        <form onSubmit={handleSubmitForm} className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium dark:text-gray-300">Din epost</label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border text-black border-gray-300 dark:text-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@address.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium dark:text-gray-300 ">Titeln</label>
            <input
              type="text"
              id="subject"
              className="block text-black p-3 w-full text-sm dark:text-gray-200 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600  shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Titeln"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Meddela</label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-black dark:text-gray-200 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Hej Otto..."
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className={`py-5 px-7 font-bold text-center text-white rounded-lg ${
              loading ? 'bg-gray-500' : 'bg-black hover:bg-gray-600'
            }`}
            disabled={loading}
          >
            {loading ? (
              <div className="flex justify-center">
                <SyncLoader size={10} color="#ffffff" />
              </div>
            ) : (
              'Skickar'
            )}
          </button>
          {notification && (
            <p className={` max-w-[21rem] mt-3 font-semibold bg-slate-700 p-5 rounded-lg border-gray-600 border items-center ${notification.includes('framgångsrikt') ? 'text-green-400' : 'text-red-400'}`}>
              {notification}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;

