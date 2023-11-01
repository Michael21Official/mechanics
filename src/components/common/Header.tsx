import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importuj plik ze stylami CSS

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/profile">
              <button className="button">Profil</button>
            </Link>
          </li>
          <li>
            <Link to="/posts">
              <button className="button">Posty</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
