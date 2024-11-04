import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div >
          <Image 
            src="/logo.png"
            width={30}
            height={30}
            alt="Otto's logo"
          /> 
    </div>
  )
}

export default Logo;