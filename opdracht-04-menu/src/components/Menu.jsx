function Menu({ id, title, category, price, img, desc }) {
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="photo" />
      <div className="item-info">
        <h2>{title}</h2>
        <h4>{category}</h4>
        <p>€{price}</p>
        <p>{desc}</p>
      </div>
    </article>
  );
}

export default Menu;