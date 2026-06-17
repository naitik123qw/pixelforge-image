import React, { useEffect } from 'react'

const AdBanner = () => {
  useEffect(() => {
    if (window.adsbygoogle) {
      try {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch (error) {
        console.error('Adsense push failed', error)
      }
    }
  }, [])

  return (
    <div className='mx-auto my-6 max-w-7xl px-4 sm:px-6 lg:px-8'>
      <ins
        className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-client='ca-pub-5902005630547739'
        data-ad-slot='5172306320'
        data-ad-format='auto'
        data-full-width-responsive='true'
      />
    </div>
  )
}

export default AdBanner
