"use client"
import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import ResponsiveCarousel from './carousel/page';

export default function Home() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if(isLoggedIn === true) {
    return <Lives/>
  }

  return (
    <main className="z-0 px-5 sm:px-6 lg:px-12 py-10 h-fit ">
      <div className="flex justify-center fade-container">
        <ResponsiveCarousel />        
      </div>

      <div className="mt-12 mx-auto text-center">
        <h1 className="text-4xl my-4  font-extrabold">
          Watch, <span className='text-bgGreen '>Interact</span>, <span className='stroke-black'>Shop</span> – Live Marketplace  
        </h1>
        <div className="flex mt-7 items-center content-center gap-4 text-lg font-semibold justify-center">
          <Link
            href={'/livestream'}
            className="px-4 py-3 bg-[#fff] hover:bg-[#f0ecec] transition-hover duration-300 border rounded-lg border-black"
          >
            Join the Stream
          </Link>
          <Link
            href={'/register'}
            className="px-4 py-3 bg-bgGreen hover:bg-[#5dfd9a] transition-hover duration-300 text-black border rounded-lg border-transparent"
          >
            Become a seller
          </Link>
          
        </div>
      </div>
    </main>
  );
}

export function Lives() {
  return(
    <div className='px-5 sm:px-6 h-[1000px] lg:px-4 '>
      <Sidebar />
      <div className='lg:ml-[329px] xl:ml-[209px] p-4'>
        <div><h1 className='text-lg font-semibold'>Featured channels</h1></div>  
        {/* live items */}
        <div className=' py-8 flex items-center gap-8 '>
          <Link href={'./livestream/1'} className=' flex flex-col gap-3 '>
            <div className='w-[200px] rounded-lg h-[250px] text-white  bg-black relative'>
              <div className='bg-red-600 px-3 text-sm py-1 rounded-lg inline-block absolute top-2 left-2'>LIVE</div>
              <h1 className='absolute pl-2 top-3 left-16 text-sm'>1.7k</h1>
            </div>
            <div className=' inline-block text-base '>
              <h1 className='text-base text-black font-bold'>Harry Koren</h1>
              <h1>New Comics + Adult Show</h1>
            </div>
          </Link>
          {/* 2 */}
          <Link href={'./livestream/1'} className=' flex flex-col gap-3 '>
            <div className='w-[200px] rounded-lg h-[250px] text-white  bg-black relative'>
              <div className='bg-red-600 px-3 text-sm text-white py-1 rounded-lg inline-block absolute top-2 left-2'>LIVE</div>
              <h1 className='absolute pl-2 top-3 left-16 text-sm'>1.7k</h1>
            </div>
              <div className=' inline-block text-base '>
                <h1 className='text-base text-black font-bold'>Harry Koren</h1>
                <h1>New Comics + Adult Show</h1>
              </div>
          </Link>
        </div>
      </div> 
    </div>
  )
}

export function Sidebar() {
  return(
      <div className='fixed min-h-screen flex flex-col gap-6 py-4 h-[1000px] pr-4 overflow-y-scroll col-span-1'>
        <h1 className='text-xl font-bold '>CATEGORIES</h1>
        <div className=' text-base font-semibold flex flex-col '>
          <Link href={'./'} className='bg-bgGray rounded-lg px-2 py-2  block w-44'>
            <h1>Men's Fashion</h1>
          </Link>
          <Link href={'./'} className='hover:bg-bgGray rounded-lg px-2 py-2  block w-44'>
            <h1>Arts & Handmade</h1>
          </Link>
          <Link href={'./'} className='hover:bg-bgGray rounded-lg px-2 py-2  block w-44'>
            <h1>Women clothing</h1>
          </Link>
        </div>
      </div>
  )
}
