import React from 'react'

export default function Hero() {
  return (
    <section className='relative min-h-screen flex items-center overflow-hidden'>
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img src="/hero-bg.jpg" alt="hero image" className='w-full h-full object-cover opacity-70' />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
        {/* blue dots */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          {[...Array(30)].map((_, i) => (
            <div className="absolute w-1.5 h-1.5 rounded-full opacity-60 slow-drift"
              style={{
                backgroundColor: "#4169E1",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}></div>
          ))}
        </div>
      </div>
      {/* Content */}
      <div className="container relative mx-auto px-6 pt-32 pb-20 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left section context*/}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary'>
                <span className='w-2 h-2 bg-primary rounded-full animate-pulse' />Software Engineer ‣ Full Stack Developer
              </span>
              <div className='space-y-4'>
              <h1 className="text-5xl md:text-6xl font-bold lg:text-7xl tleading-tight animate-fade-in">
                Building <span className='text-primary glow-text'>scalable</span><br />
                digital solutions &<br />
                <span className='font-serif italic font-normal text-white glow-text'>
                  seamless user experiences
                </span>
              </h1>
              <p className="mt-4 text-lg text-gray-300 animate-fade-in">
                Hi, I’m Andrew — a Software Engineer specializing in full-stack development with Java, SpringBoot, Node.js, React, and TypeScript, building scalable web and mobile applications.
              </p>
            </div>
          </div>
          </div>
          {/* Right section profile img */}
          <div className=""></div>
        </div>
      </div>
    </section >
  )
}

