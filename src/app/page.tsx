
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/eagle-popup');
  };

  return (
    <div className='bg-black min-h-screen'>
      <div className=' flex justify-center pt-40'>
        <button
          onClick={handleClick}
          className="px-4 py-2 bg-[#D10800] text-white rounded"
        >
          Open Eagle PopUp
        </button>
      </div>
    </div>
  );
}
