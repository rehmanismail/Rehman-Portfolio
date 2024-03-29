import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <div className="bg-gray-100">
    <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
        <div className="p-5 sm:w-2/12 border-r">
            <div className="text-1xl uppercase text-indigo-600 font-bold">Menu</div>
            <ul>
                <li className="my-2 transition duration-300 ease-in-out hover:scale-110">
                    <a className="hover:text-indigo-600" href="#">Home</a>
                </li>
                <li className="my-2 transition duration-300 ease-in-out hover:scale-110">
                    <a className="hover:text-indigo-600" href="#">About me</a>
                </li>
                <li className="my-2 transition duration-300 ease-in-out hover:scale-110">
                    <a className="hover:text-indigo-600" href="#">Services</a>
                </li>
                <li className="my-2 transition duration-300 ease-in-out hover:scale-110">
                    <a className="hover:text-indigo-600" href="#">Projects</a>
                </li>
            </ul>
        </div>
        <div className="p-5 sm:w-7/12 border-r text-center">
            <h3 className="font-bold text-2xl text-indigo-600 mb-4">ABOUT ME</h3>
            <p className="text-gray-500 text-sm mb-10">Web development is the work involved in developing
             a website for the Internet or an intranet. Web development can range from developing a simple 
             single static page of plain text to complex web applications, electronic businesses, and social
            network services. </p>
        </div>
        <div className="p-5 sm:w-3/12">
            <div className="text-1xl uppercase text-indigo-600 font-bold">Contact Us</div>
            <ul>
                <li className="my-2">
                    <a className="hover:text-indigo-600" href="#">rehmanismail758@gmail.com</a>
                </li>
                <li className="my-2">
                    <a className="hover:text-indigo-600" href="#">03304392972</a>
                </li>
            </ul>
        </div>
    </div>
    <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
        <div className="my-2">© Copyright 2023. All Rights Reserved.</div>
    </div>
</div>
        </body>
    </html>
  );
}
