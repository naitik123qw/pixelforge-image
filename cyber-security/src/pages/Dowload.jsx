import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const platformData = {
  android: {
    title: 'Android Install',
    description: 'Add PixelForge AI to your home screen for a native-like Android experience.',
    button: 'Install App',
  },
  windows: {
    title: 'Windows Install',
    description: 'Download the PixelForge AI Electron installer for Windows.',
    button: 'Download Electron Installer',
    download: '/PixelForgeAI-Installer.exe',
  },
}

const Download = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [installAvailable, setInstallAvailable] = useState(false)
  const location = useLocation()
  const selectedPlatform = new URLSearchParams(location.search).get('platform') || 'android'
  const platform = platformData[selectedPlatform.toLowerCase()] || platformData.android

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault()
      setDeferredPrompt(event)
      setInstallAvailable(true)
    }

    const handleAppInstalled = () => {
      setDeferredPrompt(null)
      setInstallAvailable(false)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [])

  const handleAndroidInstall = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const choiceResult = await deferredPrompt.userChoice
    if (choiceResult.outcome === 'accepted') {
      setInstallAvailable(false)
    }
    setDeferredPrompt(null)
  }

  const renderActionButton = () => {
    if (selectedPlatform === 'windows') {
      return (
        <a
          href={platform.download}
          download='PixelForgeAI-Installer.exe'
          className='inline-flex w-full items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 text-sm font-semibold text-white shadow-xl shadow-cyan-500/20 transition hover:from-blue-500 hover:to-cyan-400'
        >
          {platform.button}
        </a>
      )
    }

    return (
      <button
        type='button'
        onClick={handleAndroidInstall}
        disabled={!installAvailable}
        className='inline-flex w-full items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 text-sm font-semibold text-white shadow-xl shadow-cyan-500/20 transition hover:from-blue-500 hover:to-cyan-400 disabled:cursor-not-allowed disabled:opacity-50'
      >
        {installAvailable ? platform.button : 'Open browser menu > Install'}
      </button>
    )
  }

  return (
    <main className='min-h-screen bg-slate-950 text-white'>
      <section className='relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8'>
        <div className='absolute left-0 top-10 h-36 w-36 rounded-full bg-blue-500/20 blur-3xl' />
        <div className='absolute right-0 top-24 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl' />
        <div className='mx-auto max-w-6xl'>
          <div className='grid gap-10 lg:grid-cols-[0.9fr_0.7fr]'>
            <div className='space-y-6'>
              <p className='inline-flex items-center gap-2 rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-200'>
                <span className='h-2 w-2 animate-pulse rounded-full bg-cyan-300' />
                Download PixelForge AI
              </p>
              <h1 className='text-4xl font-bold leading-tight text-white sm:text-5xl'>Choose your platform and get the app instantly.</h1>
              <p className='max-w-2xl text-lg text-slate-300'>PixelForge AI works smoothly on Android and Windows. Select the version you need, then follow the simple installation steps.</p>
              <div className='grid gap-4 sm:grid-cols-2'>
                {Object.entries(platformData).map(([key, item]) => (
                  <Link
                    key={key}
                    to={`/download?platform=${key}`}
                    className={`rounded-3xl border px-4 py-5 text-center transition duration-300 ${selectedPlatform === key ? 'border-cyan-400 bg-cyan-500/10 text-cyan-200 shadow-blue-500/20 shadow-lg' : 'border-white/10 bg-slate-900/80 text-slate-300 hover:border-cyan-300 hover:bg-slate-900/95'}`}
                  >
                    <p className='text-sm uppercase tracking-[0.3em] text-slate-400'>{key}</p>
                    <p className='mt-4 text-lg font-semibold'>{item.title}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className='rounded-[32px] border border-white/10 bg-slate-900/85 p-8 shadow-2xl shadow-slate-950/30'>
              <div className='space-y-6'>
                <div className='rounded-3xl border border-cyan-400/10 bg-cyan-500/5 p-6'>
                  <p className='text-sm uppercase tracking-[0.3em] text-cyan-200'>Selected platform</p>
                  <h2 className='mt-4 text-2xl font-semibold text-white'>{platform.title}</h2>
                  <p className='mt-3 text-slate-300'>{platform.description}</p>
                </div>

                <div className='space-y-4'>
                  {renderActionButton()}
                  <div className='rounded-3xl border border-white/10 bg-slate-950/90 p-5 text-sm text-slate-300'>
                    <p className='font-semibold text-white'>Installation steps</p>
                    <ol className='mt-4 space-y-3 list-decimal pl-5 text-slate-300'>
                      <li>Download the installer for your selected platform.</li>
                      <li>Open the file and follow the on-screen instructions.</li>
                      <li>Launch PixelForge AI and start enhancing your images.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='border-t border-white/5 px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-6xl'>
          <div className='grid gap-6 lg:grid-cols-2'>
            <div className='rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/30'>
              <p className='text-sm uppercase tracking-[0.3em] text-cyan-300'>What you get</p>
              <h3 className='mt-4 text-2xl font-semibold text-white'>A polished app experience on every device.</h3>
              <ul className='mt-6 space-y-4 text-slate-300'>
                <li className='rounded-3xl border border-white/5 bg-slate-950/90 p-5'>Fast installation and a modern UI tuned for desktop and mobile.</li>
                <li className='rounded-3xl border border-white/5 bg-slate-950/90 p-5'>Seamless image upload, enhancement, and export workflows.</li>
                <li className='rounded-3xl border border-white/5 bg-slate-950/90 p-5'>Support for Android PWA install and Windows EXE download.</li>
              </ul>
            </div>
            <div className='rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-900/95 p-8 shadow-xl shadow-slate-950/30'>
              <p className='text-sm uppercase tracking-[0.3em] text-cyan-300'>Need help?</p>
              <h3 className='mt-4 text-2xl font-semibold text-white'>Still not sure which version to choose?</h3>
              <p className='mt-4 text-slate-300'>Visit our contact page to ask for guidance, get support, or request a custom installer package.</p>
              <Link
                to='/contact'
                className='mt-6 inline-flex rounded-3xl bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20'
              >
                Contact support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Download

