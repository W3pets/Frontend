export default function SellerPage() {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md">

    <aside className="w-64 bg-gray-200 p-4">
          <nav>
            <ul>
              <li><a href="/seller" className="block py-2 px-4 rounded hover:bg-gray-300">Dashboard</a></li>
              <li><a href="/seller/products" className="block py-2 px-4 rounded hover:bg-gray-300">Your Products</a></li>
              <li><a href="/seller/add-product" className="block py-2 px-4 rounded hover:bg-gray-300">Add Product</a></li>
            </ul>
          </nav>
        </aside>

          <header className="flex items-center justify-between bg-white p-4 shadow">
            <h1 className="text-2xl font-bold">Seller Page</h1>
            <button className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
          </header>

          <div className="mt-6">
          <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add a New Product</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="productName" className="block mb-1">Product Name:</label>
          <input type="text" id="productName" className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block mb-1">Category:</label>
          <select id="category" className="w-full px-4 py-2 border rounded-lg">
            <option>Dogs</option>
            <option>Fowls & Birds</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block mb-1">Price (₦):</label>
          <input type="number" id="price" className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <button type="submit" className="bg-green-500 text-white w-full py-2 rounded-lg">Upload Product</button>
      </form>
    </div>
          </div>
          
      </div>
    );
  }
  