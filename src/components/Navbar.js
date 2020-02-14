import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-btn" onClick={handleToggle}>
          <div className={"hamburger " + (open ? "is-open" : "is-close")}></div>
        </div>
        <Link to="/" className="brand-logo">
          Moda
        </Link>
      </nav>
      <div className={"nav-block " + (open ? "is-open" : "is-close")}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Seleccionado
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Colecciones
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Retro
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
