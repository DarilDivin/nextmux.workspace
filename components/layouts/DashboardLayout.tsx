"use client"
import Footer from './dashboard/Footer';
import Header from './dashboard/Header';
import Sidebar from './dashboard/Sidebar';
import { useState } from 'react'


export default function DashboardLayout({ children, }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };


  return (
    <html lang="en">
      <body>
        <div className="flex h-screen">

          {/* Overlay */}
          {isSidebarOpen && <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={closeSidebar}></div>}

          <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

          <div className="flex-1 flex flex-col overflow-hidden w-full">

            <Header toggleSidebar={toggleSidebar} />

            <main className="flex-1 overflow-x-hidden overflow-y-auto px-2 lg:px-8 h-screen">
              {children}
              <Footer />
            </main>

          </div>
        </div>
      </body>
    </html>
  )
}
