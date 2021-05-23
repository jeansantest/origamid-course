import React from 'react';

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

function Produtos() {
  return (
    <div>
      <h1 style={{ color: 'green' }}>Produtos</h1>
      <section>
        {produtos.map((item) => (
          <div
            style={{
              border: '1px solid black',
              marginBottom: '10px',
              padding: '15px',
            }}
          >
            <p>{item.nome}</p>
            <ul>
              {item.propriedades.map((prop) => (
                <li>{prop}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Produtos;
