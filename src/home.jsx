import { useState, useEffect } from 'react';
import Products from './components/products';

const getItens = () => {
  let i = localStorage.getItem('itens');
  let iv = [];
  if (i) {
    return JSON.parse(localStorage.getItem('itens'));
  } else {
    return iv;
  }
};
export default function Home() {
  const [itens, setItens] = useState(getItens());
  const img_chocolate =
    'https://images.unsplash.com/photo-1579306194872-64d3b7bac4c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2017&q=80';
  const text_chocolate =
    'Rico, macio e indulgente, nosso bolo de chocolate é uma explosão de sabores intensos que derretem na boca.';
  const img_nozes =
    'https://images.unsplash.com/photo-1595837936407-dbedcfcd0496?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1117&q=80';
  const text_nozes =
    ' Feito com nozes picadas e uma pitada de especiarias, nosso bolo de nozes é rico, aromático e oferece uma textura deliciosamente crocante.';
  const img_morango =
    'https://images.unsplash.com/photo-1611293388250-580b08c4a145?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1138&q=80';
  const text_morango =
    'Feito com morangos frescos, nosso bolo de morango é leve, refrescante e irresistivelmente delicioso.';
  const img_mirtilo =
    'https://images.unsplash.com/photo-1618426703263-9b751af305a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';
  const text_mirtilo =
    'Com mirtilos frescos e suculentos, nosso bolo de mirtilo é uma explosão de sabor frutado que encanta a cada mordida.';
  const img_oreo =
    'https://images.unsplash.com/photo-1626263468007-a9e0cf83f1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';
  const text_oreo =
    'Para os amantes de Oreo, nosso bolo é uma combinação irresistível de camadas de bolo macio e recheio cremoso de Oreo.';
  const img_redvelvet =
    'https://images.unsplash.com/photo-1602630209855-dceac223adfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80';
  const text_redvelvet =
    'Com sua cor vibrante e textura aveludada, nosso bolo Red Velvet é um equilíbrio perfeito entre o doce e o suave.';

  const addCar = (preco, name, img) => {
    var newItem = [
      ...itens,
      {
        id: Math.floor(Math.random() * 100) + 1,
        name: name,
        preco: preco,
        img: img,
      },
    ];

    setItens(newItem);
    localStorage.setItem('itens', JSON.stringify(itens));
    alert('produto adicionado ao carrinho');
  };

  useEffect(() => {
    localStorage.setItem('itens', JSON.stringify(itens));
  }, [itens]);
  return (
    <>
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
        <img className="m-auto w-3/5" src="Dona_Ana.jpg" alt="" />
        <div className="text-center m-4">
          <h1 className="m-6 text-3xl text-center font-bold underline">
            Quem somos?
          </h1>
          <p className="m-4 p-4">
            Dona Ana Bolos Caseiros é uma confeitera dedicada, cuja paixão pela
            arte de fazer bolos caseiros é evidente em cada pedaço de sabor e
            carinho que sai de sua cozinha. Com sua marca registrada, Dona Ana
            utiliza o arrecadamento de sua loja para fazer a diferença na vida
            das pessoas
          </p>
          <p className="m-4 p-4">
            Além de oferecer deliciosos bolos feitos com ingredientes
            selecionados, a loja Dona Ana Bolos Caseiros tem um propósito maior.
            Com generosidade, Dona Ana utiliza parte dos lucros para levar
            alegria e conforto às pessoas em situações difíceis. Seja
            distribuindo bolos para pessoas em situação de rua, levando suas
            criações para orfanatos ou apoiando ONGs, Dona Ana está sempre
            disposta a ajudar.
          </p>
          <p className="m-4 p-4">
            Ao comprar um bolo da Dona Ana Bolos Caseiros, você não apenas
            desfruta de uma experiência gastronômica única, mas também contribui
            para um projeto social que espalha amor e afeto. Cada mordida tem um
            sabor especial, sabendo que você faz parte de uma causa nobre.
          </p>
        </div>
      </div>
      <h1 className="text-3xl text-center m-auto font-bold underline">
        conheça os sabores de bolos
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 grid-rows-2">
        <Products
          name="bolo de chocolate"
          img={img_chocolate}
          text={text_chocolate}
          preco={'R$ 60,00'}
          func={addCar}
        />
        <Products
          name="bolo de redvelvet"
          img={img_redvelvet}
          text={text_redvelvet}
          preco={'R$ 70,00'}
          func={addCar}
        />
        <Products
          name="bolo de mirtilo"
          img={img_mirtilo}
          text={text_mirtilo}
          preco={'R$ 80,00'}
          func={addCar}
        />
        <Products
          name="bolo de morango"
          img={img_morango}
          text={text_morango}
          preco={'R$ 50,00'}
          func={addCar}
        />
        <Products
          name="bolo de oreo"
          img={img_oreo}
          text={text_oreo}
          preco={'R$ 60,00'}
          func={addCar}
        />
        <Products
          name="bolo de nozes"
          img={img_nozes}
          text={text_nozes}
          preco={'R$ 70,00'}
          func={addCar}
        />
      </div>
      <div className="h-20 w-full bg-fuchsia-300 mt-4"></div>
    </>
  );
}
