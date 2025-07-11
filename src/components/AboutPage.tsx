'use client';

import Image from 'next/image';
import React from 'react';
import AboutPreview from './AboutPreview';

const AboutPage = () => {
    return (
        <main className="relative bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 py-12"
        >
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '600px',
                height: '600px',
                backgroundImage: "url('/images/red.png')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'top right',
                opacity: 1,
                pointerEvents: 'none',
                zIndex: 0,
            }} />
            {/* Hero Section */}
            <header className="">
                <h1 className="text-4xl md:text-5xl max-w-4xl mx-auto font-normal mb-6 leading-tight text-center">
                    They Laughed When We Started. Now They’re Asking for Access.
                </h1>
                {/* <div className='h-4 bg-red-400'>
               </div> */}
                <h2 className="text-xl md:text-2xl mb-6 text-white font-normal text-center">
                    Where does it come from?
                </h2>


                <div
                    className="relative max-w-[90%] mx-auto p-8 rounded-[4rem] shadow-xl overflow-hidden"


                >
                    {/* Left Border */}
                    <div className="absolute top-0 left-0 h-full w-[6px]  bg-gradient-to-b from-[#19408D] via-[#0055FF] to-[#19408D] z-10" />

                    {/* Top Border (Right-Aligned, 40% Wide) */}
                    <div className="absolute top-0 left-0 w-[30%] h-[6px] bg-gradient-to-r from-[#19408D] via-[#0055FF] to-transparent z-10" />

                    {/* Bottom Border (Right-Aligned, 40% Wide) */}
                    <div className="absolute bottom-0 left-0 w-[30%] h-[6px] bg-gradient-to-r from-[#19408D] via-[#0055FF] to-transparent z-10" />


                    <p className="text-[15px] font-light text-left">
                        Back in 2022, when most people didn’t even know what AI was — before the whole thing blew up — we built this project for the real ones who see the future coming. Since then, over 16,000 new millionaires have been made — not by chance, but by grinding AI early, when the game was still ours to win. Our community  got in before the hype, invested in projects no one else even knew about, and turned moves into serious stacks. We didn’t wait. We led. We built the empire — and we keep expanding it every damn day. Now, it’s your shot. You got nothing to lose and everything to claim
                    </p>

                    <p className="text-[15px] font-light text-left my-2 md:my-3">
                        Here, we give you real value first — tools, tactics, straight-up power — then we ask for your trust and your payment.
                    </p>

                    <p className="text-[15px] font-light text-left">
                        What you get inside EGEAL AI Hub:
                    </p>

                    <ul className="text-left list-disc list-inside mb-6 space-y-2 text-[15px] font-light ps-4">
                        <li>Access to cutting-edge AI tools that actually work, tested and battle proven</li>
                        <li>Step-by-step strategies to monetize AI and build real income streams</li>
                        <li>Exclusive early access to AI projects before they blow up</li>
                        <li>A community of grinders and winners pushing each other forward</li>
                        <li>Regular updates and insights to keep you ahead of the AI curve</li>
                        <li>Support that doesn’t ghost you — real people, real help</li>
                    </ul>

                    <p className="text-[15px] font-light text-left">
                        The tools we give you and the problems we solve? They’re real. They cut through the noise, separate the real from the fakes.
                    </p>


                </div>

                <p className="text-lg md:text-lg text-gray-300 font-normal max-w-1/2 mx-auto text-center mt-14">
                    All we ask is $1 to start your 7-day trial — just one dollar to prove you’re serious.
                    If you don’t want to invest $1 to become a future millionaire, then this ain’t your place.
                    Keep scrolling. Forget the idea of getting rich. This place is only for the serious.
                    Fly high. Die rare.
                </p>

            </header>

            {/* Trusted By Section */}
            <section className="text-center my-20 w-full">
                <div className='relative  max-w-2xl mx-auto p-8 overflow-hidden'>
                    {/* right Border */}
                    <div className="absolute top-0 right-0 h-full w-[6px]  bg-gradient-to-b from-[#19408D] via-[#0055FF] to-[#19408D] z-10" />

                    {/* Top Border (Right-Aligned, 40% Wide) */}
                    <div className="absolute top-0 right-0 w-[30%] h-[6px] bg-gradient-to-l from-[#19408D] via-[#0055FF] to-transparent z-10" />

                    {/* Bottom Border (Right-Aligned, 40% Wide) */}
                    <div className="absolute bottom-0 right-0 w-[30%] h-[6px] bg-gradient-to-l from-[#19408D] via-[#0055FF] to-transparent z-10" />
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Trusted By</h2>
                    <p className='text-lg md:text-lg text-gray-300 font-normal text-center'>The AI Elite. No Fluff. Just Fire.</p>
                    <p className="text-lg md:text-lg text-gray-300 font-normal max-w-2xl mx-auto text-center">

                        We’re proud to feature these top AI projects inside the EGEAL AI Hub —
                        tools built by the sharpest minds pushing the future forward.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    <Image src="/images/chatgpt.png" alt="ChatGPT" width={300} height={100} />
                    <Image src="/images/deepseek.png" alt="DeepSeek" width={300} height={100} />
                    <Image src="/images/gemini.png" alt="Gemini" width={300} height={100} />
                    <Image src="/images/runw.png" alt="Runway" width={300} height={100} />
                    <Image src="/images/m.png" alt="Runway" width={120} height={120} />
                    <Image src="/images/perplexity.png" alt="Porphlexity" width={300} height={100} />
                </div>
            </section>
            <AboutPreview></AboutPreview>

        </main>
    );
};

export default AboutPage;