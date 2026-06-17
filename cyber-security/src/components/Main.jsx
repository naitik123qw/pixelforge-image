import React, { useEffect, useRef, useState } from 'react'

const defaultFilters = {
  brightness: 120,
  contrast: 130,
  saturation: 140,
  grayscale: 0,
  sepia: 0,
  blur: 0,
  hueRotate: 0,
}

const filterPresets = {
  original: {
    label: 'Original',
    values: { ...defaultFilters },
  },
  vivid: {
    label: 'Vivid',
    values: {
      brightness: 140,
      contrast: 155,
      saturation: 180,
      grayscale: 0,
      sepia: 0,
      blur: 0,
      hueRotate: 0,
    },
  },
  warmGlow: {
    label: 'Warm Glow',
    values: {
      brightness: 145,
      contrast: 135,
      saturation: 165,
      grayscale: 0,
      sepia: 20,
      blur: 0,
      hueRotate: 5,
    },
  },
  coolMint: {
    label: 'Cool Mint',
    values: {
      brightness: 110,
      contrast: 145,
      saturation: 170,
      grayscale: 0,
      sepia: 0,
      blur: 0,
      hueRotate: 180,
    },
  },
  noir: {
    label: 'Noir',
    values: {
      brightness: 110,
      contrast: 150,
      saturation: 20,
      grayscale: 100,
      sepia: 0,
      blur: 0,
      hueRotate: 0,
    },
  },
  sunrise: {
    label: 'Sunrise',
    values: {
      brightness: 150,
      contrast: 140,
      saturation: 175,
      grayscale: 0,
      sepia: 25,
      blur: 0,
      hueRotate: 10,
    },
  },
}

