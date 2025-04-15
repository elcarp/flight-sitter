'use client'

import Link from 'next/link'
import { FaHeart, FaPlaneDeparture, FaBars } from 'react-icons/fa'
import { Button } from './ui/button'
import { useState } from 'react'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className='w-full bg-white shadow-md p-4 flex items-center justify-between sticky top-0 z-50'>
      <Link href='/'>
        <h1 className='text-xl md:text-2xl font-bold text-gray-800 flex items-center gap-2'>
          <FaPlaneDeparture /> Flight Sitter <FaHeart />
        </h1>
      </Link>

      {/* Desktop Nav */}
      <nav className='hidden md:flex items-center'>
        <Link className='mx-2' href='/parent-signup'>
          <Button variant='outline'>Parent Login</Button>
        </Link>
        <Link className='mx-2' href='/sitter-signup'>
          <Button>Sitter Login</Button>
        </Link>
      </nav>

      {/* Mobile Nav Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className='md:hidden text-gray-800 text-xl cursor-pointer'
        aria-label='Toggle Menu'>
        <FaBars />
      </button>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className='absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center p-4 gap-3 md:hidden'>
          <Link href='/parent-signup' onClick={() => setMenuOpen(false)}>
            <Button variant='outline' className='w-full text-center'>
              Parent Login
            </Button>
          </Link>
          <Link href='/sitter-signup' onClick={() => setMenuOpen(false)}>
            <Button className='w-full text-center'>Sitter Login</Button>
          </Link>
        </div>
      )}
    </header>
  )
}
