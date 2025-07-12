import React from 'react'

export default function Notice() {
  return (
    <div className="max-w-6xl mx-auto p-12 md:p-24 bg-black text-white text-center border rounded-xl mt-10">
      <p className="text-base md:text-lg leading-relaxed">
        This is a 1-time <span>$1 offer</span>. Once you leave this page, the strategy grid may not be available again.
      </p>
    </div>
  )
}

