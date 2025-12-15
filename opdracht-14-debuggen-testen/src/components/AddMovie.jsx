import { useState } from 'react';

function AddMovie({ onAdd }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '') {
      alert('Movie title cannot be empty');
      return;
    }

    onAdd(title.trim());

    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <input
        type="text"
        placeholder="Enter movie title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovie;
