import React from 'react'
import Typewriter from '@/app/AnimateText'

function AboutMe() {
  return (
    <section className="pt-10 overflow-hidden bg-gradient-to-r from-blue-900 ... md:pt-0 sm:pt-16 2xl:pt-16 mt-10">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">

            <div>
                <Typewriter/>
            </div>

            <div className="relative">
                <img className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

                <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://www.slazzer.com/downloads/92d43b30-d076-11ee-a85b-42010a80000a/Picsart_23-09-21_10-05-40-843_prev_ui.png" alt="" />
            </div>

        </div>
    </div>
</section>
  )
}

export default AboutMe