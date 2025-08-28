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
    <div className="container-main">
      <div className="lista-cafes">
      <h1>Cafés com Design</h1>
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
    </div>

  );
};

export default Main;