import React from 'react'
import { Link } from 'react-router-dom'

const HowToReduceImageSizeWithoutQualityLoss = () => {
  return (
    <main className='min-h-screen bg-slate-950 text-white'>
      <section className='relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8'>
        <div className='absolute left-10 bottom-10 h-44 w-44 rounded-full bg-emerald-500/20 blur-3xl' />
        <div className='mx-auto max-w-5xl'>
          <div className='rounded-4xl border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/40'>
            <p className='inline-flex items-center gap-2 rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-200'>Tutorial</p>
            <h1 className='mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl'>How to reduce image size without quality loss</h1>
            <p className='mt-6 text-lg leading-8 text-slate-300'>Master simple image optimization techniques that keep your visuals crisp while cutting file weight.</p>

            <div className='mt-12 space-y-10 text-slate-300'>
              <div>
                <h2 className='text-2xl font-semibold text-white'>Choose the right format</h2>
                <p className='mt-4'>Convert photos to WebP when possible and save transparent graphics as optimized PNG or SVG. Modern formats reduce size with minimal visible difference.</p>
              </div>
              <div>
                <h2 className='text-2xl font-semibold text-white'>Compress carefully</h2>
                <p className='mt-4'>Use moderate compression levels for photographs to remove excess data without introducing obvious artifacts. Preview the result before finalizing.</p>
              </div>
              <div>
                <h2 className='text-2xl font-semibold text-white'>Resize for the page</h2>
                <p className='mt-4'>Deliver images at the size they will appear on screen. Avoid uploading oversized files, especially for mobile and responsive layouts.</p>
              </div>
            </div>

            <div className='mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
              <Link to='/blog' className='inline-flex rounded-3xl border border-white/10 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-blue-300 hover:text-blue-300'>Back to guides</Link>
              <Link to='/' className='inline-flex rounded-3xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500'>Go home</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HowToReduceImageSizeWithoutQualityLoss
