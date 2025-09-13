export default function Products() {
  return (
    <section id="products" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our range of fresh, organic produce grown with care and delivered with love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
              <span className="text-6xl">🥬</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fresh Vegetables</h3>
              <p className="text-gray-600 mb-4">Crisp, organic vegetables harvested daily from our fields.</p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-semibold">Available Now</span>
                <button className="text-green-600 hover:text-green-700 font-semibold">Learn More →</button>
              </div>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-yellow-100 to-orange-200 flex items-center justify-center">
              <span className="text-6xl">🥕</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Root Vegetables</h3>
              <p className="text-gray-600 mb-4">Nutrient-rich root vegetables grown in our fertile soil.</p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-semibold">Seasonal</span>
                <button className="text-green-600 hover:text-green-700 font-semibold">Learn More →</button>
              </div>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-br from-red-100 to-pink-200 flex items-center justify-center">
              <span className="text-6xl">🍅</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fresh Fruits</h3>
              <p className="text-gray-600 mb-4">Juicy, sweet fruits picked at the perfect ripeness.</p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-semibold">Limited Season</span>
                <button className="text-green-600 hover:text-green-700 font-semibold">Learn More →</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
