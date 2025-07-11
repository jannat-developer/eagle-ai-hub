import React from 'react';

export default function AboutDemo() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-6">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-4">They Laughed When We Started. Now They’re Asking for Access.</h1>
        <p className="text-lg mb-6">
          Where does it come from? Built in 2023 with small people taking big swings - what if AI wasn’t just coding, wasn’t just gaming? Built in 2023, what if AI wasn’t just coding, wasn’t just gaming? Built in 2023, what if AI wasn’t just coding, wasn’t just gaming? Built in 2023, what if AI wasn’t just coding, wasn’t just gaming?
        </p>
        <p className="text-lg mb-6">
          What do we get you? Real-time, no tricks, straight-up power - free for you and your payment.
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Access to cutting-edge AI tools that actually work, tested and proven</li>
          <li>Step-by-step strategies to monetize and build economic streams</li>
          <li>Community of pioneers and real-time pushing each other forward</li>
          <li>A support that doesn’t ghost - real people, real support</li>
          <li>Support that doesn’t ghost - real people, real support</li>
        </ul>
        <p className="text-lg mb-6">
          All we ask is to start your 7-day trial - just one dollar to prove you’re serious.
          If you don’t invest $1 to become a future millionaire, then this ain’t your place.
          Keep scrolling. Forget the ideas. Fly high. Dare.
        </p>
      </header>

      <section className="text-center my-12">
        <h2 className="text-2xl font-bold mb-4">Trusted By</h2>
        <p className="mb-6">
          We’re proud to feature the AI Elite. No fluff. Just fire. We’re built by the sharpest minds pushing the future forward.
        </p>
        <div className="flex justify-center space-x-6">
          <img src="/chatgpt-logo.png" alt="ChatGPT" className="h-12" />
          <img src="/deepseek-logo.png" alt="DeepSeek" className="h-12" />
          <img src="/gemini-logo.png" alt="Gemini" className="h-12" />
          <img src="/runway-logo.png" alt="Runway" className="h-12" />
          <img src="/porplextiy-logo.png" alt="Porphlexity" className="h-12" />
        </div>
      </section>

      <section className="text-center my-12">
        <h2 className="text-2xl font-bold mb-4">Previews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg">
            <img src="/chatgpt4-logo.png" alt="ChatGPT 4" className="mx-auto mb-2 h-16" />
            <p>Multimodal AI with reasoning, inside audio and reasoning</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <img src="/whale-logo.png" alt="Whale" className="mx-auto mb-2 h-16" />
            <p>Multimodal AI with reasoning, inside audio and reasoning</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <img src="/gemini-logo.png" alt="Gemini" className="mx-auto mb-2 h-16" />
            <p>Multimodal AI with reasoning, inside audio and reasoning</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <img src="/pixelcut-logo.png" alt="Pixelcut" className="mx-auto mb-2 h-16" />
            <p>Multimodal AI with reasoning, inside audio and reasoning</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <img src="/film-logo.png" alt="Film" className="mx-auto mb-2 h-16" />
            <p>Multimodal AI with reasoning, inside audio and reasoning</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <img src="/porplextiy-logo.png" alt="Porphlexity" className="mx-auto mb-2 h-16" />
            <p>Multimodal AI with reasoning, inside audio and reasoning</p>
          </div>
        </div>
        <button className="mt-6 bg-red-600 text-white px-4 py-2 rounded">Unlock at $99</button>
      </section>
    </div>
  );
}