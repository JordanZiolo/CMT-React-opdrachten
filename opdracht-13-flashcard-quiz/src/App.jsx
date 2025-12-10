import FlashCardList from "./components/FlashCardList";
import data from "./data";

function App() {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <FlashCardList data={data} />
    </div>
  );
}

export default App;
