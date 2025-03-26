'use client'
import { useState } from 'react';

const Home = () => {
  const [hovered, setHovered] = useState(false);
  const [showMessage, setShowMessage] = useState(false); // state to control showing message and image
  const [rocketLaunched, setRocketLaunched] = useState(false); // State to trigger the rocket animation

  const handleClick = () => {
    setRocketLaunched(true); // Trigger rocket animation
    setTimeout(() => {
      setShowMessage(true); // Show the birthday message after rocket animation
    }, 2000); // Wait for 2 seconds (animation time) before showing the message
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-500 to-indigo-500 overflow-hidden">
      {/* Balloons Floating in the Background */}
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <div className="flex justify-center space-x-6 animate-floating-balloons">
          <div className="w-24 h-36 bg-red-500 rounded-full shadow-xl animate-bounce"></div>
          <div className="w-24 h-36 bg-blue-500 rounded-full shadow-xl animate-bounce"></div>
          <div className="w-24 h-36 bg-yellow-500 rounded-full shadow-xl animate-bounce"></div>
        </div>
      </div>

      {/* Fireworks (Patakhay) Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-1/4 left-1/4 animate-fireworks"></div>
        <div className="absolute top-1/4 left-3/4 animate-fireworks delay-200"></div>
        <div className="absolute bottom-1/4 right-1/4 animate-fireworks delay-400"></div>
      </div>

      {/* Main Birthday Card */}
      <div className="relative bg-white rounded-xl shadow-2xl w-96 p-8 transform transition-all duration-500 hover:scale-105 z-20">
        {!showMessage ? (
          <>
            {/* Birthday Card Title */}
            <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-600 mb-4">
              Happy Birthday Affan! 🎉
            </h1>

            {/* Birthday Message */}
            <p className="text-lg text-gray-700 text-center mb-6">
              Wishing you a day full of love, laughter, and happiness. Enjoy your special day!
              Thank you for coming into my life. You are such a great person, enduring me for so many years.
              I am very grateful to have you ❤️. I just want to tell you ❤️143❤️.
              Click the button below to celebrate with love! 💗
            </p>

            {/* Button with Animation */}
            <div className="flex justify-center">
              <button
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={handleClick} // trigger rocket and message
                className={`py-3 px-6 text-white rounded-lg text-xl transition-all duration-300 ${hovered ? 'bg-blue-500' : 'bg-yellow-500'} transform ${hovered ? 'scale-105' : ''}`}
              >
                Celebrate with Love 🎉
              </button>
            </div>

            <footer className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-indigo-600">
              🎉 Made by Your Coder 🎉
            </footer>

            {/* Rocket Animation (Firework) */}
            {rocketLaunched && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-launch-rocket z-30">
                🚀
              </div>
            )}
          </>
        ) : (
          <>
            {/* Celebration Page Inside the Same Component */}
            <h1 className="text-5xl font-bold text-center text-pink-500 mb-6">
              Happy Birthday Sir G! 🎈
            </h1>

            {/* Balloons Animation (Emoji Balloons) */}
            <div className="flex justify-center space-x-6 mt-4">
              <div className="w-24 h-36 flex justify-center items-center text-4xl text-white animate-bounce">
                🎈
              </div>
              <div className="w-24 h-36 flex justify-center items-center text-4xl text-white animate-bounce">
                🎈
              </div>
              <div className="w-24 h-36 flex justify-center items-center text-4xl text-white animate-bounce">
                🎈
              </div>
            </div>

            <footer className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-indigo-600">
              🎉 Enjoy Your Day 🎉
            </footer>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
