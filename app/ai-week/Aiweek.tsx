import React from 'react'

export default function Aiweek() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
  <div className="text-center space-y-6">
    <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl max-w-2xl mx-auto">
      AI Start Up Of The Week
    </h1>
    <p className="text-base sm:text-lg text-white">
      Tools with the highest recent growth this week
    </p>
    <button className="border rounded-md px-6 py-3 text-white hover:bg-white bg-red-500 hover:text-black transition duration-300">
      Discover Now
    </button>
  </div>
</div>

  )
}
//all