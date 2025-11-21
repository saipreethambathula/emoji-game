import { useState } from "react";
import NavBar from "./NavBar";
import EmojiCard from "./EmojiCard";
import WinOrLoseCard from "./WinOrLoseCard";

export default function EmojiGame({ emojisList }) {
  const [clickedEmojis, setClickedEmojis] = useState([]);
  const [isGameEnd, setIsGameEnd] = useState(false);
  const [topScore, setTopScore] = useState(0);

  const shuffleEmojis = (list) => [...list].sort(() => Math.random() - 0.5);

  const onClickEmoji = (id) => {
    if (clickedEmojis.includes(id)) finishGame(clickedEmojis.length);
    else {
      const updated = [...clickedEmojis, id];
      if (updated.length === emojisList.length) finishGame(emojisList.length);
      else setClickedEmojis(updated);
    }
  };

  const finishGame = (score) => {
    if (score > topScore) setTopScore(score);
    setIsGameEnd(true);
  };

  const restartGame = () => {
    setClickedEmojis([]);
    setIsGameEnd(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-cyan-200 via-teal-200 to-green-200 transition-all duration-700">
      <NavBar
        currentScore={clickedEmojis.length}
        topScore={topScore}
        isGameEnd={isGameEnd}
      />
      <div className="flex flex-col justify-center items-center p-4 md:p-12">
        {isGameEnd ? (
          <WinOrLoseCard
            isWon={clickedEmojis.length === emojisList.length}
            onClickPlayAgain={restartGame}
            score={clickedEmojis.length}
            totalEmojis={emojisList.length}
          />
        ) : (
          <ul className="grid grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl w-full justify-items-center">
            {shuffleEmojis(emojisList).map((emoji) => (
              <EmojiCard
                key={emoji.id}
                emoji={emoji}
                onClickEmoji={onClickEmoji}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
