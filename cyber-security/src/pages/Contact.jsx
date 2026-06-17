import React from 'react'

const Contact = () => {
  return (
    <main className='min-h-screen bg-slate-950 text-white'>
      <section className='relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8'>
        <div className='absolute left-10 top-10 h-36 w-36 rounded-full bg-pink-500/20 blur-3xl' />
        <div className='absolute right-10 bottom-20 h-52 w-52 rounded-full bg-violet-500/20 blur-3xl' />
        <div className='mx-auto max-w-6xl'>
          <div className='grid gap-12 lg:grid-cols-[0.95fr_0.8fr]'>
            <div className='space-y-6'>
              <p className='inline-flex items-center gap-2 rounded-full bg-violet-500/20 px-4 py-2 text-sm font-semibold text-violet-200'>
                <span className='h-2 w-2 animate-pulse rounded-full bg-violet-300' />
                Contact Us
              </p>
              <h1 className='text-4xl font-bold leading-tight text-white sm:text-5xl'>Get support, ask about PixelForge AI, or submit your feedback.</h1>
              <p className='max-w-2xl text-lg text-slate-300'>We are here to help with onboarding, feature requests, bug reports, and any questions about improving your photos with AI.</p>
            </div>

            <div className='rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30'>
              <div className='space-y-4'>
                <p className='text-sm font-semibold uppercase tracking-[0.3em] text-violet-300'>Reach out</p>
                <p className='text-sm text-slate-300'>Need help with an upload, enhancement workflow, or download options? Send us a message and we’ll respond fast.</p>
                <div className='grid gap-4'>
                  <div className='rounded-3xl border border-white/10 bg-slate-950/90 p-4 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30'>
                    <p className='text-sm uppercase tracking-[0.25em] text-slate-400'>Email</p>
                    <p className='mt-2 font-semibold text-white'>support@pixelforge.ai</p>
                  </div>
                  <div className='rounded-3xl border border-white/10 bg-slate-950/90 p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30'>
                    <p className='text-sm uppercase tracking-[0.25em] text-slate-400'>Help center</p>
                    <p className='mt-2 font-semibold text-white'>www.pixelforge.ai/help</p>
                  </div>
                  <div className='rounded-3xl border border-white/10 bg-slate-950/90 p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30'>
                    <p className='text-sm uppercase tracking-[0.25em] text-slate-400'>Follow us</p>
                    <p className='mt-2 font-semibold text-white'>@pixelforge_ai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='border-t border-white/5 px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-6xl'>
          <div className='grid gap-8 lg:grid-cols-[0.95fr_0.8fr]'>
            <div className='space-y-6 rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30'>
              <div className='space-y-4'>
                <h2 className='text-3xl font-semibold text-white'>Send us a message</h2>
                <p className='text-slate-300'>Share your idea, request a feature, or let us know how we can make PixelForge AI even better.</p>
              </div>
              <form className='grid gap-5'>
                <input className='rounded-3xl border border-white/10 bg-slate-950/90 px-5 py-4 text-white outline-none transition focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/20' type='text' placeholder='Your name' />
                <input className='rounded-3xl border border-white/10 bg-slate-950/90 px-5 py-4 text-white outline-none transition focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/20' type='email' placeholder='Email address' />
                <textarea className='min-h-[180px] rounded-3xl border border-white/10 bg-slate-950/90 px-5 py-4 text-white outline-none transition focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/20' placeholder='How can we help?' />
                <button type='submit' className='inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-4 text-sm font-semibold text-white shadow-xl shadow-violet-500/20 transition hover:scale-[1.01] hover:from-violet-400 hover:to-fuchsia-400'>Submit request</button>
              </form>
            </div>

            <div className='rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-900 to-slate-950/95 p-8 text-slate-300 shadow-2xl shadow-slate-950/30'>
              <div className='space-y-6'>
                <div className='rounded-[28px] border border-violet-500/10 bg-violet-500/5 p-6 backdrop-blur-xl'>
                  <p className='text-sm font-semibold uppercase tracking-[0.3em] text-violet-300'>Fast response</p>
                  <p className='mt-4 text-2xl font-semibold text-white'>We reply within 24 hours.</p>
                </div>
                <div className='grid gap-4'>
                  {[
                    { label: 'Support hours', value: 'Mon-Fri 9am - 7pm' },
                    { label: 'API & integration', value: 'ask@pixelforge.ai' },
                    { label: 'Report bug', value: 'bug@pixelforge.ai' },
                  ].map((item) => (
                    <div key={item.label} className='rounded-3xl border border-white/10 bg-slate-950/90 p-5 transition duration-300 hover:-translate-y-1 hover:border-fuchsia-400/30'>
                      <p className='text-sm uppercase tracking-[0.22em] text-slate-400'>{item.label}</p>
                      <p className='mt-2 font-semibold text-white'>{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
