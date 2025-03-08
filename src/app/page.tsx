import React from 'react'
import { Button } from '~components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '~components/ui/card'
import { FaHeart, FaPlaneDeparture } from 'react-icons/fa'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center p-6'>
      <header className='w-full max-w-4xl bg-white shadow-md p-4 rounded-xl flex items-center justify-between'>
        <h1 className='text-2xl font-bold text-gray-800 flex items-center gap-2'>
          <FaPlaneDeparture /> Flight Sitter <FaHeart />
        </h1>
        <nav>
          <Link href='/login'>
            <Button variant='outline'>Login</Button>
          </Link>
        </nav>
      </header>

      <main className='w-full max-w-4xl mt-10 text-center'>
        <h2 className='text-3xl font-bold text-gray-900'>
          Find a Flight Companion
        </h2>
        <p className='text-gray-600 mt-2'>
          Whether you're a parent traveling with kids or need assistance during
          your flight, find a reliable companion to make your journey easier.
        </p>

        <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
          <Card>
            <CardHeader>
              <CardTitle>Need a Flight Sitter?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-gray-700'>
                Find a trusted travel companion to assist you or your child
                during your flight.
              </p>
              <Link href='/find-sitter'>
                <Button className='mt-4 w-full'>Find a Sitter</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Become a Flight Sitter</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-gray-700'>
                Earn rewards by helping fellow travelers during their flight
                journey.
              </p>
              <Link href='/become-sitter'>
                <Button className='mt-4 w-full'>Sign Up as a Sitter</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
