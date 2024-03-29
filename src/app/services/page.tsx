import React from 'react'
import RangeSlider from '@/components/RangeSlider';

function Services() {
  return (
    <><div className="container px-6 py-20 mx-auto">
          <p className="text-center mt-6 text-4xl font-extrabold hover:text-blue-900  px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2 cursor-pointer">Our Services</p>
          <p className="text-center mx-auto mt-1 text-xl text-black">What we can Offer,...</p>

          <section className="bg-white dark:bg-gray-900">
              <div className="container px-6 py-4 mx-auto">

                  <div className="grid grid-cols-1 gap-1 mt-4  md:grid-cols-2 xl:grid-cols-4">
                      <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent h-52 w-52">
                          <img className="object-cover rounded-full ring-4 ring-gray-300" src="data:image/png;base64,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" alt="" />

                          <h1 className="mt-2 text-sm font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Frontend Developer</h1>
                      </div>

                      <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent h-52 w-52">
                          <img className="object-cover  rounded-full ring-4 ring-gray-300" src="https://us.123rf.com/450wm/hengki12/hengki122109/hengki12210900008/174811682-flat-design-backend-of-developer-concept-illustration-for-websites-landing-pages-mobile-applications.jpg?ver=6" alt="" />

                          <h1 className="mt-2 text-sm font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Backend Developer</h1>


                      </div>

                      <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent h-52 w-52">
                          <img className="object-cover rounded-full ring-4 ring-gray-300" src="https://user-images.githubusercontent.com/3335181/207145814-7b4fc81f-fb35-4e56-83d8-51e6419eb629.svg" alt="" />

                          <h1 className="mt-2 text-sm font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Typescript Projects</h1>
                      </div>

                      <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent h-52 w-52">
                          <img className="object-cover rounded-full ring-4 ring-gray-300" src="https://www.desuvit.com/wp-content/uploads/2023/07/react-js-1-2.png" alt="" />

                          <h1 className="mt-2 text-sm font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">React Framework</h1>

                      </div>
                  </div>
              </div>
          </section>
      </div><RangeSlider /></>

  );
};

export default Services