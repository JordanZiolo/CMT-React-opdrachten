import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav style={styles.nav}>
        <ul style={styles.ul}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Over Ons</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div style={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

const styles = {
  nav: {
    backgroundColor: "#333",
    padding: "10px",
  },
  ul: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    color: "white",
  },
  content: {
    padding: "20px",
  },
};

export default Navigation;