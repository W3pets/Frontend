'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRegister } from '@/hooks/useRegister'

export default function RegisterPage() {
  const { register, loading, error } = useRegister();

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = async e => {
    e.preventDefault();

    await register(userName, email, password);
  };

  return (
    <div className='flex h-screen w-screen justify-center overflow-y-hidden bg-primary'>
      <div className='flex h-full w-full flex-1 overflow-hidden'>
        <Image
          src='/loginsignup-img.png'
          alt='login'
          width={1000}
          height={1000}
          className='h-full w-full object-fill'
        />
      </div>

      <div className='flex-1 overflow-y-scroll px-8 py-6'>
        <div className='mb-3 flex items-center justify-between'>
          <div>
            <Link href='/'>
              <Image
                src='/logo.png'
                alt='w3pets'
                width={100}
                height={100}
                className='w-32'
              />
            </Link>
          </div>

          <div className='text-sm'>
            Already a Member?{' '}
            <Link href='/auth/login'>
              <span className='text-tertiary'>Log in</span>
            </Link>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <h2 className='mb-3 text-center text-4xl font-medium'>
            Welcome to W3pets <br /> & let's get started
          </h2>
          <p className='mb-3 max-w-[24rem] text-center text-xs font-medium'>
            Experience a seamless shopping journey where quality meets
            affordability, making it easier than ever to bring home the perfect
            addition to your farm or family.
          </p>
        </div>

        <div className='px-auto mb-4 flex flex-col'>
          <form
            className='mx-auto mb-4 w-full max-w-[24rem]'
            onSubmit={handleSubmit}
          >
            <div className='mb-4'>
              <label htmlFor='name' className='mb-1 block'>
                Username
              </label>
              <input
                type='text'
                id='email'
                placeholder='Username'
                className='h-9 w-full rounded-[4px] border border-[#383838] bg-[#F5F5F5] px-4 py-2 text-sm outline-none placeholder:text-sm'
                value={userName}
                onChange={e => setUserName(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='mb-1 block'>
                Email
              </label>
              <input
                type='email'
                id='email'
                placeholder='Email'
                className='h-9 w-full rounded-[4px] border border-[#383838] bg-[#F5F5F5] px-4 py-2 text-sm outline-none placeholder:text-sm'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div className='relative mb-6'>
              <label htmlFor='password' className='mb-1 block'>
                Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                placeholder='Password'
                className='h-9 w-full rounded-[4px] border border-[#383838] bg-[#F5F5F5] px-4 py-2 text-sm outline-none placeholder:text-sm'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              {/* Eye icon to toggle password visibility */}
              <div className='absolute bottom-2 right-3 flex items-center'>
                {/* <a href="https://www.flaticon.com/free-icons/password" title="password icons">Password icons created by th studio - Flaticon</a> */}
                <Image
                  src={showPassword ? '/eye-open.png' : '/eye-closed.png'}
                  alt='Password Visibility'
                  width={20}
                  height={20}
                  className='cursor-pointer'
                  onClick={togglePasswordVisibility}
                />
              </div>
            </div>

            {error && (
              <p className='mb-2 text-xs text-error'>{error}</p>
            )}

            <button
              type='submit'
              className={`w-full rounded-md bg-tertiary py-2 text-white`}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Sign Up'}
            </button>
            {/* <p className="text-[#228B22] text-sm">Forgot password?</p> */}
          </form>

          <div className='flex w-full flex-col items-center justify-center gap-4'>
            <div className='flex items-center justify-center gap-10'>
              <Image
                src='/google.png'
                alt='google'
                width={1000}
                height={1000}
                className='h-12 w-12'
              />
              <Image
                src='/facebook.png'
                alt='facebook'
                width={1000}
                height={1000}
                className='h-12 w-12'
              />
            </div>

            <p className='w-full max-w-[24rem] text-center text-[0.8rem]'>
              By signing up, I agree to the{' '}
              <span className='text-[#228B22]'>
                Terms and Conditions and Privacy Policy.
              </span>{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
