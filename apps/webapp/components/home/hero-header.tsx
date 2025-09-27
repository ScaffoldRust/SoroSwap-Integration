import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function HeroHeader() {
  return (
    <header role='banner' className='flex w-full h-[69px] bg-white px-2 justify-between items-center  md:px-[104px] pt-3 pb-[13px] border-b border-[#E5E5E5]'>
<Link href="/" aria-label='Go to homepage' className='flex gap-3 items-center  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#155DFC] '>
<div className='size-[36px] rounded-[14px] bg-[linear-gradient(to_right,#155DFC_0%,#9810FA_100%)] flex justify-center items-center'>
<Image src="/logo.svg" alt="soroswap-logo" width={20} height={20}/>
</div>
<div>
    <h1 className='font-bold text-[18px] bg-gradient-to-r from-[#155DFC] to-[#9810FA] bg-clip-text text-transparent '>
        Soroswap Template
    </h1>
    <p className='font-normal text-xs text-[#737373]'>
        by Scaffold Rust
    </p>
</div>
</Link>
<main className='flex items-center gap-3 '>
<Link href="/dashboard" aria-label='Go to dashboard' className='font-medium text-[14px] text-[#0A0A0A]'>Dashboard</Link>
<Link href="#" className='flex items-center gap-[6px] px-2.5 h-8 rounded-lg bg-[linear-gradient(to_right,#155DFC_0%,#9810FA_100%)] text-white font-medium text-sm  hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#155DFC]'>
<span className='w-6 h-4 pr-2'>
    <Image src="/github.svg" alt="github" width={16} height={16}/>
</span>
Github
</Link>
</main>
    </header>
   
  )
}

export default HeroHeader