import React from 'react'
import { Link } from 'react-router-dom'

const HowAIImageEnhancementWorks = () => {
  return (
    <main className='min-h-screen bg-slate-950 text-white'>
      <section className='relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8'>
        <div className='absolute left-10 top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl' />
        <div className='mx-auto max-w-5xl'>
          <div className='rounded-[32px] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/40'>
            <p className='inline-flex items-center gap-2 rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-200'>Tutorial</p>
            <h1 className='mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl'>How AI image enhancement works</h1>
            <p className='mt-6 text-lg leading-8 text-slate-300'>Discover how intelligent algorithms analyze your photo and make targeted improvements to color, clarity, and detail.</p>

            <div className='mt-12 space-y-10 text-slate-300'>
              <div>
                <h2 className='text-2xl font-semibold text-white'>Smart image analysis</h2>
                <p className='mt-4'>AI first examines brightness, contrast, and color balance. It identifies underexposed areas, faded colors, and weak detail so the enhancement is precise rather than generic.</p>
              </div>
              <div>
                <h2 className='text-2xl font-semibold text-white'>Automatic enhancement choices</h2>
                <p className='mt-4'>Once the image is analyzed, the tool applies improvements such as contrast boosts, saturation corrections, and sharpness adjustments to bring out texture and depth.</p>
              </div>
              <div>
                <h2 className='text-2xl font-semibold text-white'>Control and fine-tuning</h2>
                <p className='mt-4'>You can still personalize the result. Use sliders for brightness, contrast, and color or choose presets to match your style while preserving natural results.</p>
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

export default HowAIImageEnhancementWorks
