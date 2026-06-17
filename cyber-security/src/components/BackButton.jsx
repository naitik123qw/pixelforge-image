import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const BackButton = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'

  const handleBack = () => {
    if (!isHome && window.history.length > 1) {
      navigate(-1)
    } else {
      navigate('/')
    }
  }

  return (
    <button
      type='button'
      onClick={handleBack}
      disabled={isHome}
      className={`rounded-3xl border border-white/10 px-3 py-2 text-sm font-semibold transition ${isHome ? 'cursor-not-allowed bg-slate-900/70 text-slate-400' : 'bg-slate-900 text-white hover:bg-slate-800 hover:text-blue-300'}`}
    >
      Back
    </button>
  )
}

export default BackButton
