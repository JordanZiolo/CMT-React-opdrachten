import { useState } from "react";

const FlashCard = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="w-64 h-40 bg-white shadow-xl rounded-xl p-6 cursor-pointer 
                 flex items-center justify-center text-center 
                 transition-transform duration-300 hover:scale-105"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {isFlipped ? (
        <p className="text-xl font-bold text-blue-600">{answer}</p>
      ) : (
        <p className="text-xl font-bold">{question}</p>
      )}
    </div>
  );
};

export default FlashCard;
