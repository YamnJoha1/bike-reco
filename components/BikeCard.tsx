'use client'

import React, { useState } from 'react'
import { BikeProps } from '@/types'
import CustomButton from './CustomButton'
import BikeDetails from './BikeDetails'

interface BikeCardProps {
  bike : BikeProps
}

const BikeCard = ({ bike } : BikeCardProps) => {
  const {id, title, description, date_stolen, stolen_location, thumb} = bike
  
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className='bike-card'>
      <div className='flex flex-row-reverse justify-between text-right w-full'>
        <div className='flex flex-col justify-between items-end w-[35%] '>
          <div className='flex flex-col gap-3'>
            <p className='text-grey'>ID : {id}</p>
            <h2 className='bike-card__content-title'>
               {title}
            </h2>
            <div>
            <p className='text-grey text-sm'>
              Date stolen : 
              <h3 className='inline font-bold text-base text-black-100'>{date_stolen ? date_stolen : "No information"}</h3>
            </p>
            <p className='text-grey text-sm'>
              Stolen location :  
              <h3 className='inline font-bold text-base text-black-100'>{stolen_location ? stolen_location : "No location info"}</h3>
            </p>
            </div>
            
          </div>
          
          <div className='bike-card_btn-container'>
              <CustomButton title='View More'
                containerStyles='w-[200px] py-[16px] rounded-full bg-primary-blue'
                textStyle='text-white text-[14px] leading-[17px] font-bold'
                rightIcon='/right-arrow.svg'
                handelClick={() => setIsOpen(true)}
              />
          </div>
        </div>

        <div className='flex flex-col gap-3 items-center text-center justify-center w-[30%] '>
          <p className='text-12 text-grey mt-2'>
              {description ? (description) : "No description"}
            </p>
        </div>

        <div className='realtive h-50 my-3 object-cover fill w-[35%]'>
          {thumb ? (
            <img src={thumb} alt="image" width={200}/>
          ):(
            <img src="/bicycle.png" alt="image" width={200} />
          )}
        </div>
      </div>

        <BikeDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} bike={bike} />
    </div>
  )
}

export default BikeCard