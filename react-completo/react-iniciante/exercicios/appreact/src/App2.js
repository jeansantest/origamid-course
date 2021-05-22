import React from 'react';

// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const App2 = () => {
  const maisCaros = produtos.filter(
    (n) => Number(n.preco.replace('R$ ', '')) > 1500
  );

  return (
    <ul style={{ listStyleType: 'none' }}>
      {maisCaros.map((e) => (
        <li key={e.nome}>
          <h1>{e.nome}</h1>
          <p>Preço: {e.preco}</p>
          <ul style={{ listStyleType: 'none' }}>
            {e.cores.map((c) => (
              <li key={c} style={{ background: c }}>
                {c}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default App2;
