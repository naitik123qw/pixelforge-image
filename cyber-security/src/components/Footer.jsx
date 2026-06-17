import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-950 text-white py-6'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-400 md:flex-row md:text-left'>
          <p>&copy; {new Date().getFullYear()} PixelForge AI. All rights reserved.</p>
          <p>Built for modern devices with responsive design and beautiful image enhancements.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
