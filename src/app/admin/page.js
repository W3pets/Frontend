'use client'

import { useState } from 'react';

export default function AdminPage() {
  const [primaryColor, setPrimaryColor] = useState('#3490dc');
  const [secondaryColor, setSecondaryColor] = useState('#ffed4a');

  const handleSaveChanges = async () => {
    try {
      const response = await fetch('/api/update-colors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          primaryColor,
          secondaryColor,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update colors');
      }

      alert('Colors updated successfully!');
    } catch (error) {
      console.error(error);
      alert('There was an error updating the colors.');
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Website Settings</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-4">
          <label htmlFor="primaryColor" className="block mb-1">Primary Color:</label>
          <input
            type="color"
            id="primaryColor"
            value={primaryColor}
            onChange={(e) => setPrimaryColor(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="secondaryColor" className="block mb-1">Secondary Color:</label>
          <input
            type="color"
            id="secondaryColor"
            value={secondaryColor}
            onChange={(e) => setSecondaryColor(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <button
          type="button"
          onClick={handleSaveChanges}
          className="bg-blue-500 text-white w-full py-2 rounded-lg"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
