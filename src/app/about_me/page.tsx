import React from 'react'
import Skills from '@/components/Skills'

function About_Me() {
  return (
    <><div id="about" className="relative bg-white overflow-hidden mt-16">
          <div className="max-w-7xl mx-auto">
              <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                  <div className="pt-1"></div>

                  <main className="mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                      <div className="sm:text-center lg:text-left">
                          <h2 className="my-6 text-5xl tracking-tight font-extrabold text-gray-900">
                              About me
                          </h2>
                          <p className='font-bold text-2xl'>I am a web developer and I have for 3 years experience,...</p>
                          <p className='text-1xl'>
                              "Transforming visions into digital reality, our web development team crafts innovative and
                              tailored solutions to elevate your online presence.
                              With expert in frontend and backend
                              technologies, we design and develop responsive websites that captivate audiences, drive engagement,
                              and deliver seamless user experiences. From concept to deployment, we're committed to exceeding
                              your expectations and helping your business thrive in the digital landscape."
                          </p>
                      </div>
                  </main>
              </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-10 lg:w-1/3 mt-5">
              <img className="h-50 w-full object-cover object-top sm:h-72 md:h-96 drop-shadow-2xl transition duration-300 ease-in-out hover:opacity-70" src="https://scontent.flhe2-2.fna.fbcdn.net/v/t39.30808-6/356370360_581573334162582_2583709549467998110_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeFqJN2L3-b2ZdndDUklnixJBDAIA_atzDIEMAgD9q3MMqsyPemAReJ-wx6IWc_2_u7OJplXfk1cFtxxAufitH6M&_nc_ohc=qmCCOI67QAcAX_YLIQv&_nc_zt=23&_nc_ht=scontent.flhe2-2.fna&oh=00_AfAdH4paKN4moxosqrmZxb6zfh-ZxplBIxntAINel4cDXA&oe=65D1DF91" alt="" />
          </div>
      </div><Skills /></>
  )
}

export default About_Me