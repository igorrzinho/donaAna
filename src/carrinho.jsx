import { useState, useEffect } from 'react';
import Car from './components/car';

const getItens = () => {
  let i = localStorage.getItem('itens');

  if (i) {
    return JSON.parse(localStorage.getItem('itens'));
  } else {
    return [];
  }
};

function Carrinho() {
  const [itens, setItens] = useState(getItens());

  const deleteCake = (id) => {
    if (confirm('deseja realmente deletar o item?')) {
      let newItens = itens.filter((d) => d.id !== id);
      setItens(newItens);
    }
  };

  useEffect(() => {
    localStorage.setItem('itens', JSON.stringify(itens));
  }, [itens]);
  return (
    <div className="w-80 m-auto">
      {itens.length > 0 ? (
        ''
      ) : (
        <h1 className="text-center">
          você ainda não adicionou produtos no seu carrinho
        </h1>
      )}
      {itens.map((d) => (
        <Car
          key={d.id}
          id={d.id}
          img={d.img}
          preco={d.preco}
          name={d.name}
          func={deleteCake}
        />
      ))}
    </div>
  );
}

export default Carrinho;
