import { cn } from '@/lib/utils';

export default function MessageBubble({ text, sender }: { text: string; sender: 'me' | 'other' }) {
  return (
    <div
      className={cn(
        'max-w-[75%] px-4 py-2 rounded-lg text-sm mb-2',
        sender === 'me'
          ? 'bg-green-100 text-right self-end'
          : 'bg-gray-100 text-left self-start'
      )}
    >
      {text}
    </div>
  );
}
