import Link from 'next/link';
import Image from "next/image";

export default function Hero() {
  return (
    <section className='min-h-screen flex items-center justify-center  bg-[#0d1117] text-[#c9d1d9] px-4 pt-20'>
      <div className='text-center max-w-3xl'>
        <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full ring-2 ring-[#238636] ring-offset-2 ring-offset-[#0d1117]">
          <Image
            src="/myprofilepic.jpg"
            alt="Victor"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className='text-[#238636] font-semibold text-lg mb-2'>Hello, I am</p>
        <h1 className='text-5xl md:text-7xl font-bold text-[#f0f6fc] mb-4'>
          Victor Augustine Inieke
        </h1>
        <h2 className='text-2xl md:text-3xl text-gray-600 mb-6'>
          Frontend Developer
        </h2>
        <p className='text-[#8b949e] text-lg mb-8 max-w-xl mx-auto'>
          I build fast, accessible, and beautiful web experiences
          using React, Next.js, and TypeScript.
        </p>
        <div className='flex gap-4 justify-center flex-wrap'>
          <Link href='#projects'
            className='bg-[#238636] text-white px-8 py-3 rounded-full
                       hover:bg-[#2ea043] transition-colors font-semibold'>
            View My Work
          </Link>
          <Link href='#contact'
            className='border-2 border-[#30363d] text-[#c9d1d9] px-8 py-3
                       rounded-full hover:border-[#238636] transition-colors font-semibold'>
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}