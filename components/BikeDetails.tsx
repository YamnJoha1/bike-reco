'use client'

import { BikeProps } from '@/types';
import {Fragment} from 'react'

import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';

interface BikeDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  bike: BikeProps;
}

const BikeDetails = ({isOpen, closeModal, bike} : BikeDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className="relative z-10" onClose={closeModal}>
          <Transition.Child as={Fragment}
            enter='ease-out duration-300'
            enterFrom='obacity-0'
            enterTo='obacity-100'
            leave='ease-in duration-100'
            leaveFrom='obacity-100'
            leaveTo='obacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25 bg-scroll'  />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center w-full'>
              <Transition.Child as={Fragment}
              enter='ease-out duration-300'
              enterFrom='obacity-0 scale-95'
              enterTo='obacity-100 scale-100'
              leave='ease-in duration-100'
              leaveFrom='obacity-100 scale-100'
              leaveTo='obacity-0 scale-95'
            >
              <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
                <button type='button'
                  className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                  onClick={closeModal}
                >
                  <Image src='/close.svg' alt='close' width={20} height={20} className='object-contain' />
                </button>

                <div className='relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg flex justify-center'>
                  <img src="/bicycle.png" alt="image" width={200} />
                </div>

                <div className='flex-1 flex flex-col gap-2'>
                  <h2 className='font-semibold text-xl capitalize'>{bike.title}</h2>

                  <div className='mt-3 flex flex-wrap gap-4'>
                    {Object.entries(bike).map(([key, value]) => (
                      <div className='flex justify-between gap-5 w-full text-right' key={key}>
                        <h4 className='text-grey capitalize'>{key.split("_").join(" ")}</h4>
                        <p className='text-black font-semibold'>{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default BikeDetails