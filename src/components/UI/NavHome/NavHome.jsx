import React from "react";
import { Link } from 'react-router-dom'
export const NavHome = () => {
  return (
    <nav className="navHome">
      <Link to="/useState" className="enlace">UseState</Link>
      <Link to="/useCustom" className="enlace">UseCustom</Link>
      <Link to="/useEffect" className="enlace">UseEffect</Link>
      <Link to="/rickAndMorty" className="enlace">Rick and Morty</Link>
      <Link to="/thenorApi" className="enlace">ThenorApi</Link>
    </nav>
  );
};
