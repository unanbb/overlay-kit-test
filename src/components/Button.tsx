'use client';

import Dialog from '@/components/Dialog';
import { overlay } from 'overlay-kit';

export default function Button() {
  return (
    <button
        className='m-1 p-1 border-none rounded-sm bg-amber-500'
        onClick={() => {
          console.log('클릭');
          overlay.open(({isOpen, close}) => {
            return <Dialog isOpen={isOpen} onClose={close}/>
          })
        }}
      >
        Open
      </button>
  )
}
