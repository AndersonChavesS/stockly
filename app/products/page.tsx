import { PlusIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { DataTable } from "../_components/ui/data-table";
import { productTableColumns } from "./_components/table-columns";
import { getProducts } from "../_data-access/product/get-products";

const ProductsPage = async () => {
  const products = await getProducts();
  return (
    <div className="spacy-y-8 m-8 w-full rounded-lg bg-slate-100 p-8">
      <div className="mb-2 flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-blue-500">
            Gestão de Produtos
          </span>
          <h2 className="text xl font-semibold">Produtos</h2>
        </div>
        <Button variant={"outline"} className="gap-2">
          <PlusIcon size={20} /> Novo produto
        </Button>
      </div>
      <DataTable columns={productTableColumns} data={products} />
    </div>
  );
};

export default ProductsPage;
