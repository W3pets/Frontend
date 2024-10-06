'use client'

import { useParams } from 'next/navigation';
import Sidebar from '../../components/Sidebar';

export default function CategoryPage() {
  const { categoryId } = useParams();

  return (
    <div className="flex flex-row w-full pt-20">
      <Sidebar />
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-4">Category: {categoryId}</h2>
        <div className="grid grid-cols-3 gap-6">
          
        </div>
      </div>
    </div>
  );
}
