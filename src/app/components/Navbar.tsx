"use client"
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";


import "../../app/globals.css"

import topLogo from "../../../public/logo/favicon.svg";
import Link from "next/link";
import Image from "next/image"

const Navbar = () => {
  return (
    <>
    <div className="flex justify-between items-center px-10 bg-light-gray">
        {/* Top Logo */}
          <Image src={topLogo} alt="Top Logo" />

        {/* Top Navigation */}
        <ul className="flex space-x-6 py-3">
          <li className="flex items-center border-r border-black pr-6">
            <Link href="/location" className="leading-[14px]">
              Find a Store
            </Link>
          </li>
          <li className="flex items-center border-r border-black pr-6">
            <Link href="/contact-us" className="leading-[14px]">
              Help
            </Link>
          </li>
          <li className="flex items-center border-r border-black pr-6">
            <Link href="/join-us" className="leading-[14px]">
              Join Us
            </Link>
          </li>
          <li className="flex items-center pr-6">
            <Link href="/login" className="leading-[14px]">
              Sign In
            </Link>
          </li>
        </ul>
      </div>

      
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img src={"/logo.png"} alt={"Logo"} />
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />

             
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <a className="mr-5 hover:text-gray-900">New $ featured</a>
              <a className="mr-5 hover:text-gray-900">Men</a>
              <a className="mr-5 hover:text-gray-900">Women</a>
              <a className="mr-5 hover:text-gray-900">Kids</a>
              <a className="mr-5 hover:text-gray-900">Sale</a>
              <a className="mr-5 hover:text-gray-900">SNKRS</a>
            </nav>
            <div className="flex gap-x-4">
            <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="border bg-white border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none"
          />
          <FaSearch className="absolute right-3 top-2.5 text-gray-500 " />
        </div>
              
                <CiHeart className="md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px]  cursor-pointer hover:text-black" />
              
             
                <IoBagOutline className=" md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" />
              
            </div>
          </div>
        </header>
      
      
      </>  
     
  )
  
}

export default Navbar;