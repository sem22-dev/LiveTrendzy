"use client"

import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'
import { useEffect } from 'react'

export default function Home() {
  
  useEffect(() => {
    const tl = gsap.timeline({ defaults: {duration: 2} })
    tl.fromTo(".title", { x: "-100%" }, { x: "0%" })
    tl.fromTo(".image", { opacity: 0 }, { opacity: 1 })
  },[])

  return (
    <main className=' z-0 px-5 sm:px-6 lg:px-12 py-12 h-[1000px]'>
      {/* Live video */}
        <div className='flex justify-center'>
          <div className="flex w-3/5 justify-center items-center h-[250px] bg-gray-600">
            {/* Black box as a placeholder for the live stream video */}
            <div className="relative w-[500px] h-[270px] bg-black pl-2 pt-2">
              <h1 className='text-white bg-red-600 inline-block py-1 px-3 rounded-lg'>Live</h1>
            </div>
          </div>
        </div>
      <div className='mt-12 mx-auto text-center '>
        <h1 className='text-4xl my-4 font-extrabold'>Watch, Interact, Shop – Your Fashion Journey Begins Here</h1>
        <div className='flex mt-7 items-center content-center gap-4 text-lg font-semibold justify-center '>
          <Link href={'/livestream'} className=' px-4 py-3  bg-[#fff] border rounded-lg border-black'>Join the Stream</Link>
          <Link href={'/register'} className=' px-4 py-3 bg-[#FF9EAA] border rounded-lg border-transparent'>Become a seller</Link>
          <Link href={'/livestream'} className=' px-4 py-3 text-[#000] bg-[#fff]  border rounded-lg border-black'>Start shopping</Link>
        </div>
      </div>
            
    </main>
  )
}
