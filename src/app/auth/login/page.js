'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLogin } from '@/hooks/useLogin';

export default function LoginPage() {
  const { login, loading, error } = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <div className="bg-primary h-screen w-screen overflow-y-hidden flex justify-center">
      <div className="flex-1 flex w-full h-full overflow-hidden">
        <Image src='/loginsignup-img.png' alt='login' width={1000} height={1000} className="w-full h-full object-fill" />
      </div>

      <div className="flex-1 py-6 px-8 overflow-y-scroll">
        <div className="flex justify-between items-center mb-8">
          <div>
            <Link href="/"><Image src='/logo.png' alt='w3pets' width={100} height={100} className='w-32' /></Link>
          </div>

          <div className="text-sm">Not a Member? <Link href="/auth/register"><span className="text-tertiary">Sign up</span></Link></div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl font-medium mb-3 text-center">Welcome to W3pets <br /> & let's get started</h2>
          <p className="text-xs mb-3 text-center max-w-[24rem] font-medium">Experience a seamless shopping journey where quality meets affordability, making it easier than ever to bring home the perfect addition to your farm or family.</p>
        </div>

        <div className="mb-4 px-auto flex flex-col">
          <form className="w-full max-w-[24rem] mx-auto mb-4">
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full h-9 text-sm placeholder:text-sm bg-[#F5F5F5] outline-none px-4 py-2 border border-[#383838] rounded-[4px]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-6 relative">
              <label htmlFor="password" className="block mb-1">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                className="w-full bg-[#F5F5F5] h-9 text-sm placeholder:text-sm outline-none px-4 py-2 border border-[#383838] rounded-[4px]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* Eye icon to toggle password visibility */}
              <div className="absolute right-3 bottom-2 flex items-center">
                {/* <a href="https://www.flaticon.com/free-icons/password" title="password icons">Password icons created by th studio - Flaticon</a> */}
                <Image
                  src={showPassword ? '/eye-open.png' : '/eye-closed.png'}
                  alt="Password Visibility"
                  width={20}
                  height={20}
                  className="cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              </div>
            </div>

            {error && (
              <p className='mb-2 text-xs text-error'>{error}</p>
            )}

            <button
              type="submit"
              className="bg-tertiary text-white w-full py-2 rounded-md mb-4"
              onClick={handleSubmit}
            >
              {loading ? "Loading..." : "Login"}
            </button>
            <p className="text-[#228B22] text-sm">Forgot password?</p>
          </form>

          <div className="w-full flex flex-col gap-4 items-center justify-center">
            <div className='flex gap-10 items-center justify-center'>
              <Image src='/google.png' alt='google' width={1000} height={1000} className="w-12 h-12" />
              <Image src='/facebook.png' alt='facebook' width={1000} height={1000} className="w-12 h-12" />
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
