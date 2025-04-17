'use client'
import { useState } from 'react'
import { supabase } from '~lib/supabase'
import { useRouter } from 'next/navigation'
import Logo from '~components/logo'

export default function ParentSignup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isSignup, setIsSignup] = useState(true)

  const router = useRouter()

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) setError(error.message)
    else router.push('/parent-dashboard')
  }

  const handleGoogleSignup = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/parent-dashboard`,
      },
    })
    if (error) setError(error.message)
  }

  return (
    <>
      <div className='flex max-w-sm mx-auto justify-center my-10 border-2 border-indigo-600 rounded-md overflow-hidden'>
        <button
          onClick={() => setIsSignup(true)}
          className={`w-1/2 py-2 text-center font-medium transition-colors ${
            isSignup
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-indigo-600 hover:bg-indigo-100'
          }`}>
          Create Account
        </button>
        <button
          onClick={() => setIsSignup(false)}
          className={`w-1/2 py-2 text-center font-medium transition-colors ${
            !isSignup
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-indigo-600 hover:bg-indigo-100'
          }`}>
          Login
        </button>
      </div>
      <div className='p-6 max-w-md mx-auto'>
        <Logo />
        <h2 className='text-2xl font-bold mb-4'>Create a Parent Account</h2>

        <form onSubmit={handleSignup} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Password
            </label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
            />
          </div>

          <button
            type='submit'
            className='w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition'>
            Sign Up
          </button>

          {error && <p className='text-red-500 mt-2'>{error}</p>}
        </form>

        <div className='mt-6 text-center'>
          <p className='text-sm text-gray-600 mb-2'>Or sign up with</p>
          <button
            onClick={handleGoogleSignup}
            className='w-full flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50'>
            <svg className='h-5 w-5' viewBox='0 0 24 24'>
              {/* Google logo */}
              <path
                fill='#EA4335'
                d='M12 11.84v3.44h4.88c-.2 1.2-1.6 3.52-4.88 3.52-2.96 0-5.36-2.4-5.36-5.36s2.4-5.36 5.36-5.36c1.68 0 2.8.72 3.44 1.36l2.36-2.36C16.48 5.84 14.48 5 12 5 6.96 5 3 8.96 3 14s3.96 9 9 9c5.2 0 8.56-3.64 8.56-8.76 0-.6-.08-1.2-.2-1.76H12z'
              />
            </svg>
            Sign up with Google
          </button>
        </div>
      </div>
    </>
  )
}
