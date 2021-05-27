import React from 'react';

function ProductCard({ data }) {
  const { nome, preco, fotos } = data;
  return (
    <div>
      <h1>{nome}</h1>
      <p>R$ {preco}</p>
      <img src={fotos[0].src} alt={fotos[0].titulo} />
    </div>
  );
}

export default ProductCard;
