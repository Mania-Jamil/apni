'use client'

const Celebrate = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-600 to-purple-800">
      <div className="relative bg-white rounded-xl shadow-2xl w-96 p-12">
        {/* Birthday Message */}
        <h1 className="text-5xl font-bold text-center text-indigo-700 mb-6">
          Happy Birthday Sir G! 🎈
        </h1>

        {/* Balloons Animation */}
        <div className="flex justify-center space-x-6 mt-4">
          <div className="w-24 h-36 bg-red-500 rounded-full shadow-xl animate-bounce"></div>
          <div className="w-24 h-36 bg-blue-500 rounded-full shadow-xl animate-bounce"></div>
          <div className="w-24 h-36 bg-yellow-500 rounded-full shadow-xl animate-bounce"></div>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-indigo-600">
          🎉 Enjoy Your Day 🎉
        </footer>
      </div>
    </div>
  );
}

export default Celebrate;
