'use client';

import Dialog from '@/components/Dialog';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className='border-2 rounded-sm'
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Open
      </button>
      {isOpen && (
        <Dialog
          // open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
    </div>
  );
}
