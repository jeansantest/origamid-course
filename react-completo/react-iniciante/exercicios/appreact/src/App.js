import React from 'react';

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const dados = mario;

  const styleActive =
    dados.ativa === true ? { color: 'green' } : { color: 'red' };
  const pActive = dados.ativa === true ? 'Ativa' : 'Inativa';

  const spend = dados.compras
    .map((e) => Number(e.preco.replace('R$ ', '')))
    .reduce((acc, curr) => acc + curr);

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p style={styleActive}>{pActive}</p>
      <p>R$ {spend}</p>
      <p>{spend > 10000 ? 'Você está gastando muito' : null}</p>
    </div>
  );
};

export default App;
