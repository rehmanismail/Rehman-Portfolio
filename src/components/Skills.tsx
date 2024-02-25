import React from 'react'

function Skills() {
  return (
    <section className="">
    <div className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="lg:text-center">
                <p className="font-heading mt-1 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                    I am an expert in creating websites. And I build the frontend using these languages and libraries,...
                </p>
            </div>

            <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    <div className="relative transition duration-500 ease-in-out  hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110 ... rounded-2xl cursor-pointer">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mx-2 mt-2">
                                <img src="https://www.svgrepo.com/show/354113/nextjs-icon.svg" />
                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700 mt-2">NEXT-JS</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">
                        Next.js is a React framework that offers server-side rendering, automatic code splitting,
                        and simplified routing, enabling fast and SEO-friendly web applications with a delightful
                        developer experience.
                        </dd>
                    </div>
                    <div className="relative transition duration-500 ease-in-out hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110 ... rounded-2xl cursor-pointer">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mx-2 mt-2">
                                <img src="https://www.svgrepo.com/show/424896/react-logo-programming-2.svg" />
                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700 mt-2">REACT-JS
                            </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">React.js is a powerful JavaScript library for building dynamic user
                        interfaces, providing reusable components, virtual DOM for efficient updates, and a declarative programming
                        model for enhanced developer productivity.
                        </dd>
                    </div>
                    <div className="relative transition duration-500 ease-in-out hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110 ... rounded-2xl cursor-pointer">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mx-2 mt-2">
                                <img src="https://www.svgrepo.com/show/333609/tailwind-css.svg" />

                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700 mt-2">Tailwind-CSS
                            </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">Tailwind CSS is a utility-first CSS framework that streamlines
                        web development by providing a set of pre-designed utility classes, enabling rapid prototyping, consistent styling,
                        and effortless customization without the need for writing custom CSS.
                        </dd>
                    </div>
                    <div className="relative transition duration-500 ease-in-out hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110 ... rounded-2xl cursor-pointer">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mx-2 mt-2">
                                <img src="https://www.svgrepo.com/show/369620/typescript.svg" />

                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700 mt-2">Typescript
                            </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">TypeScript is a statically typed superset of JavaScript that enhances code
                        quality and maintainability by providing type-checking capabilities during development, helping to catch errors early and improve
                        overall code robustness.
                        </dd>
                    </div>
                </dl>
            </div>

        </div>
    </div>
</section>
  )
}

export default Skills