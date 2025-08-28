import React, { useEffect, useState } from "react";
import "./Main.css";

const Main = () => {
  const [cafes, setCafes] = useState([]);

  useEffect(() => {
    fetch("/coffee") 
      .then((res) => res.json())
      .then((data) => setCafes(data))
      .catch((err) => console.error("Erro ao buscar dados:", err));
  }, []);

  return (
    <div>
      <div className="lista-cafes">
      <h1 className="cafe-titulo">Cafés com Design</h1>
      {cafes.length === 0 ? (
        <p className="loading">Carregando cafés...</p>
      ) : (
        cafes.map((cafe) => (
          <div key={cafe.id} className="card-cafe">
            <h2>{cafe.nome}</h2>
            <img src={`/imagens/${cafe.imagem}`} alt={cafe.nome} />
            <p><strong>Cidade:</strong> {cafe.cidade}</p>
            <p><strong>Estilo:</strong> {cafe.design}</p>
            <p>{cafe.descricao}</p>
            <a href={cafe.link} target="_blank" rel="noopener noreferrer">
              Ver mais
            </a>
          </div>
        ))
      )}
        </div>
        
      <div id="secao-cafes">
        <h1 className="t1-sobre">Sobre nós</h1>
        <p className="p-sobre">
          Somos apaixonados por café e design. Nosso objetivo é conectar
          entusiastas de café com locais que oferecem uma experiência única,
          onde o design do ambiente complementa a qualidade do café servido.
          Explore nossa seleção de cafés cuidadosamente escolhidos para
          encontrar seu próximo lugar favorito.
        </p>

        <h2 className="p-citacao"><span className="design">"Design é inteligência <br /> feita visível"</span> <span className="autor"></span>Robin Willians</h2>
      </div>

    </div>

  );
};

export default Main;