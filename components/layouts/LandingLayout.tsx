"use client"
import React from "react";

import Footer from "./landing/Footer"
import Header from "./landing/Header"

import {Inter, Poppins} from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function LandingLayout({ children, }: { children: React.ReactNode }) {

  return (
      <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
          <head>
              <title> Nextmux Workspace </title>
          </head>
          <body>
              <Header/>
                {children}
              <Footer/>
          </body>
      </html>
  )
}
