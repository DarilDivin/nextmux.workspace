"use client"

import Footer from "./landing/Footer"
import Header from "./landing/Header"


export default function LandingLayout({ children, }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  )
}
