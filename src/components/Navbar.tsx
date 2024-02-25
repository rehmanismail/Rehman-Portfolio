import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="bg-slate-200 py-2.5 fixed inset-x-0 top-0 z-30">
    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <Link href="#" className="flex items-center">
            <h1 className="self-center text-3xl font-mono font-bold whitespace-nowrap dark:text-white">Portfolio</h1>
        </Link>
        <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 text-xl font-mono">
                <li>
                    <Link href="/"
                        className="block py-2 pl-3 pr-4 group text-blue-600"
                        aria-current="page">Home</Link>
                </li>
                <li>
                    <Link href="about_me"
                        className="block py-2 pl-3 pr-4 text-gray-500 hover:text-blue-600">About Me</Link>
                </li>
                <li>
                    <Link href="/services"
                        className="block py-2 pl-3 pr-4 text-gray-500 hover:text-blue-600">Services</Link>
                </li>
                <li>
                    <Link href="/projects"
                        className="block py-2 pl-3 pr-4 text-gray-500 hover:text-blue-600">Projects</Link>
                </li>
                <li>
                    <Link href="/contact_us"
                        className="block py-2 pl-3 pr-4 text-gray-500 hover:text-blue-600">Contact Us</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Navbar