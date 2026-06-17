import React from 'react'
import { Link } from 'react-router-dom'

const Terms = () => {
  return (
    <main className='min-h-screen bg-slate-950 text-white'>
      <section className='relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8'>
        <div className='absolute left-10 top-10 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl' />
        <div className='absolute right-10 bottom-10 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl' />
        <div className='mx-auto max-w-5xl'>
          <div className='rounded-[32px] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/40'>
            <p className='inline-flex items-center gap-2 rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-200'>Terms of Use</p>
            <h1 className='mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl'>Terms for using PixelForge AI</h1>
            <p className='mt-6 text-lg leading-8 text-slate-300'>These terms explain how you can use our website, what we expect from visitors, and how we handle content and access.</p>

            <div className='mt-12 space-y-10 text-slate-300'>
              <div>
                <h2 className='text-2xl font-semibold text-white'>Your rights and responsibilities</h2>
                <p className='mt-4'>You may use PixelForge AI for personal image enhancement and learning. Please do not upload unlawful content, and keep your account information accurate when using forms or support channels.</p>
              </div>
              <div>
                <h2 className='text-2xl font-semibold text-white'>Service availability</h2>
                <p className='mt-4'>We strive to keep the website available, but access may occasionally be interrupted for maintenance or updates. We are not responsible for temporary outages or third-party service changes.</p>
              </div>
              <div>
                <h2 className='text-2xl font-semibold text-white'>Content and ownership</h2>
                <p className='mt-4'>Images you upload remain yours. We do not claim ownership of your files, and we handle any personal information in accordance with our Privacy Policy.</p>
              </div>
              <div>
                <h2 className='text-2xl font-semibold text-white'>Limitation of liability</h2>
                <p className='mt-4'>PixelForge AI is provided as a convenience and we do not guarantee perfect results for every upload. Use the service at your own discretion and backup your original files.</p>
              </div>
            </div>

            <div className='mt-12 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between'>
              <Link to='/privacy-policy' className='inline-flex rounded-3xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500'>View Privacy Policy</Link>
              <Link to='/blog' className='inline-flex rounded-3xl border border-white/10 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-blue-300 hover:text-blue-300'>Explore guides</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Terms
