import React from 'react'
import Hero from '~components/hero'

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center'>
      <main className='w-full'>
        <Hero />
      </main>
    </div>
  )
}
