import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importuj plik ze stylami CSS

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/profile">Profil</Link>
          </li>
          <li>
            <Link to="/posts">Posty</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
