'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import {
  FaLaptopCode,
  FaPenFancy,
  FaPodcast,
  FaShoppingBag,
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { IconType } from 'react-icons';

const InfluencerProfile = () => {
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
    <div className="bg-black min-h-screen py-6 sm:py-8 md:py-10">
      <div className="flex flex-col md:flex-row max-w-[1440px] mx-auto gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4">
        {/* Left Section */}
        <div className="w-full md:w-1/2 min-h-[400px] sm:min-h-[600px] md:min-h-[800px] bg-gradient-to-br from-[#D10800] to-[#7A0600] flex items-center justify-center rounded-[20px] sm:rounded-[25px] md:rounded-[30px]">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">Hello</h1>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 min-h-[400px] sm:min-h-[600px] md:min-h-[800px] bg-black border-[2px] sm:border-[2.5px] border-[#D10800] rounded-[20px] sm:rounded-[25px] md:rounded-[30px] flex flex-col items-center justify-start text-white overflow-hidden">
          {/* Header Background */}
          <div className="relative h-[120px] sm:h-[150px] md:h-[180px] w-full">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/proile-bg.jpg')" }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="relative z-10 bg-gradient-to-b from-[#0c2014] to-black h-full w-full" />
          </div>

          {/* Profile Section */}
          <div className="py-8 sm:py-10 md:py-12 text-center z-20 w-full max-w-[480px]">
            <div className="bg-white p-2 sm:p-3 rounded-full -mt-16 sm:-mt-20 md:-mt-24 w-fit mx-auto shadow-xl">
              <Image
                src="/images/profile.jpg"
                alt="profile"
                width={120}
                height={120}
                className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] rounded-full object-cover"
              />
            </div>
            <h1 className="text-[1.8rem] sm:text-[2rem] md:text-[2.5rem] font-bold mt-4 sm:mt-5 md:mt-6 mb-2 sm:mb-3">John Carter</h1>
            <p className="text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] font-normal text-gray-300 px-4 sm:px-5 md:px-6">
              Aliquam ut vitae vitae enim viverra luctus sollicitudin <br />
              aliquam itae pulvinar vestibulum dict at ipsum.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center items-center gap-4 sm:gap-5 md:gap-6 mt-6 sm:mt-8 md:mt-10 text-2xl sm:text-2xl md:text-3xl">
              <a href="#" className="hover:scale-110 transition-transform duration-200" aria-label="Facebook">
                <FaFacebookF className="text-blue-500" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform duration-200" aria-label="Twitter">
                <FaTwitter className="text-sky-400" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform duration-200" aria-label="Instagram">
                <FaInstagram className="text-pink-500" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform duration-200" aria-label="LinkedIn">
                <FaLinkedinIn className="text-blue-700" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform duration-200" aria-label="YouTube">
                <FaYoutube className="text-red-600" />
              </a>
            </div>

            {/* Link Buttons */}
            <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-[420px] mx-auto pt-10 sm:pt-12 md:pt-16 pb-6 sm:pb-8 md:pb-10 px-4 sm:px-5 md:px-6">
              {links.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    className="group flex items-center justify-between rounded-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-medium transition-all duration-300 hover:scale-[1.02] bg-white text-[#030B1A] hover:bg-[#030B1A] hover:text-white"
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="text-xl" />
                      {link.text}
                    </span>
                    <span className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-white group-hover:text-[#030B1A] transition-colors duration-300">
                      <ArrowUpRight className="w-5 h-5" />
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

export default InfluencerProfile;
