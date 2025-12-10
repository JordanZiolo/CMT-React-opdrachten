import FlashCard from "./FlashCard";

const FlashCardList = ({ data }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {data.map((card, index) => (
        <FlashCard 
          key={index}
          question={card.question}
          answer={card.answer}
        />
      ))}
    </div>
  );
};

export default FlashCardList;
