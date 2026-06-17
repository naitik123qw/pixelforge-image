import React, { useEffect, useRef, useState } from 'react'

const defaultFilters = {
  brightness: 120,
  contrast: 130,
  saturation: 140,
  grayscale: 0,
  sepia: 0,
  blur: 0,
}

const Main = () => {
  const [file, setFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState('')
  const [enhancedUrl, setEnhancedUrl] = useState('')
  const [originalName, setOriginalName] = useState('image.png')
  const [filters, setFilters] = useState(defaultFilters)
  const imageRef = useRef(null)
  const canvasRef = useRef(null)

  const filterString = `brightness(${filters.brightness}%) contrast(${filters.contrast}%) saturate(${filters.saturation}%) grayscale(${filters.grayscale}%) sepia(${filters.sepia}%) blur(${filters.blur}px)`

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0]
    if (!selectedFile) return

    setFile(selectedFile)
    setOriginalName(selectedFile.name)
    setPreviewUrl(URL.createObjectURL(selectedFile))
    setFilters(defaultFilters)
    setEnhancedUrl('')
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
    setEnhancedUrl(canvas.toDataURL('image/png'))
  }

  useEffect(() => {
    if (!previewUrl) return
    if (imageRef.current?.complete) {
      drawCanvas()
    }
  }, [previewUrl, filters])

  const handleImageLoad = () => {
    drawCanvas()
  }

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }))
  }

  const applyAutoEnhance = () => {
    setFilters({
      brightness: 135,
      contrast: 145,
      saturation: 155,
      grayscale: 0,
      sepia: 5,
      blur: 0,
    })
  }

  const resetFilters = () => {
    setFilters(defaultFilters)
  }

  return (
    <section className='mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8'>
      <div className='rounded-[32px] border border-white/10 bg-slate-950/90 p-6 shadow-2xl shadow-slate-950/30'>
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
              <p className='text-sm font-semibold text-white'>Enhancement controls</p>
              <div className='mt-6 space-y-5'>
                {[
                  { name: 'brightness', label: 'Brightness', min: 80, max: 180 },
                  { name: 'contrast', label: 'Contrast', min: 80, max: 180 },
                  { name: 'saturation', label: 'Saturation', min: 80, max: 180 },
                  { name: 'grayscale', label: 'Grayscale', min: 0, max: 100 },
                  { name: 'sepia', label: 'Warmth', min: 0, max: 100 },
                  { name: 'blur', label: 'Sharpness', min: 0, max: 4, step: 0.1 },
                ].map((control) => (
                  <div key={control.name}>
                    <div className='flex items-center justify-between text-sm text-slate-300'>
                      <span>{control.label}</span>
                      <span className='font-semibold text-white'>{filters[control.name]}{control.name === 'blur' ? 'px' : '%'}</span>
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
              <div className='mt-4 min-h-[320px] overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-950 p-4'>
                {previewUrl ? (
                  <img
                    ref={imageRef}
                    src={previewUrl}
                    alt='Uploaded preview'
                    onLoad={handleImageLoad}
                    style={{ filter: filterString }}
                    className='h-full w-full rounded-3xl object-contain'
                  />
                ) : (
                  <div className='flex h-80 items-center justify-center rounded-3xl border border-dashed border-slate-600 bg-slate-950 text-center text-slate-500'>
                    Upload an image to see the enhanced preview.
                  </div>
                )}
              </div>

              <div className='mt-5 flex flex-col gap-3 sm:flex-row sm:items-center'>
                <a
                  href={enhancedUrl || previewUrl || '#'}
                  download={`pixelforge-enhanced-${originalName}`}
                  className={`inline-flex items-center justify-center rounded-3xl px-5 py-3 text-sm font-semibold transition ${previewUrl ? 'bg-blue-500 text-white hover:bg-blue-400' : 'cursor-not-allowed bg-slate-700 text-slate-400'}`}
                  aria-disabled={!previewUrl}
                >
                  Download Enhanced Image
                </a>
                <span className='text-sm text-slate-500'>Use the sliders to fine-tune the result before downloading.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <canvas ref={canvasRef} className='hidden' />
    </section>
  )
}

export default Main
