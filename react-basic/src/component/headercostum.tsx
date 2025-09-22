import "./HeaderCostum.css"; // kita buat CSS terpisah biar lebih rapi

function HeaderCostum() {
  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderCostum;
