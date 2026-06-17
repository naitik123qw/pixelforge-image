import React from 'react'
import { Link } from 'react-router-dom'

const OptimizeImagesForFastLoading = () => {
  return (
    <main className='min-h-screen bg-slate-950 text-white'>
      <section className='relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8'>
        <div className='absolute left-10 top-10 h-44 w-44 rounded-full bg-blue-500/20 blur-3xl' />
        <div className='mx-auto max-w-5xl'>
          <div className='rounded-4xl border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/40'>
            <p className='inline-flex items-center gap-2 rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-200'>Tutorial</p>
            <h1 className='mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl'>Optimize images for fast loading</h1>
            <p className='mt-6 text-lg leading-8 text-slate-300'>Follow best practices for page speed with lightweight visuals that still look sharp.</p>

            <div className='mt-12 space-y-10 text-slate-300'>
              <div>
                <h2 className='text-2xl font-semibold text-white'>Serve responsive images</h2>
                <p className='mt-4'>Provide appropriately sized images for different screen widths using responsive markup and multiple image sources.</p>
              </div>
              <div>
                <h2 className='text-2xl font-semibold text-white'>Use modern formats</h2>
                <p className='mt-4'>WebP and AVIF often deliver smaller files than older formats while preserving quality, making pages load more quickly.</p>
              </div>
              <div>
                <h2 className='text-2xl font-semibold text-white'>Avoid unnecessary downloads</h2>
                <p className='mt-4'>Only load images that are visible to the user, and lazy-load offscreen visuals to speed up the first render.</p>
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

export default OptimizeImagesForFastLoading
