export default function EmojiCard({ emoji, onClickEmoji }) {
  return (
    <li>
      <button
        onClick={() => onClickEmoji(emoji.id)}
        className="bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl p-5 flex justify-center items-center
                   cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-white/25"
      >
        <img
          src={emoji.emojiUrl}
          alt={emoji.emojiName}
          className="w-16 h-16 md:w-20 md:h-20"
        />
      </button>
    </li>
  );
}
