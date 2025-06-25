'use client';

import Dialog from '@/components/Dialog';
import { overlay } from 'overlay-kit';

export default function Home() {

  return (
    <div>
      <button
        className='border-2 rounded-sm'
        onClick={() => {
          overlay.open(({isOpen, close}) => {
            return <Dialog isOpen={isOpen} onClose={close}/>
          })
        }}
      >
        Open
      </button>
      {/* {isOpen && (
        <Dialog
          // open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )} */}
    </div>
  );
}
