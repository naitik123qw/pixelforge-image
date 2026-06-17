import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logo1.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [downloadOpen, setDownloadOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'

  const handleBack = () => {
    if (isHome) return
    if (window.history.length > 1) {
      navigate(-1)
    } else {
      navigate('/')
    }
  }

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const toggleDownload = () => setDownloadOpen((prev) => !prev)
  const backButtonClass = isHome
    ? 'rounded-3xl border border-white/10 px-3 py-2 text-sm font-semibold text-slate-400 cursor-not-allowed bg-slate-900/70 transition'
    : 'rounded-3xl border border-white/10 px-3 py-2 text-sm font-semibold text-white bg-slate-900 transition hover:bg-slate-800 hover:text-blue-300'

  return (
    <nav className='bg-gray-950 text-white shadow-lg shadow-black/30'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8'>
        <div className='flex items-center gap-3'>
          <button
            type='button'
            onClick={handleBack}
            disabled={isHome}
            className={backButtonClass}
          >
            Back
          </button>
          <Link to='/' className='flex items-center gap-3'>
            <img src={logo} alt='Logo' className='h-10 w-auto' />
            <span className='text-lg font-semibold text-blue-300'>PixelForge AI</span>
          </Link>
        </div>

        <button
          type='button'
          onClick={() => setIsOpen((prev) => !prev)}
          className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-white shadow-xl shadow-slate-950/40 transition hover:bg-slate-800 md:hidden'
          aria-expanded={isOpen}
          aria-label='Toggle navigation'
        >
          <span className='sr-only'>Open main menu</span>
          <div className='relative h-5 w-5'>
            <span className={`absolute left-0 top-1/2 block h-[2px] w-full bg-white transition-transform duration-300 ${isOpen ? 'translate-y-0 rotate-45' : '-translate-y-1.5'}`} />
            <span className={`absolute left-0 top-1/2 block h-[2px] w-full bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute left-0 top-1/2 block h-[2px] w-full bg-white transition-transform duration-300 ${isOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1.5'}`} />
          </div>
        </button>

        <div className={`flex-1 items-center justify-end md:flex ${isOpen ? 'block opacity-100 translate-y-0' : 'hidden opacity-0 -translate-y-2'} transition-all duration-300 md:block md:opacity-100 md:translate-y-0`}>
          <div className='mt-4 flex flex-col gap-3 rounded-3xl border border-white/10 bg-slate-950/95 p-5 shadow-2xl shadow-slate-950/20 backdrop-blur-md md:mt-0 md:flex-row md:items-center md:bg-transparent md:p-0 md:shadow-none md:border-0'>
            <Link to='/' className='rounded-3xl px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-900 hover:text-blue-300 md:px-2 md:py-2'>Home</Link>
            <Link to='/about' className='rounded-3xl px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-900 hover:text-blue-300 md:px-2 md:py-2'>About</Link>
            <Link to='/contact' className='rounded-3xl px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-900 hover:text-blue-300 md:px-2 md:py-2'>Contact</Link>
            <Link to='/privacy-policy' className='rounded-3xl px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-900 hover:text-blue-300 md:px-2 md:py-2'>Privacy Policy</Link>

            <div className='relative'>
              <button
                type='button'
                onClick={toggleDownload}
                className='inline-flex items-center rounded-3xl border border-white/20 bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:from-blue-500 hover:to-cyan-400 md:px-3 md:py-2'
              >
                Download
                <span className='ml-2 text-xs'>▼</span>
              </button>

              <div className={`absolute right-0 z-20 mt-2 w-48 origin-top-right overflow-hidden rounded-3xl border border-white/10 bg-slate-950/95 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl transition-all duration-300 ${downloadOpen ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'}`}>
                <Link
                  to='/download?platform=android'
                  className='block rounded-3xl px-4 py-3 text-sm text-white transition hover:bg-slate-900 hover:text-blue-300'
                  onClick={() => setIsOpen(false)}
                >
                  Android
                </Link>
                <Link
                  to='/download?platform=windows'
                  className='mt-1 block rounded-3xl px-4 py-3 text-sm text-white transition hover:bg-slate-900 hover:text-blue-300'
                  onClick={() => setIsOpen(false)}
                >
                  Windows
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
