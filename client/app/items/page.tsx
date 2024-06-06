import ItemCard from '@/components/ItemCard'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'

export default function page() {
  return (
    <>
      <Navbar />
      <div className='flex'>
        <div>
          <Sidebar />
        </div>
        <div className='text-center w-full flex h-fit gap-2 m-1 rounded-md flex-wrap items-center justify-center mb-10'>
          <ItemCard />
          <ItemCard  />
          <ItemCard  />
        </div>
      </div>
    </>
  )
}