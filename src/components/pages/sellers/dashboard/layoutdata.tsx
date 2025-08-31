// Only one export for sidebarMeta
export const sidebarMeta = [
  {
    text: 'Home',
    href: '/dashboard',
    icon: <Home size={20} />,
  },
  {
    text: 'Messages',
    href: '/dashboard/messages',
    icon: <MessageSquare size={20} />,
  },
  {
    text: 'Products',
    href: '/dashboard/products',
    icon: <Box size={20} />,
  },
  {
    text: 'Orders',
    href: '/dashboard/orders',
    icon: <ShoppingCart size={20} />,
  },
  {
    text: 'Settings',
    href: '/dashboard/settings',
    icon: <Settings size={20} />,
  },
];
import { Home, MessageSquare, Box, ShoppingCart, Settings } from 'lucide-react';
import { Child } from '../../../shared/Sidebar/Sidebar';