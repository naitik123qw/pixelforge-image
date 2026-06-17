import React from 'react'
import { Link } from 'react-router-dom'

const BestImageFormatsForWebsites = () => {
  return (
    <main className='min-h-screen bg-slate-950 text-white'>
      <section className='relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8'>
        <div className='absolute right-10 top-10 h-44 w-44 rounded-full bg-violet-500/20 blur-3xl' />
        <div className='mx-auto max-w-5xl'>
          <div className='rounded-[32px] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/40'>
            <p className='inline-flex items-center gap-2 rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-200'>Tutorial</p>
            <h1 className='mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl'>Best image formats for websites</h1>
            <p className='mt-6 text-lg leading-8 text-slate-300'>Learn which file types deliver the best balance of quality and speed for modern websites.</p>

            <div className='mt-12 space-y-10 text-slate-300'>
              <div>
                <h2 className='text-2xl font-semibold text-white'>Use WebP for most images</h2>
                <p className='mt-4'>WebP often offers much smaller file sizes than JPEG or PNG while preserving sharp detail. It is ideal for photographs and illustrations on fast-loading pages.</p>
              </div>
              <div>
                <h2 className='text-2xl font-semibold text-white'>When PNG still makes sense</h2>
                <p className='mt-4'>Choose PNG for logos, icons, and images with transparency. It keeps edges crisp and supports transparent backgrounds without introducing artifacts.</p>
              </div>
              <div>
                <h2 className='text-2xl font-semibold text-white'>SVG for vector graphics</h2>
                <p className='mt-4'>SVG is best for simple logos, icons, and illustrations because it scales cleanly at any size and often loads faster than bitmapped formats.</p>
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

export default BestImageFormatsForWebsites
