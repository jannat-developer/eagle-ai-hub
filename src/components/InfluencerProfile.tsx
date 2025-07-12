'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react'; // Lucide icons

import Image from 'next/image';




const InfluencerProfile = () => {
    type LinkItem = {
        text: string;
        icon: string;
        href: string;
        highlight?: boolean; // optional
    };



    const links: LinkItem[] = [
        {
            text: 'Visit my portfolio',
            icon: '🧑‍💻',
            href: '#',
        },
        {
            text: 'Read my articles',
            icon: '📝',
            href: '#',
        },
        {
            text: 'Listen my podcast',
            icon: '🎙️',
            href: '#',
        },
        {
            text: 'Visit my store',
            icon: '🛍️',
            href: '#',
        },
        {
            text: 'Subscribe to my channel',
            icon: '🎥',
            href: '#',
        },
    ];


    return (
        <div className="bg-black min-h-screen">
            <div className="flex flex-col md:flex-row max-w-[1680px] mx-auto gap-4">
                {/* left */}
                <div className="w-full md:w-1/2 bg-pink-700 flex items-center justify-center">
                    <h1 className="text-white text-3xl">Hello</h1>
                </div>

                {/* right */}
                <div className=" md:w-1/2 bg-black flex flex-col items-center justify-center text-white border border-[#D10800] rounded-[30px] px-3 mx-4">
                    <div className="h-[120px] w-full bg-[#0c2014] rounded-t-[30px]"></div>
                    <div className="py-10 text-center">
                        <div className='bg-white p-2 rounded-full -mt-30 w-fit mx-auto'>
                            <Image
                                src="/images/profile.jpg"
                                alt="profile"
                                width={160}
                                height={160}
                                className="rounded-full object-cover "
                            />
                        </div>
                        <h1 className='text-[1.8rem] font-bold my-2'>John Carter</h1>
                        <p className='text-[1rem] font-normal'>Aliquam ut vitae vitae enim viverra luctus sollicitudin <br /> aliquam itae pulvinar vestibulum dict at ipsum.</p>
                        <div className='flex justify-center items-center gap-2 mt-10'>
                            <img src="/images/icons/Facebook.png" alt="" />
                            <img src="/images/icons/Twitter.png" alt="" />
                            <img src="/images/icons/Instagram.png" alt="" />
                            <img src="/images/icons/LinkedIn.png" alt="" />
                            <img src="/images/icons/Youtube.png" alt="" />
                        </div>
                        <div className="flex flex-col gap-3 w-full max-w-xl pt-20 pb-10">
                            {links.map((link, index) => (
                                
                                <a
                                    key={index}
                                    href={link.href}
                                    className={`group flex items-center justify-between rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 ${link.highlight
                                        ? 'bg-[#0c1120] text-white'
                                        : 'bg-white text-[#030B1A] hover:bg-[#030B1A] hover:text-white'
                                        }`}
                                >
                                    <span className="flex items-center gap-2">
                                        <span className="text-[1rem] font-bold">{link.icon}</span>
                                        {link.text}
                                    </span>
                                    <span
                                        className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300 ${link.highlight
                                            ? 'bg-[#EFF2F6] text-[#030B1A]'
                                            : 'bg-gray-100 group-hover:bg-white group-hover:text-[#030B1A]'
                                            }`}
                                    >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfluencerProfile;
