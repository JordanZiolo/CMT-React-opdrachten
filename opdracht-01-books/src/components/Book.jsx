function Book({ title, author, image }) {
  return (
    <div className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{author}</p>
    </div>
  );
}

export default Book;