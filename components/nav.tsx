import Link from 'next/link'
import { FaHeart, FaPlaneDeparture } from 'react-icons/fa'
import { Button } from './ui/button'

export default function Nav() {
  return (
    <header className='w-full bg-white shadow-md p-4 flex items-center justify-between sticky top-0 z-50'>
      <Link href='/'>
        <h1 className='text-2xl font-bold text-gray-800 flex items-center gap-2'>
          <FaPlaneDeparture /> Flight Sitter <FaHeart />
        </h1>
      </Link>
      <nav>
        <Link className='mx-2' href='/parent-signup'>
          <Button variant='outline'>Parent Login</Button>
        </Link>
        <Link className='mx-2' href='/sitter-signup'>
          <Button>Sitter Login</Button>
        </Link>
      </nav>
    </header>
  )
}
