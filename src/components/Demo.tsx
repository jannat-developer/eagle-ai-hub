'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import {
    FaLaptopCode,
    FaPenFancy,
    FaPodcast,
    FaShoppingBag,
} from 'react-icons/fa';
import { IconType } from 'react-icons';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from 'react-icons/fa';


const Demo = () => {
    type LinkItem = {
        text: string;
        icon: IconType;
        href: string;
        highlight?: boolean;
    };

    const links: LinkItem[] = [
        {
            text: 'Visit my portfolio',
            icon: FaLaptopCode,
            href: '#',
        },
        {
            text: 'Read my articles',
            icon: FaPenFancy,
            href: '#',
        },
        {
            text: 'Listen my podcast',
            icon: FaPodcast,
            href: '#',
        },
        {
            text: 'Visit my store',
            icon: FaShoppingBag,
            href: '#',
        },
        {
            text: 'Subscribe to my channel',
            icon: FaYoutube,
            href: '#',
        },
    ];

    return (
       <div className="bg-black min-h-screen px-4 py-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* LEFT PANEL */}
        <div className="w-full lg:w-1/2 bg-pink-700 rounded-2xl flex items-center justify-center p-6">
          <h1 className="text-white text-3xl font-bold">Hello</h1>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full lg:w-1/2 bg-[#070A10] border border-[#D10800] rounded-[30px] overflow-hidden flex flex-col">
          {/* Header Banner */}
          <div className="relative h-32 w-full">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/proile-bg.jpg')",
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="absolute inset-0 bg-[#0c2014] rounded-t-[30px] z-10" />
          </div>

          {/* Profile Section */}
          <div className="relative z-20 flex flex-col items-center text-center p-6 sm:p-10">
            <div className="-mt-20 bg-white p-2 rounded-full shadow-md">
              <Image
                src="/images/profile.jpg"
                alt="profile"
                width={120}
                height={120}
                className="rounded-full object-cover"
              />
            </div>
            <h1 className="text-2xl sm:text-[1.8rem] font-bold mt-4">John Carter</h1>
            <p className="text-sm sm:text-base text-gray-300 mt-2 leading-relaxed max-w-md">
              Aliquam ut vitae vitae enim viverra luctus sollicitudin <br className="hidden sm:block" /> 
              aliquam vitae pulvinar vestibulum dict at ipsum.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center items-center gap-4 mt-6 text-xl">
              <FaFacebookF className="text-blue-500" />
              <FaTwitter className="text-sky-400" />
              <FaInstagram className="text-pink-500" />
              <FaLinkedinIn className="text-blue-700" />
              <FaYoutube className="text-red-600" />
            </div>

            {/* Links */}
            <div className="flex flex-col gap-3 w-full pt-10 pb-6">
              {links.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    className="group flex items-center justify-between bg-white text-[#030B1A] hover:bg-[#030B1A] hover:text-white transition-all rounded-full px-5 py-3 text-sm font-medium"
                  >
                    <span className="flex items-center gap-2">
                      <Icon className="text-base" />
                      {link.text}
                    </span>
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-white group-hover:text-[#030B1A]">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Demo;