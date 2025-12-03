import { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-950 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Container/kaart - ook donkerblauw */}
        <div className="bg-blue-800/40 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden mb-8 border border-blue-700/50">
          {/* Header - donkerder blauw, WITTE tekst */}
          <div className="bg-gradient-to-r from-blue-800 to-blue-700 px-8 py-6 border-b border-blue-600/50">
            <h1 className="text-3xl font-bold text-white"> {/* WITTE tekst */}
              <span className="text-blue-200"></span> Jordan To Do List
            </h1>
            <p className="text-white/90 mt-2">What to do?</p> {/* WITTE tekst */}
          </div>

          {/* Content area - donkerblauw */}
          <div className="p-8 bg-blue-800/30">
            <TodoInput 
              inputValue={inputValue}
              setInputValue={setInputValue}
              addTodo={addTodo}
            />
            
            <TodoList todos={todos} />
            
            {/* Footer info - WITTE tekst */}
            <div className="mt-6 pt-6 border-t border-blue-600/30 text-center text-white/80 text-sm">
              <p>{todos.length} taken in de lijst • Typ bovenin om toe te voegen</p>
            </div>
          </div>
        </div>

        {/* Extra styling element - WITTE tekst */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-white/80 text-sm bg-blue-800/40 px-4 py-2 rounded-full border border-blue-600/40">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white">Todo App met React & Tailwind</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;