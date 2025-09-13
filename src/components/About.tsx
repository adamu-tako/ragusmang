export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              For of all gainful professions, nothing is better, nothing more pleasing, nothing more delightful, 
              nothing better becomes a well-bred man than agriculture.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Ragusma Farms, we&apos;ve been cultivating the finest organic produce for generations. 
              Our commitment to sustainable farming practices and traditional methods ensures that 
              every product that leaves our farm carries the essence of pure, natural goodness.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-600">Organic Certified</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl">🌱</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sustainable Farming</h3>
                <p className="text-gray-600">Protecting the environment while growing the finest produce</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
