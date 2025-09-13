export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-green-50 to-green-100">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-200 to-transparent">
            <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,120 L0,60 Q300,20 600,60 T1200,60 L1200,120 Z" fill="#86EFAC" />
              <path d="M0,120 L0,80 Q300,40 600,80 T1200,80 L1200,120 Z" fill="#4ADE80" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Fresh from the
          <span className="block text-green-600">Earth to Your Table</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience the finest organic produce from Ragusma Farms, where tradition meets innovation in sustainable agriculture.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Explore Our Products
          </button>
          <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300">
            Learn About Our Story
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-16 h-16 bg-green-200 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-1/3 right-16 w-12 h-12 bg-green-300 rounded-full opacity-40 animate-bounce"></div>
      <div className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-green-400 rounded-full opacity-50 animate-ping"></div>
    </section>
  );
}
