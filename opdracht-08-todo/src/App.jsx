import { useState } from 'react';

export default function App() {
  // State voor het invoerveld
  const [newTodo, setNewTodo] = useState('');
  // State voor de lijst van To-Dos
  const [todos, setTodos] = useState([]);

  // Functie om een nieuw To-Do item toe te voegen
  const addTodo = () => {
    if (newTodo.trim() === '') return; // lege items voorkomen
    setTodos([...todos, newTodo]);
    setNewTodo(''); // input leegmaken na toevoegen
  };

  // Functie om Enter te gebruiken in plaats van knop
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') addTodo();
  };

  return (
    <div>
      <h1>Mijn To-Do App</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Voer een taak in"
      />
      <button onClick={addTodo}>Toevoegen</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}