import { useState } from "react";

export default function NavBar({ currentScore, topScore, isGameEnd }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="w-full flex justify-between items-center h-24 bg-[#ffffff1a] border border-[#ffffff30] backdrop-blur-3xl px-6 md:px-12 shadow-xl rounded-b-3xl">
        <div className="flex items-center">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="w-12 h-12 mr-4"
          />
          <h1 className="text-gray-900 font-extrabold text-2xl md:text-3xl">
            Emoji Game
          </h1>
        </div>

        <div className="flex items-center space-x-6">
          {!isGameEnd && (
            <div className="flex flex-col md:flex-row text-gray-900 font-semibold text-lg md:text-xl space-y-1 md:space-y-0 md:space-x-6">
              <span>Score: {currentScore}</span>
              <span>Top Score: {topScore}</span>
            </div>
          )}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-cyan-400 hover:bg-cyan-300 font-bold px-4 py-2 rounded-3xl shadow-md transition text-white"
          >
            How to Play
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white/10 backdrop-blur-2xl p-8 rounded-3xl max-w-lg w-full relative shadow-2xl">
            <h2 className="text-white text-2xl font-extrabold mb-4">
              How to Play
            </h2>
            <p className="text-white/90 mb-4">
              Click each emoji only once. Don’t click the same emoji twice. Try
              to click all emojis to win!
            </p>
            <p className="text-white/80 mb-6">
              The game ends if you click the same emoji twice. Check your top
              score in the navbar.
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white text-xl font-bold hover:text-cyan-400 transition"
            >
              ×
            </button>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-cyan-400 hover:bg-cyan-300 text-gray-900 font-bold px-6 py-3 rounded-2xl shadow-md transition mt-4 w-full"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </>
  );
}
