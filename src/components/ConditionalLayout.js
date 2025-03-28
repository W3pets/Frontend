'use client' // This component must be a client component

import { usePathname } from 'next/navigation'
import { UserContextProvider } from '@/contexts/UserContext'
import { CartContextProvider } from '@/contexts/CartContext'
import { Paths } from '@/model/types/global'
import MainLayout from './pages/MainLayout'

export default function ConditionalLayout({ children }) {
  const pathname = usePathname()

  // Define paths where the header and footer should be hidden
  const authRoutes = [
    Paths.Register,
    Paths.Login,
    '/shop',
    '/admin',
    '/shop/onboarding',
    '/shop/productdetails'
  ]

  // If the pathname is one of the auth routes, render only children
  if (authRoutes.includes(pathname)) {
    return (
      <>
        <UserContextProvider>
          <CartContextProvider>{children}</CartContextProvider>
        </UserContextProvider>
      </>
    )
  }

  // Otherwise, render the MainLayout
  return (
    <UserContextProvider>
      <CartContextProvider>
        <MainLayout>{children}</MainLayout>
      </CartContextProvider>
    </UserContextProvider>
  )
}
