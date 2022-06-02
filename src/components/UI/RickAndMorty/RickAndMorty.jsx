import React, { useEffect, useState } from "react";
import logo from "../../../Images/logo.png";

export const RickAndMorty = () => {
  const URL = "https://rickandmortyapi.com/api/character/?name=";
  const [character, setCharacter] = useState("");

  const fetchCharacter = () => {
    fetch(URL + character)
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data);
        data.results.forEach((elemento) => {
          tarjetas(elemento.name, elemento.image);
          console.log(elemento);
        });
      });
  };

  useEffect(() => {
    if (character.length > 0) {
      fetchCharacter();
    }
  }, [character]);

  function handleInput(event) {
    console.log(document.getElementById("input").value);
    if (document.getElementById("input").value.length == "") {
      const tarjetas = document.getElementById("tarjetas");
      while (tarjetas.firstChild) {
        tarjetas.removeChild(tarjetas.firstChild);
      }
    }
    if (event.key == "Enter") {
      setCharacter(document.getElementById("input").value);
    }
  }
  function tarjetas(nombre, image) {
    const container = document.getElementById("tarjetas");

    const card = document.createElement("div");
    card.classList = "card";

    const name = document.createElement("h2");
    name.textContent = nombre;

    name.classList = "tits";
    card.appendChild(name);

    const images = document.createElement("img");
    images.setAttribute("src", image);
    images.textContent = image;

    images.classList = "img";
    card.appendChild(images);

    container.appendChild(card);
  }

  return (
    <body className="bodyMorty">
    
      <div className="containerMorty">
        <figure className="logo_morty">
          <img src={logo} alt="Rick and Morty" />
        </figure>
      </div>
      <section className="filtrar_morty">
        <input
          name="buscar"
          onKeyUp={handleInput}
          placeholder="Nombre del personaje"
          type="text"
          id="input"
        />
      </section>

      <div className="tarjetas" id="tarjetas"></div>
    </body>
  );
};
