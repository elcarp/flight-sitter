import React from 'react'
import { Button } from '~components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '~components/ui/card'
import Link from 'next/link'
import Hero from '~components/hero'

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center'>
      <main className='w-full'>
        <Hero />
        <h2 className='text-3xl font-bold text-gray-900'>
          Find a Flight Companion
        </h2>
        <p className='text-gray-600 mt-2'>
          Whether you&apos;re a parent traveling with kids or need assistance
          during your flight, find a reliable companion to make your journey
          easier.
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
              <Link href='/find-a-sitter'>
                <Button className='mt-4 w-full cursor-pointer'>
                  Find a Sitter
                </Button>
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
              <Link href='/sitter-signup'>
                <Button className='mt-4 w-full cursor-pointer'>
                  Sign Up as a Sitter
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
