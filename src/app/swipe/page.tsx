// app/swipe/page.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

type Sitter = {
  id: number
  name: string
  age: number
  location: string
  image: string
  bio: string
}

const sitters: Sitter[] = [
  {
    id: 1,
    name: 'Sophie Chen',
    age: 29,
    location: 'Chiang Mai, Thailand',
    image: '/sitters/sophie.jpg',
    bio: 'Loves kids, fluent in Thai & English, loves exploring cities!',
  },
  {
    id: 2,
    name: 'Carlos Ramirez',
    age: 35,
    location: 'Barcelona, Spain',
    image: '/sitters/carlos.jpg',
    bio: 'Former teacher, great with toddlers, enjoys cooking.',
  },
  {
    id: 3,
    name: 'Amira Hassan',
    age: 27,
    location: 'Cairo, Egypt',
    image: '/sitters/amira.jpg',
    bio: 'Energetic, creative, and experienced in travel nannying.',
  },
]

export default function SwipePage() {
  const [cardIndex, setCardIndex] = useState(0)
  const [swiped, setSwiped] = useState<{ id: number; direction: string }[]>([])

  const handleSwipe = (direction: 'left' | 'right', id: number) => {
    setSwiped((prev) => [...prev, { id, direction }])
    setCardIndex((prev) => prev + 1)
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center justify-center p-4'>
      <h1 className='text-3xl font-bold mb-6'>
        Find Your Perfect Flight Sitter
      </h1>
      <div className='relative w-80 h-[500px]'>
        <AnimatePresence>
          {sitters.slice(cardIndex, cardIndex + 1).map((sitter) => (
            <motion.div
              key={sitter.id}
              className='absolute w-full h-full bg-white rounded-2xl shadow-xl p-4 flex flex-col items-center justify-between text-center'
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0, x: -200 }}
              drag='x'
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, info) => {
                if (info.offset.x > 100) handleSwipe('right', sitter.id)
                else if (info.offset.x < -100) handleSwipe('left', sitter.id)
              }}>
              <div className='w-full h-64 relative rounded-xl overflow-hidden'>
                <Image
                  src={sitter.image}
                  alt={sitter.name}
                  fill
                  className='object-cover'
                />
              </div>
              <div className='mt-4'>
                <h2 className='text-xl font-semibold'>
                  {sitter.name}, {sitter.age}
                </h2>
                <p className='text-sm text-gray-600'>{sitter.location}</p>
                <p className='mt-2 text-gray-800'>{sitter.bio}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {cardIndex >= sitters.length && (
        <p className='mt-6 text-lg text-gray-700'>No more sitters to show 🚀</p>
      )}
    </div>
  )
}
