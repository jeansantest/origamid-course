import React from 'react';
import Button from './Button';
import ProductCard from './ProductCard';

function Product() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const fetchApi = async (event) => {
    setLoading(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );
    const json = await response.json();
    setData(json);
    setLoading(false);
  };

  const products = [
    'tablet',
    'smartphone',
    'notebook',
    'smartwatch',
    'smartspeaker',
  ];

  return (
    <div>
      {products.map((item) => (
        <Button key={item} click={fetchApi} name={item} />
      ))}
      {loading && <p>Loading...</p>}
      {!loading && data && <ProductCard data={data} />}
    </div>
  );
}

export default Product;
