import React from "react";
import "./header.css";
import cafeteriaImg from "../logo/cafeteria.png";

const header = () => {
  return (
    <div className="container-header">
      <div>
        <h3 className="titulo">Coffee with design</h3>
        <img
          src={cafeteriaImg}
          alt="imagem cafeteria"
          className="imagem-cafeteria"
        />
        <div className="subtitulo">
          <h1>
            Descubra cafés onde <br /> o design é tão bom <br /> quanto o café.
          </h1>
        </div>
        <button
          className="botao-explorar"
          onClick={() => {
            document
              .getElementById("secao-cafes")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Explorar Cafés
        </button>
      </div>

      
    </div>
  );
};

export default header;
