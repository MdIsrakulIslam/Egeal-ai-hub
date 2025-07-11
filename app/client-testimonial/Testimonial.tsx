import Image from 'next/image'
import React from 'react'

export default function Testimonial() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-6">
        <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl max-w-2xl mx-auto">
          Client Testimonials
        </h1>

        {/* Testimonials container */}
        <div className="flex flex-wrap justify-center gap-40 pl-32">
          {/* First Testimonial Card — always visible */}
          <div className="relative w-[312px] h-[636px] flex items-center ">
            <div className="p-2 border rounded-3xl border-white">
              <div className="border rounded-3xl p-1 border-black">
                <Image
                  className="rounded-3xl"
                  src="/blur.png"
                  alt="blur"
                  width={636}
                  height={312}
                />
              </div>
            </div>
            <Image
              src="/details.png"
              alt="detail"
              width={264}
              height={208}
              className="absolute top-1/2 left-1/2 -translate-x-[100%] -translate-y-1/2"
            />
          </div>

          {/* Second Testimonial Card — hidden on small, visible on md+ */}
          <div className="relative w-[312px] h-[636px] flex items-center hidden md:flex">
            <div className="p-2 border rounded-3xl border-white">
              <div className="border rounded-3xl p-1 border-black">
                <Image
                  className="rounded-3xl"
                  src="/blur.png"
                  alt="blur"
                  width={636}
                  height={312}
                />
              </div>
            </div>
            <Image
              src="/details.png"
              alt="detail"
              width={264}
              height={208}
              className="absolute top-1/2 left-1/2 -translate-x-[100%] -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
