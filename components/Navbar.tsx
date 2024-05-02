'use client'

import Link from 'next/link'

import CustomButton from './CustomButton'

const Navbar = () => {

  const handelScroll = () => {
    const element = document.getElementById('registe'); // Replace 'top' with the ID of the target element
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center px-6 py-4'>
        <Link href='/' className='flex justify-center items-center'>
          <h1 className='text-[40px] text-blue-800 font-bold '>BIKE.<p className='inline text-slate-400'>RECO</p> </h1>
        </Link>

        <CustomButton
          title='Search of Bicke'
          btnType='button'
          containerStyles='text-primary-blue rounded-full bg-white min-2[130px] font-bold'
          handelClick={handelScroll}
        />
      </nav>
    </header>
  )
}

export default Navbar