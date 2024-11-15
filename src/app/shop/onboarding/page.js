'use client';
import { useState } from 'react';

export default function OnboardingPage() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isChecked) {
      alert('Form submitted successfully!');
    } else {
      alert('Please accept the terms and conditions.');
    }
  };

  return (
    <div className='flex items-center justify-center w-full h-screen'>
      <div className='w-96'>
        <p className='text-lg'>Hi [Username],</p>
        <p className='text-lg'>Ready to begin? Do you accept W3pets's terms to continue?</p>

        <form  onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex items-start gap-1">
          <div className='border-2 h-4 w-4 flex items-center justify-center border-gray-400 rounded'>
        <input
  type="checkbox"
  id="terms"
  checked={isChecked}
  onChange={handleCheckboxChange}
  className="h-3 w-3 rounded checkbox-custom"
/>
</div>
        <label htmlFor="terms" className="text-xs font-semibold text-gray-700">
          I have read and accept the{' '}
          <a
            href="/terms"
            target="_blank"
            className="text-tertiary underline"
          >
            terms of service
          </a>{' '}
          and{' '}
          <a
            href="/privacy"
            target="_blank"
            className="text-tertiary underline"
          >
            privacy policy
          </a>.
        </label>
      </div>

      <button
        type="submit"
        className={`px-4 py-2 bg-secondary text-tertiary rounded ${
          isChecked ? 'bg-tertiary text-white' : 'text-tertiary cursor-not-allowed'
        }`}
        disabled={!isChecked}
      >
        Continue
      </button>
        </form>
      </div>
    </div>
  )
}
