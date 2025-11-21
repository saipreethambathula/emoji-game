const winImage = "https://assets.ccbp.in/frontend/react-js/won-game-img.png";
const loseImage = "https://assets.ccbp.in/frontend/react-js/lose-game-img.png";

export default function WinOrLoseCard({
  isWon,
  onClickPlayAgain,
  score,
  totalEmojis,
}) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-indigo-900/40 backdrop-blur-3xl border border-white/20 rounded-3xl p-6 md:p-12 w-11/12 md:w-4/5 max-w-4xl shadow-2xl">
      <div className="flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-white font-extrabold text-3xl md:text-5xl">
          {isWon ? "You Won!" : "You Lose!"}
        </h1>
        <p className="text-white font-semibold text-lg md:text-2xl mt-2">
          {isWon ? "Best Score" : "Score"}
        </p>
        <p className="text-cyan-400 font-bold text-3xl md:text-5xl">
          {score}/{totalEmojis}
        </p>
        <button
          onClick={onClickPlayAgain}
          className="mt-4 bg-cyan-400 text-gray-900 font-bold rounded-3xl px-6 py-3 hover:bg-cyan-300 transition shadow-md"
        >
          Play Again
        </button>
      </div>
      <img
        src={isWon ? winImage : loseImage}
        alt={isWon ? "You won image" : "You lost image"}
        className="w-36 h-44 md:w-72 md:h-96"
      />
    </div>
  );
}
