const Products = ({ img, text, name, func, preco }) => {
  return (
    <div className="w-80 bg-pink-200 m-auto p-5 rounded-lg text-center">
      <h2 className="text-2xl text-center font-semibold">{name}</h2>
      <img className="w-56 m-auto" src={img} alt="" />
      <p className="text-center p-4">{text}</p>
      <p className="text-center underline">valor de : {preco}</p>
      <button
        onClick={() => func(preco, name, img)}
        className="w-2/3 p-4 bg-fuchsia-400 rounded-xl hover:bg-fuchsia-300"
      >
        <img className="m-auto w-8" src="shopping-cart-arrow-down.svg" alt="" />
      </button>
    </div>
  );
};

export default Products;
