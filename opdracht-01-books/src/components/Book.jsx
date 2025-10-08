function Book({ title, author, image }) {
  return (
    <div className="Book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{author}</p>
    </div>
  );
}

export default Book;