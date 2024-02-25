import React from 'react'

function RangeSlider() {
  return (
    <div className="max-w-xl mx-auto p-4">
     <h4 className="text-center text-4xl font-extrabold hover:text-blue-500  px-2.5 text-gray-700  cursor-pointer">Skills</h4>
     {/* HTML */}
        <div className="flex mb-2 items-center justify-between mt-5">
        <div>
          <h1 className="text-gray-600 text-xl font-extrabold">
            HTML
          </h1>
        </div>
        <div className="text-right">
          <p className="text-xl font-semibold text-blue-800">
            80%
          </p>
        </div>
      </div>
      <div className="flex rounded-full h-2 bg-gray-200">
        <div style={{ width: '80%' }} className="rounded-full bg-blue-800"></div>
      </div>

      {/* CSS */}


      <div className="flex mb-2 items-center justify-between mt-5">
        <div>
          <h1 className="text-gray-600 text-xl font-extrabold mt-2">
            CSS
          </h1>
        </div>
        <div className="text-right">
          <p className="text-xl font-semibold text-blue-800">
            70%
          </p>
        </div>
      </div>
      <div className="flex rounded-full h-2 bg-gray-200">
        <div style={{ width: '70%' }} className="rounded-full bg-blue-800"></div>
      </div>


      {/* Tailwind-CSS */}

      <div className="flex mb-2 items-center justify-between mt-5">
        <div>
          <h1 className="text-gray-600 text-xl font-extrabold mt-2">
            Tailwind-CSS
          </h1>
        </div>
        <div className="text-right">
          <p className="text-xl font-semibold text-blue-800">
            50%
          </p>
        </div>
      </div>
      <div className="flex rounded-full h-2 bg-gray-200">
        <div style={{ width: '50%' }} className="rounded-full bg-blue-800"></div>
      </div>


     {/* JAVASCRIPT */}


     <div className="flex mb-2 items-center justify-between mt-5">
        <div>
          <h1 className="text-gray-600 text-xl font-extrabold mt-2">
            Javascript
          </h1>
        </div>
        <div className="text-right">
          <p className="text-xl font-semibold text-blue-800">
            50%
          </p>
        </div>
      </div>
      <div className="flex rounded-full h-2 bg-gray-200">
        <div style={{ width: '50%' }} className="rounded-full bg-blue-800"></div>
      </div>
      

      {/* TYPESCRIPT */}


      <div className="flex mb-2 items-center justify-between mt-5">
        <div>
          <h1 className="text-gray-600 text-xl font-extrabold mt-2">
            Typescript
          </h1>
        </div>
        <div className="text-right">
          <p className="text-xl font-semibold text-blue-800">
            40%
          </p>
        </div>
      </div>
      <div className="flex rounded-full h-2 bg-gray-200">
        <div style={{ width: '40%' }} className="rounded-full bg-blue-800"></div>
      </div>

      {/* NEXT-JS */}


      <div className="flex mb-2 items-center justify-between mt-5">
        <div>
          <h1 className="text-gray-600 text-xl font-extrabold mt-2">
            NEXT-JS
          </h1>
        </div>
        <div className="text-right">
          <p className="text-xl font-semibold text-blue-800">
            80%
          </p>
        </div>
      </div>
      <div className="flex rounded-full h-2 bg-gray-200">
        <div style={{ width: '80%' }} className="rounded-full bg-blue-800"></div>
      </div>

      {/* REACT-JS */}

      <div className="flex mb-2 items-center justify-between mt-5">
        <div>
          <h1 className="text-gray-600 text-xl font-extrabold mt-2">
            REACT-JS
          </h1>
        </div>
        <div className="text-right">
          <p className="text-xl font-semibold text-blue-800">
            50%
          </p>
        </div>
      </div>
      <div className="flex rounded-full h-2 bg-gray-200">
        <div style={{ width: '50%' }} className="rounded-full bg-blue-800"></div>
      </div>
     </div>
  )
}

export default RangeSlider