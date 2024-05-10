import React from 'react'
import SiteButton from './SiteButton'

const Hero = () => {
  return (
    <div className="flex w-full bg-gray-900 text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Document , Draw and Share

        <span className="sm:block"> in SyncDraw Studio </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        All-in-one markdown editor, collaboration canvas, and diagram as you go builder.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
      <SiteButton buttonText="Learn More" href="/learnmore"/> 
      </div>
    </div>
  </div>
</div>
  )
}

export default Hero