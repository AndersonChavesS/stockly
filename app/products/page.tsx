import { DataTable } from "@/app/_components/ui/data-table";
import { productTableColumns } from "@/app/products/_components/table-columns";
import { cachedGetProducts } from "@/app/_data-access/product/get-products";
import AddProductButton from "@/app/products/_components/add-product-button";

const ProductsPage = async () => {
  const products = await cachedGetProducts();
  return (
    <div className="m-8 w-full space-y-8 rounded-lg bg-slate-100 p-8">
      <div className="mb-2 flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-blue-500">
            Gestão de Produtos
          </span>
          <h2 className="text xl font-semibold">Produtos</h2>
        </div>
        <AddProductButton />
      </div>

      <DataTable columns={productTableColumns} data={products} />
    </div>
  );
};

export default ProductsPage;
