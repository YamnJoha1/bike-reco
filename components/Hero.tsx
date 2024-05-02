'use client'

import CustomButton from './CustomButton'
import Image from 'next/image'

const Hero = () => {
  const handelScroll = () => {
    const element = document.getElementById('registe'); // Replace 'top' with the ID of the target element
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
        BIKE REGISTRATION THAT WORKS
        </h1>

        <CustomButton
          title='Register Now'
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handelClick={handelScroll}
        />
      </div>

      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src='/bicycle.png' alt='hero' fill
            className='object-contain'
          />
        </div>

        <div className='hero__image-overlay' />
      </div>
    </div>
  )
}

export default Hero