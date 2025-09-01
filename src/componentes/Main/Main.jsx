import React, { useEffect, useState } from "react";
import "./Main.css";

const Main = () => {
  const [cafes, setCafes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("🔄 Fazendo requisição para /coffee...");
    
    fetch("/coffee")
      .then((res) => {
        console.log("📡 Resposta recebida:", res.status);
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("☕ Dados recebidos:", data);
        setCafes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Erro ao buscar dados:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div><p className="loading">Carregando cafés...</p></div>;
  }

  if (error) {
    return (
      <div>
        <p style={{color: 'red'}}>❌ Erro: {error}</p>
        <p>Tente acessar: <a href="http://localhost:5000/coffee" target="_blank">http://localhost:5000/coffee</a></p>
      </div>
    );
  }

  return (
    <div>
      <div className="lista-cafes">
        <h1 className="cafe-titulo">Cafés com Design</h1>
        {cafes.length === 0 ? (
          <p>Nenhum café encontrado.</p>
        ) : (
          cafes.map((cafe) => (
            <div key={cafe.id} className="card-cafe">
              <h2>{cafe.nome}</h2>
              <img src={`/imagens/${cafe.imagem}`} alt={cafe.nome} />
              <p>
                <strong>Cidade:</strong> {cafe.cidade}
              </p>
              <p>
                <strong>Estilo:</strong> {cafe.design}
              </p>
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

        <h2 className="p-citacao">
          <span className="design">
            "Design é inteligência <br /> feita visível"
          </span>{" "}
          <span className="autor"></span>Robin Willians
        </h2>
      </div>

      <div className="blog-section">
        <h1>Blog</h1>
        <ul>
          <li>
            Como o design influência a experiência <br /> de tomar um café
          </li>
          <br />
          <li>Como a hierarquia visual guia até o último gole de café</li>{" "}
          <br />
          <li>
            Hierarquia visual: o espresso que guia o olhar antes do leite.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;