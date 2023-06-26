export default function Car({ img, preco, name, id, func }) {
  return (
    <div className="w-100 w-60 h-32 items-center bg-fuchsia-300 my-5 p-5 rounded">
      <h3 className="font-bold text-center text-lg">{name}</h3>
      <div className="text-center flex">
        <div>
          <img src={img} alt="" className="w-24 " />
        </div>
        <div className="">
          <p className="font-bold text-xs text-red-600">{preco}</p>
          <button onClick={() => func(id)} className="w-5">
            <img src="shopping-cart-arrow-up.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
