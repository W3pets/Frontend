'use client'

export default function LoginPage() {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email:</label>
            <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">Password:</label>
            <input type="password" id="password" className="w-full px-4 py-2 border rounded-lg" />
          </div>
          <button type="submit" className="bg-green-500 text-white w-full py-2 rounded-lg">Login</button>
        </form>
      </div>
    );
  }
  