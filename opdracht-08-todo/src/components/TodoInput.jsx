const TodoInput = ({ inputValue, setInputValue, addTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };
 
  return (
    <section className="mb-8">
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Voeg een nieuwe taak toe..."
          className="flex-1 px-4 py-3 bg-blue-700/50 border border-blue-600/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/70" // WITTE tekst en placeholder
        />
        <button
          type="submit"
          onClick={addTodo}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-800 border border-blue-500"
        >
          Toevoegen
        </button>
      </form>
    </section>
  );
};
 
export default TodoInput;