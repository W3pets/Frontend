// dashboard/Sidebar.tsx
import { Home, MessageCircle, Box, LogOut, User } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { icon: <Home size={18} />, label: 'Dashboard', href: '/dashboard' },
  { icon: <MessageCircle size={18} />, label: 'Messages', href: '/dashboard/messages' },
  { icon: <Box size={18} />, label: 'Products', href: '/dashboard/products' },
  { icon: <User size={18} />, label: 'Profile', href: '/dashboard/profile' },
  { icon: <LogOut size={18} />, label: 'Logout', href: '/logout' },
];

export default function Sidebar() {
  return (
    <aside className="w-[220px] border-l border-border bg-card shadow-md p-4 flex flex-col gap-4">
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-all"
        >
          {item.icon}
          {item.label}
        </Link>
      ))}
    </aside>
  );
}
