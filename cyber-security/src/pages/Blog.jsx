import React from 'react'
import { Link } from 'react-router-dom'

const posts = [
  {
    title: 'How AI image enhancement works',
    description: 'Learn how modern AI analyzes and improves contrast, color, and detail automatically.',
    to: '/blog/how-ai-image-enhancement-works',
  },
  {
    title: 'Best image formats for websites',
    description: 'Choose the right file type for faster pages, sharper visuals, and better performance.',
    to: '/blog/best-image-formats-for-websites',
  },
  {
    title: 'How to reduce image size without quality loss',
    description: 'Smart optimization techniques to compress photos while keeping them crisp and clear.',
    to: '/blog/how-to-reduce-image-size-without-quality-loss',
  },
  {
    title: 'Optimize images for fast loading',
    description: 'Practical tips for preparing web images that load quickly on mobile and desktop.',
    to: '/blog/optimize-images-for-fast-loading',
  },
]

const Blog = () => {
  return (
    <main className='min-h-screen bg-slate-950 text-white'>
      <section className='relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8'>
        <div className='absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl' />
        <div className='mx-auto max-w-6xl'>
          <div className='rounded-[32px] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/40'>
            <p className='inline-flex items-center gap-2 rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-200'>Guides & Tutorials</p>
            <h1 className='mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl'>Improve your images with practical tips</h1>
            <p className='mt-6 text-lg leading-8 text-slate-300'>Browse short tutorials that help you choose formats, optimize quality, and make the most of every photo.</p>

            <div className='mt-12 grid gap-6 md:grid-cols-2'>
              {posts.map((post) => (
                <Link
                  key={post.title}
                  to={post.to}
                  className='group rounded-[28px] border border-white/10 bg-slate-950/80 p-6 text-white transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-slate-900/95'
                >
                  <h2 className='text-2xl font-semibold'>{post.title}</h2>
                  <p className='mt-3 text-sm leading-6 text-slate-300'>{post.description}</p>
                  <span className='mt-6 inline-flex text-sm font-semibold text-blue-300 transition group-hover:text-cyan-300'>Read the tutorial →</span>
                </Link>
              ))}
            </div>

            <div className='mt-12 text-center'>
              <Link to='/' className='inline-flex rounded-3xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500'>Return to homepage</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Blog
