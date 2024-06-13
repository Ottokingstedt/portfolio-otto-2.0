import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Logo = () => {
  return (
    <div className='items-center rounded-full justify-center mt-2 dark:border dark:border-white dark:rounded-full'>
      <Link href='/'
       className='flex flex-row font-semibold text-lg'>
          <Image 
            src="/Otto_logo-01.png"
            width={30}
            height={30}
            alt="Otto's logo"
            className='mr-4'
          /> 
          Otto Kingstedt
      </Link>
    </div>
  )
}

export default Logo;