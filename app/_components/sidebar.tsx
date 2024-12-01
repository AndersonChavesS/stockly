const Sidebar = () => {
  return (
    <div className="flex w-64 flex-col bg-blue-50">
      <div className="px-8 py-6">
        <h1 className="text-2xl font-bold uppercase text-blue-400">stockly</h1>
      </div>
      <div className="flex flex-col space-y-2 p-2">
        <button className="px-6 py-3">Dashboard</button>
        <button className="px-6 py-3">Produtos</button>
        <button className="px-6 py-3">Vendas</button>
      </div>
    </div>
  );
};

export default Sidebar;
