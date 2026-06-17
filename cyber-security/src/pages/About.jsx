import React from 'react'

const About = () => {
  return (
    <main className='min-h-screen bg-slate-950 text-white'>
      <section className='relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8'>
        <div className='absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl' />
        <div className='absolute right-8 top-32 h-44 w-44 rounded-full bg-blue-500/30 blur-2xl' />
        <div className='mx-auto max-w-6xl'>
          <div className='grid gap-10 lg:grid-cols-[0.95fr_0.7fr]'>
            <div className='space-y-6'>
              <p className='inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-200'>
                <span className='h-2 w-2 animate-pulse rounded-full bg-blue-300' />
                About PixelForge AI
              </p>
              <h1 className='text-4xl font-bold leading-tight text-white sm:text-5xl'>The future of image enhancement is fast, smart, and unbelievably beautiful.</h1>
              <p className='max-w-2xl text-lg text-slate-300'>PixelForge AI combines intelligent enhancement, fine-grained editing controls, and gorgeous visual effects so every photo looks polished and ready to share.</p>
              <div className='space-y-4 sm:max-w-xl'>
                <p className='rounded-3xl border border-white/10 bg-slate-900/90 p-5 text-slate-300 shadow-xl shadow-slate-950/30'>Upload any photo and instantly see it enhanced with brightness, contrast, color correction, and sharpness improvements. Your edits update live in the preview.</p>
                <p className='rounded-3xl border border-white/10 bg-slate-900/90 p-5 text-slate-300 shadow-xl shadow-slate-950/30'>PixelForge AI is built for creators, storytellers, and anyone who wants their images to pop without complex software.</p>
              </div>
            </div>

            <div className='relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-900/95 p-8 shadow-2xl shadow-slate-950/40'>
              <div className='absolute left-6 top-6 h-10 w-10 rounded-full bg-cyan-500/30 blur-2xl' />
              <div className='absolute bottom-6 right-8 h-14 w-14 rounded-full bg-blue-500/20 blur-3xl' />
              <div className='flex flex-col gap-6'>
                <div className='space-y-3'>
                  <p className='text-sm uppercase tracking-[0.28em] text-blue-300'>Why choose us</p>
                  <h2 className='text-2xl font-semibold text-white'>Creative editing without the learning curve.</h2>
                </div>
                <div className='grid gap-4'>
                  {[
                    { title: 'Smart auto-enhance', description: 'One-click improvement powered by advanced filters and color optimization.', badge: 'AI-driven' },
                    { title: 'Live preview edits', description: 'See changes immediately as you adjust brightness, contrast, and style.', badge: 'Real-time' },
                    { title: 'Download for any platform', description: 'Choose Android, Mac, or Windows and keep your images ready to use.', badge: 'Cross-platform' },
                  ].map((item) => (
                    <div key={item.title} className='rounded-3xl border border-white/10 bg-slate-950/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-slate-900/95'>
                      <div className='flex items-center justify-between gap-4'>
                        <h3 className='text-xl font-semibold text-white'>{item.title}</h3>
                        <span className='rounded-full border border-blue-300/25 bg-blue-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-blue-200'>{item.badge}</span>
                      </div>
                      <p className='mt-3 text-sm leading-6 text-slate-300'>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='border-t border-white/5 px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-6xl'>
          <div className='grid gap-6 lg:grid-cols-3'>
            {[
              { icon: '✨', title: 'Instant boost', description: 'Your photos receive instant contrast, sharpness, and color upgrades.' },
              { icon: '🎨', title: 'Custom style', description: 'Fine-tune every image with slider-based editing controls.' },
              { icon: '🚀', title: 'Fast export', description: 'Download enhanced images quickly across desktop and mobile devices.' },
            ].map((item, index) => (
              <div key={item.title} className='group rounded-[28px] border border-white/5 bg-slate-900/80 p-8 text-center shadow-xl shadow-slate-950/20 transition duration-500 hover:-translate-y-2 hover:bg-slate-900/95'>
                <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-indigo-500 text-2xl shadow-2xl shadow-blue-950/20 transition duration-500 group-hover:scale-110'>{item.icon}</div>
                <h3 className='mt-6 text-xl font-semibold text-white'>{item.title}</h3>
                <p className='mt-3 text-sm leading-6 text-slate-300'>{item.description}</p>
                <div className='mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 opacity-0 transition duration-300 group-hover:opacity-100' />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About

