'use client';

import React, { useState } from 'react';
import PopupModal from '@/components/PopupModal'; // ✅ update path if needed
import Image from 'next/image';

const tools = [
  {
    title: 'DM Automation Bot',
    description: 'Auto-reply and follow up in DMs while you sleep',
  },
  {
    title: 'Social Video Splitter Bot',
    description: 'Chop long video into Tik-Tok ready reels',
  },
  {
    title: 'Bio Link Page Builder',
    description: 'Auto-reply and follow up in DMs while you sleep',
  },
  {
    title: 'Social Video Splitter Bot',
    description: 'Chop long video into Tik-Tok ready reels',
  },
  {
    title: 'Outreach Blast Bot',
    description: 'Auto-reply and follow up in DMs while you sleep',
  },
  {
    title: 'Affiliate Earnings Tracker',
    description: 'Chop long video into Tik-Tok ready reels',
  },
];

export default function AiToolsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState<{ title: string; description: string } | null>(null);

  const handleOpenModal = (tool: { title: string; description: string }) => {
    setSelectedTool(tool);
    setIsOpen(true);
  };

  return (
    <section className="min-h-screen bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {tools.map((tool, idx) => (
          <div
            key={idx}
            className={` p-6  transition relative group ${idx === 1 || idx === 3
                ? ''
                : ''
              }`}
          >
            
            <Image
              src="/images/ai-tool.png" 
              alt="Description of image"
              width={50}    
              height={50}  
              className='rounded-[10px] mb-3' 
            />

            {/* Title */}
            <h3 className="text-[1.3rem] font-semibold mb-2">{tool.title}</h3>

            {/* Description */}
            <p className="text-[0.94rem] font-normal mb-4">{tool.description}</p>

            {/* Explore Button */}
            <button
              onClick={() => handleOpenModal(tool)}
              className="bg-[#D10800] text-white text-sm font-semibold px-4 py-2 rounded-[10px]"
            >
              Explore
            </button>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedTool && (
        <PopupModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title={selectedTool.title}
          description={selectedTool.description}
        />
      )}
    </section>
  );
}
