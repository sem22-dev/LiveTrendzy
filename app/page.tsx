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
    <main className=' z-0 px-5 sm:px-6 lg:px-12 xl:px-32 py-12 h-[1000px]'>
      <h1>Live Shopping
          & Marketplace
          Buy, sell & discover products you'll love
      </h1>
    </main>
  )
}