const Main = () => {
  const [previewUrl, setPreviewUrl] = useState('')
  const [enhancedUrl, setEnhancedUrl] = useState('')
  const [originalName, setOriginalName] = useState('image.png')
  const [filters, setFilters] = useState(defaultFilters)
  const [selectedPreset, setSelectedPreset] = useState('original')
  const [arActive, setArActive] = useState(false)
  const [selectedSticker, setSelectedSticker] = useState('none')
  const [selectedObject, setSelectedObject] = useState('none')
  const [objectPosition, setObjectPosition] = useState('center')
  const [arCaptureUrl, setArCaptureUrl] = useState('')
  const [arFilters, setArFilters] = useState({ brightness: 100, contrast: 100, saturation: 100 })
  const [cameraError, setCameraError] = useState('')
  const imageRef = useRef(null)
  const canvasRef = useRef(null)
  const videoRef = useRef(null)
  const arCanvasRef = useRef(null)
  const streamRef = useRef(null)

  const filterString = `brightness(${filters.brightness}%) contrast(${filters.contrast}%) saturate(${filters.saturation}%) grayscale(${filters.grayscale}%) sepia(${filters.sepia}%) blur(${filters.blur}px) hue-rotate(${filters.hueRotate}deg)`

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0]
    if (!selectedFile) return

    setOriginalName(selectedFile.name)
    setPreviewUrl(URL.createObjectURL(selectedFile))
    setFilters(defaultFilters)
    setSelectedPreset('original')
    setSelectedObject('none')
    setObjectPosition('center')
    setEnhancedUrl('')
  }

  const applyPreset = (presetKey) => {
    const preset = filterPresets[presetKey]
    if (!preset) return
    setFilters(preset.values)
    setSelectedPreset(presetKey)
  }

  const drawCanvas = () => {
    const img = imageRef.current
    const canvas = canvasRef.current
    if (!img || !canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = img.naturalWidth
    canvas.height = img.naturalHeight
    ctx.filter = filterString
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    if (selectedObject !== 'none') {
      drawOverlayObject(ctx, canvas.width, canvas.height)
    }
    setEnhancedUrl(canvas.toDataURL('image/png'))
  }

  const arStickerOptions = [
    { key: 'none', label: 'None', emoji: '' },
    { key: 'sunglasses', label: 'Glasses', emoji: '🕶️' },
    { key: 'heartEyes', label: 'Love Lens', emoji: '😍' },
    { key: 'crown', label: 'Royal', emoji: '👑' },
    { key: 'sparkle', label: 'Sparkle', emoji: '✨' },
  ]

  const arFilterString = `brightness(${arFilters.brightness}%) contrast(${arFilters.contrast}%) saturate(${arFilters.saturation}%)`

  const drawArSticker = (ctx, width, height) => {
    const centerX = width / 2
    const centerY = height / 3
    ctx.save()
    ctx.font = `${Math.floor(width / 5)}px serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(arStickerOptions.find((option) => option.key === selectedSticker)?.emoji || '', centerX, centerY)
    ctx.restore()
  }

  const objectOptions = [
    { key: 'none', label: 'None', emoji: '' },
    { key: 'star', label: 'Star', emoji: '⭐' },
    { key: 'heart', label: 'Heart', emoji: '❤️' },
    { key: 'sparkle', label: 'Sparkle', emoji: '✨' },
    { key: 'hat', label: 'Hat', emoji: '🎩' },
  ]

  const objectPositionOptions = [
    { key: 'top-left', label: 'Top left' },
    { key: 'center', label: 'Center' },
    { key: 'bottom-right', label: 'Bottom right' },
  ]

  const selectedObjectEmoji = objectOptions.find((option) => option.key === selectedObject)?.emoji || ''

  const drawOverlayObject = (ctx, width, height) => {
    const objectEmoji = objectOptions.find((option) => option.key === selectedObject)?.emoji
    if (!objectEmoji) return

    const positions = {
      'top-left': [width * 0.2, height * 0.2],
      center: [width * 0.5, height * 0.5],
      'bottom-right': [width * 0.8, height * 0.8],
    }

    const [x, y] = positions[objectPosition] || positions.center

    ctx.save()
    ctx.font = `${Math.floor(width / 6)}px serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(objectEmoji, x, y)
    ctx.restore()
  }

  const captureArPhoto = () => {
    const video = videoRef.current
    const canvas = arCanvasRef.current
    if (!video || !canvas) return

    const width = video.videoWidth || 640
    const height = video.videoHeight || 480
    canvas.width = width
    canvas.height = height

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.filter = arFilterString
    ctx.clearRect(0, 0, width, height)
    ctx.drawImage(video, 0, 0, width, height)
    if (selectedSticker !== 'none') {
      drawArSticker(ctx, width, height)
    }

    setArCaptureUrl(canvas.toDataURL('image/png'))
  }

  useEffect(() => {
    if (!previewUrl) return
    if (imageRef.current?.complete) {
      drawCanvas()
    }
  }, [previewUrl, filters, selectedObject, objectPosition])

  useEffect(() => {
    if (window.adsbygoogle) {
      try {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch (error) {
        console.error('Adsense push failed', error)
      }
    }
  }, [])

  useEffect(() => {
    if (!arActive) {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop())
        streamRef.current = null
      }
      return
    }

    setCameraError('')
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: 'user' } })
      .then((stream) => {
        streamRef.current = stream
        if (videoRef.current) {
          videoRef.current.srcObject = stream
          videoRef.current.play().catch(() => {})
        }
      })
      .catch((error) => {
        console.error(error)
        setCameraError('Unable to access the camera. Please allow camera access and refresh the page.')
        setArActive(false)
      })

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop())
        streamRef.current = null
      }
    }
  }, [arActive])

  const handleImageLoad = () => {
    drawCanvas()
  }

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }))
  }

  const applyAutoEnhance = () => {
    applyPreset('vivid')
  }

  const resetFilters = () => {
    setFilters(defaultFilters)
    setSelectedPreset('original')
  }

  return (
    <section className='mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8'>
      <div className='mb-10 rounded-[36px] border border-white/10 bg-slate-950/90 p-8 shadow-2xl shadow-slate-950/30'>
        <div className='grid gap-8 xl:grid-cols-[1.4fr_0.9fr]'>
          <div className='space-y-6'>
            <p className='text-sm font-semibold uppercase tracking-[0.3em] text-blue-400'>Welcome to PixelForge</p>
            <h1 className='text-4xl font-bold leading-tight text-white sm:text-5xl'>Enhance images instantly with smart AI tools.</h1>
            <p className='max-w-2xl text-base text-slate-300 sm:text-lg'>Upload any photo, let our intelligent enhancement engine improve color and clarity, then refine the result with easy controls. Built for speed, quality, and worry-free editing.</p>
            <div className='grid gap-4 sm:grid-cols-3'>
              {[
                { title: 'Trusted by creators', description: 'Used by photographers, marketers, and designers to polish visuals fast.' },
                { title: 'Privacy-safe process', description: 'We do not claim ownership of your files and keep uploads secure.' },
                { title: 'Fast results', description: 'Enhance and download images quickly without complex software.' },
              ].map((item) => (
                <div key={item.title} className='rounded-3xl border border-white/10 bg-slate-900/80 p-5'>
                  <p className='text-sm uppercase tracking-[0.24em] text-slate-400'>{item.title}</p>
                  <p className='mt-3 text-sm leading-6 text-slate-300'>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='rounded-4xl border border-white/10 bg-linear-to-br from-slate-900/80 via-slate-950 to-slate-900/95 p-8 shadow-2xl shadow-slate-950/40'>
            <h2 className='text-2xl font-semibold text-white'>What PixelForge AI offers</h2>
            <p className='mt-4 text-slate-300'>Enhance images intelligently, preview edits live, and export high-quality results for web and mobile.</p>
            <div className='mt-8 grid gap-4'>
              {[
                { title: 'AI-enhanced color', description: 'Automatically correct tones and boost vibrancy while preserving natural detail.' },
                { title: 'Live preview control', description: 'Adjust brightness, contrast, saturation, and style instantly.' },
                { title: 'Download-ready output', description: 'Export polished images in one click with minimal fuss.' },
              ].map((item) => (
                <div key={item.title} className='rounded-3xl border border-white/10 bg-slate-950/90 p-5'>
                  <h3 className='text-lg font-semibold text-white'>{item.title}</h3>
                  <p className='mt-2 text-slate-300'>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='rounded-4xl border border-white/10 bg-slate-950/90 p-6 shadow-2xl shadow-slate-950/30'>
        <div className='mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.24em] text-blue-400'>PixelForge AI</p>
            <h1 className='mt-2 text-3xl font-semibold text-white sm:text-4xl'>Image upload, enhancement, and editing</h1>
            <p className='mt-3 max-w-2xl text-sm text-slate-400 sm:text-base'>Upload an image, apply intelligent enhancements, fine-tune edits, and download the final result.</p>
          </div>
          <div className='flex flex-col gap-3 rounded-3xl bg-slate-900/80 p-4 text-sm text-slate-300 ring-1 ring-white/10'>
            <p className='font-semibold text-white'>Quick tips</p>
            <p>Upload a photo, adjust the sliders, then download the enhanced image.</p>
          </div>
        </div>

        <div className='grid gap-6 lg:grid-cols-[1.2fr_0.8fr]'>
          <div className='space-y-6'>
            <div className='rounded-3xl border border-white/10 bg-slate-900/80 p-6'>
              <label className='text-sm font-semibold text-slate-200'>Choose image</label>
              <input
                type='file'
                accept='image/*'
                onChange={handleFileChange}
                className='mt-3 block w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20'
              />
            </div>

            <div className='grid gap-4 sm:grid-cols-2'>
              <button
                type='button'
                onClick={applyAutoEnhance}
                className='rounded-3xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400'
              >
                Auto Enhance
              </button>
              <button
                type='button'
                onClick={resetFilters}
                className='rounded-3xl border border-white/10 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-blue-300 hover:text-blue-300'
              >
                Reset edits
              </button>
            </div>

            <div className='rounded-3xl border border-white/10 bg-slate-900/80 p-6'>
              <p className='text-sm font-semibold text-white'>Snapchat-style filters</p>
              <div className='mt-4 grid gap-3 sm:grid-cols-3'>
                {Object.entries(filterPresets).map(([key, preset]) => (
                  <button
                    key={key}
                    type='button'
                    onClick={() => applyPreset(key)}
                    className={`rounded-3xl px-4 py-3 text-sm font-semibold transition ${selectedPreset === key ? 'bg-blue-500 text-white' : 'bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-white'}`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            <div className='rounded-3xl border border-white/10 bg-slate-900/80 p-6'>
              <p className='text-sm font-semibold text-white'>Enhancement controls</p>
              <div className='mt-6 space-y-5'>
                {[
                  { name: 'brightness', label: 'Brightness', min: 80, max: 180 },
                  { name: 'contrast', label: 'Contrast', min: 80, max: 180 },
                  { name: 'saturation', label: 'Saturation', min: 80, max: 180 },
                  { name: 'grayscale', label: 'Grayscale', min: 0, max: 100 },
                  { name: 'sepia', label: 'Warmth', min: 0, max: 100 },
                  { name: 'blur', label: 'Sharpness', min: 0, max: 4, step: 0.1 },
                  { name: 'hueRotate', label: 'Hue shift', min: -180, max: 180, step: 1 },
                ].map((control) => (
                  <div key={control.name}>
                    <div className='flex items-center justify-between text-sm text-slate-300'>
                      <span>{control.label}</span>
                      <span className='font-semibold text-white'>
                        {filters[control.name]}
                        {control.name === 'blur' ? 'px' : control.name === 'hueRotate' ? '°' : '%'}
                      </span>
                    </div>
                    <input
                      type='range'
                      min={control.min}
                      max={control.max}
                      step={control.step ?? 1}
                      value={filters[control.name]}
                      onChange={(event) => handleFilterChange(control.name, Number(event.target.value))}
                      className='mt-2 w-full accent-blue-400'
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='space-y-6'>
            <div className='rounded-3xl border border-white/10 bg-slate-900/80 p-6'>
              <p className='text-sm font-semibold text-white'>Preview</p>
              <div className='mt-4 min-h-80 overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-950 p-4'>
                <div className='mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
                  <div className='flex items-center gap-2'>
                    <button
                      type='button'
                      onClick={() => setArActive(false)}
                      className={`rounded-3xl px-4 py-2 text-sm font-semibold transition ${!arActive ? 'bg-blue-500 text-white' : 'bg-slate-900 text-slate-300 hover:bg-slate-800'}`}
                    >
                      Image Mode
                    </button>
                    <button
                      type='button'
                      onClick={() => setArActive(true)}
                      className={`rounded-3xl px-4 py-2 text-sm font-semibold transition ${arActive ? 'bg-blue-500 text-white' : 'bg-slate-900 text-slate-300 hover:bg-slate-800'}`}
                    >
                      Live AR Lens
                    </button>
                  </div>
                  {arActive && (
                    <div className='flex flex-wrap gap-2'>
                      {arStickerOptions.map((option) => (
                        <button
                          key={option.key}
                          type='button'
                          onClick={() => setSelectedSticker(option.key)}
                          className={`rounded-3xl px-3 py-2 text-sm font-semibold transition ${selectedSticker === option.key ? 'bg-blue-500 text-white' : 'bg-slate-900 text-slate-300 hover:bg-slate-800'}`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {!arActive && previewUrl && (
                  <div className='mt-4 rounded-3xl border border-white/10 bg-slate-900/80 p-4'>
                    <p className='text-sm font-semibold text-white'>Add object to image</p>
                    <div className='mt-4 grid gap-3 sm:grid-cols-2'>
                      {objectOptions.map((option) => (
                        <button
                          key={option.key}
                          type='button'
                          onClick={() => setSelectedObject(option.key)}
                          className={`rounded-3xl px-4 py-3 text-sm font-semibold transition ${selectedObject === option.key ? 'bg-blue-500 text-white' : 'bg-slate-900 text-slate-300 hover:bg-slate-800'}`}
                        >
                          {option.emoji} {option.label}
                        </button>
                      ))}
                    </div>
                    <div className='mt-4 flex flex-wrap gap-2'>
                      {objectPositionOptions.map((position) => (
                        <button
                          key={position.key}
                          type='button'
                          onClick={() => setObjectPosition(position.key)}
                          className={`rounded-3xl px-4 py-3 text-sm font-semibold transition ${objectPosition === position.key ? 'bg-blue-500 text-white' : 'bg-slate-900 text-slate-300 hover:bg-slate-800'}`}
                        >
                          {position.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {arActive ? (
                  <div className='relative h-80 overflow-hidden rounded-3xl border border-slate-700 bg-black'>
                    <video
                      ref={videoRef}
                      className='h-full w-full object-cover'
                      playsInline
                      muted
                    />
                    {selectedSticker !== 'none' && (
                      <div className='pointer-events-none absolute inset-x-0 top-0 flex justify-center pt-16 text-[4rem]'>
                        {arStickerOptions.find((option) => option.key === selectedSticker)?.emoji}
                      </div>
                    )}
                    {cameraError && (
                      <div className='absolute inset-0 flex items-center justify-center bg-black/70 text-center text-sm text-red-300'>
                        {cameraError}
                      </div>
                    )}
                  </div>
                ) : previewUrl ? (
                  <div className='relative h-80 w-full rounded-3xl border border-slate-700/60 bg-slate-950'>
                    <img
                      ref={imageRef}
                      src={previewUrl}
                      alt='Uploaded preview'
                      onLoad={handleImageLoad}
                      style={{ filter: filterString }}
                      className='h-full w-full rounded-3xl object-contain'
                    />
                    {selectedObject !== 'none' && selectedObjectEmoji && (
                      <div className={`pointer-events-none absolute ${objectPosition === 'top-left' ? 'left-8 top-8' : objectPosition === 'bottom-right' ? 'right-8 bottom-8' : 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'} text-[4rem]`}>
                        {selectedObjectEmoji}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className='flex h-80 items-center justify-center rounded-3xl border border-dashed border-slate-600 bg-slate-950 text-center text-slate-500'>
                    Upload an image or switch to Live AR Lens to begin.
                  </div>
                )}
              </div>

              <div className='mt-5 flex flex-col gap-3 sm:flex-row sm:items-center'>
                {!arActive ? (
                  <>
                    <a
                      href={enhancedUrl || previewUrl || '#'}
                      download={`pixelforge-enhanced-${originalName}`}
                      className={`inline-flex items-center justify-center rounded-3xl px-5 py-3 text-sm font-semibold transition ${previewUrl ? 'bg-blue-500 text-white hover:bg-blue-400' : 'cursor-not-allowed bg-slate-700 text-slate-400'}`}
                      aria-disabled={!previewUrl}
                    >
                      Download Enhanced Image
                    </a>
                    <span className='text-sm text-slate-500'>Use the sliders to fine-tune the result before downloading.</span>
                  </>
                ) : (
                  <>
                    <button
                      type='button'
                      onClick={captureArPhoto}
                      className='inline-flex items-center justify-center rounded-3xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400'
                    >
                      Capture AR Photo
                    </button>
                    <a
                      href={arCaptureUrl || '#'}
                      download={`pixelforge-ar-${originalName}`}
                      className={`inline-flex items-center justify-center rounded-3xl px-5 py-3 text-sm font-semibold transition ${arCaptureUrl ? 'bg-green-500 text-white hover:bg-green-400' : 'cursor-not-allowed bg-slate-700 text-slate-400'}`}
                      aria-disabled={!arCaptureUrl}
                    >
                      Download AR Photo
                    </a>
                  </>
                )}
              </div>

              {arActive && (
                <div className='mt-4 rounded-3xl border border-white/10 bg-slate-900/80 p-4'>
                  <p className='text-sm font-semibold text-white'>AR Lens Filters</p>
                  <div className='mt-4 grid gap-4 sm:grid-cols-3'>
                    {[
                      { name: 'brightness', label: 'Brightness', value: arFilters.brightness, min: 80, max: 140 },
                      { name: 'contrast', label: 'Contrast', value: arFilters.contrast, min: 80, max: 140 },
                      { name: 'saturation', label: 'Saturation', value: arFilters.saturation, min: 80, max: 180 },
                    ].map((control) => (
                      <div key={control.name}>
                        <div className='flex items-center justify-between text-sm text-slate-300'>
                          <span>{control.label}</span>
                          <span className='font-semibold text-white'>{control.value}%</span>
                        </div>
                        <input
                          type='range'
                          min={control.min}
                          max={control.max}
                          value={control.value}
                          onChange={(event) => setArFilters((prev) => ({ ...prev, [control.name]: Number(event.target.value) }))}
                          className='mt-2 w-full accent-blue-400'
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='mt-8 rounded-4xl border border-blue-500/20 bg-slate-900/90 p-6 shadow-2xl shadow-blue-950/20 animate-fade-in-up'>
        <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.24em] text-blue-400'>Customer Support</p>
            <h2 className='mt-2 text-2xl font-semibold text-white'>Need help with PixelForge?</h2>
            <p className='mt-3 max-w-2xl text-sm text-slate-300'>Our team is available to help with uploads, AR lenses, or export issues. Reach out anytime and we’ll get back to you quickly.</p>
          </div>
          <div className='grid gap-3 sm:grid-cols-2'>
            <a href='mailto:support@pixelforge.ai' className='rounded-3xl border border-blue-500/40 bg-blue-500/10 px-5 py-4 text-left text-sm text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-500/20'>
              <p className='font-semibold'>Email Support</p>
              <p className='text-slate-300'>support@pixelforge.ai</p>
            </a>
            <a href='tel:+18001234567' className='rounded-3xl border border-slate-700/80 bg-slate-950/80 px-5 py-4 text-left text-sm text-white transition duration-300 hover:-translate-y-1 hover:border-blue-500/40'>
              <p className='font-semibold'>Call Sales</p>
              <p className='text-slate-300'>+1 (800) 123-4567</p>
            </a>
          </div>
        </div>
      </div>

      {/* add-1 */}
      <div className='mt-8 rounded-3xl border border-white/10 bg-slate-900/80 p-6 text-center'>
        <ins
          className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client='ca-pub-5902005630547739'
          data-ad-slot='5172306320'
          data-ad-format='auto'
          data-full-width-responsive='true'
        />
      </div>

      <canvas ref={canvasRef} className='hidden' />
    </section>
  )
}

export default Main
