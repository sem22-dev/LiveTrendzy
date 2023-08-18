"use client"
import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const livestreams = [
    { id: 1, title: 'Livestream 1' },
    { id: 2, title: 'Livestream 2' },
    { id: 3, title: 'Livestream 3' },
    // Add more livestreams as needed
  ];

  const [currentLivestream, setCurrentLivestream] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 2 } });
    tl.fromTo('.title', { x: '-100%' }, { x: '0%' });
    tl.fromTo('.image', { opacity: 0 }, { opacity: 1 });
  }, []);

  const handleNextLivestream = () => {
    const nextLivestream = (currentLivestream + 1) % livestreams.length;
    setCurrentLivestream(nextLivestream);
  };

  const handlePreviousLivestream = () => {
    const previousLivestream =
      (currentLivestream - 1 + livestreams.length) % livestreams.length;
    setCurrentLivestream(previousLivestream);
  };

  useEffect(() => {
    gsap.fromTo(
      '.fade-container',
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.5, ease: 'power2.inOut' }
    );
  }, [currentLivestream]);

  return (
    <main className="z-0 px-5 sm:px-6 lg:px-12 py-12 h-[1000px]">
      <div className="flex justify-center">
        {/* Next and Previous Buttons */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <button
            onClick={handlePreviousLivestream}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg"
          >
            Previous
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <button
            onClick={handleNextLivestream}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg"
          >
            Next
          </button>
        </div>
      </div>

      {/* Livestream */}
      <div className="flex justify-center fade-container">
        <div className="flex w-3/5 justify-center items-center h-[250px] bg-gray-600">
          {/* Black box as a placeholder for the live stream video */}
          <div className="relative w-[500px] h-[270px] bg-black pl-2 pt-2">
            <h1 className="text-white bg-red-600 inline-block py-1 px-3 rounded-lg">
              {livestreams[currentLivestream].title}
            </h1>
          </div>
        </div>
      </div>

      {/* Other content */}
      <div className="mt-12 mx-auto text-center">
        <h1 className="text-4xl my-4 font-extrabold">
          Watch, Interact, Shop – Your Fashion Journey Begins Here
        </h1>
        <div className="flex mt-7 items-center content-center gap-4 text-lg font-semibold justify-center">
          <Link
            href={'/livestream'}
            className="px-4 py-3 bg-[#fff] border rounded-lg border-black"
          >
            Join the Stream
          </Link>
          <Link
            href={'/register'}
            className="px-4 py-3 bg-[#FF9EAA] border rounded-lg border-transparent"
          >
            Become a seller
          </Link>
          <Link
            href={'/inventory'}
            className="px-4 py-3 text-[#000] bg-[#fff] border rounded-lg border-black"
          >
            Start shopping
          </Link>
        </div>
      </div>
    </main>
  );
}
