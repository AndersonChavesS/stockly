import { ComboboxOption } from "../_components/ui/combobox";
import { getProducts } from "../_data-access/product/get-products";
import CreateSaleButton from "./_components/create-sale-button";

const SalesPage = async () => {
  const products = await getProducts();
  const productOptions: ComboboxOption[] = products.map((product) => ({
    label: product.name,
    value: product.id,
  }));

  return (
    <div className="m-8 w-full space-y-8 rounded-lg bg-slate-100 p-8">
      <div className="mb-2 flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-blue-500">
            Gestão de Vendas
          </span>
          <h2 className="text xl font-semibold">Produtos</h2>
        </div>
        <CreateSaleButton products={products} productOptions={productOptions} />
      </div>

      {/* <DataTable columns={productTableColumns} data={products} /> */}
    </div>
  );
};

export default SalesPage;
