import React from 'react'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  return (
    <main className='min-h-screen bg-slate-950 text-white'>
      <section className='relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8'>
        <div className='absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl' />
        <div className='mx-auto max-w-5xl'>
          <div className='rounded-[32px] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/40'>
            <p className='inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-200'>Privacy Policy</p>
            <h1 className='mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl'>Your privacy matters at PixelForge AI</h1>
            <p className='mt-6 text-lg leading-8 text-slate-300'>This page explains what information we collect, how we use it, and how we protect your data when you use our website.</p>

            <div className='mt-12 space-y-10 text-slate-300'>
              <div>
                <h2 className='text-2xl font-semibold text-white'>Information we collect</h2>
                <p className='mt-4'>We may collect information you provide directly, such as contact requests, feedback, and form submissions. We also use analytics and advertising services to understand site usage and serve ads.</p>
              </div>

              <div>
                <h2 className='text-2xl font-semibold text-white'>How we use your data</h2>
                <p className='mt-4'>Data is used to operate and improve our service, respond to inquiries, and deliver relevant site experiences. We may also use cookies and third-party services for analytics and advertising.</p>
              </div>

              <div>
                <h2 className='text-2xl font-semibold text-white'>Advertising and third-party services</h2>
                <p className='mt-4'>We use Google AdSense and other advertising networks. These providers may collect data via cookies and similar technologies to personalize ads and measure performance.</p>
              </div>

              <div>
                <h2 className='text-2xl font-semibold text-white'>Security</h2>
                <p className='mt-4'>We take reasonable steps to protect your information, but no website is completely secure. Please contact us if you have any concerns.</p>
              </div>

              <div>
                <h2 className='text-2xl font-semibold text-white'>Contact</h2>
                <p className='mt-4'>If you have questions about this policy, please reach out at <span className='font-semibold text-white'>support@pixelforge.ai</span>.</p>
              </div>
            </div>

            <div className='mt-12 text-center'>
              <Link to='/' className='inline-flex rounded-3xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500'>Return home</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PrivacyPolicy
