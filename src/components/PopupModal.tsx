'use client';

import React from 'react';

type PopupModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
};

export default function PopupModal({
  isOpen,
  onClose,
  title,
  description,
}: PopupModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-60">
      <div className="bg-gray-900 text-white p-6 rounded-xl w-full max-w-md shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-300">{description}</p>
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
