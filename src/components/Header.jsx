const Header = () => {
  return (
    <div className="h-20 w-full bg-fuchsia-300 mb-4">
      <ul className="flex">
        <li className="m-5 p-1 rounded  hover:underline font-semibold text-gray-800 hover:text-gray-300 hover:bg-fuchsia-500">
          <a href="/">Home</a>
        </li>
        <li className="m-5 p-1 rounded  hover:underline font-semibold text-gray-800 hover:text-gray-300 hover:bg-fuchsia-500">
          <a href="/car">Carrinho</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
