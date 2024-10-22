"use client"

import Image from 'next/image';

export function ImageCard() {
  return (
    <div className="bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 h-3/4">
      <Image 
        src="/img/medama.svg" 
        alt="medama" 
        width={300} 
        height={300} 
      />
    </div>
  )
}

export default ImageCard;
