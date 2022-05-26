import React from "react";
import { ButtonUI } from "../../UI/ButtonUI/ButtonUI";
import DarkMode from "../../UI/DarkMode/DarkMode";
// import Enlace from "../../UI/Enlace/Enlace";
import { Logo } from "../../UI/Logo/Logo";
import { NavHome } from "../../UI/NavHome/NavHome";

// import TitlePage from "../../UI/TitlePage/TitlePage";


export const HeaderHome = () => {
  return (
    <><header className="headerHome">
      <Logo />
      <NavHome />
    </header>
    <section>
    <ButtonUI/>
      <DarkMode/>
    </section>
    
   </>
    
  );
};

