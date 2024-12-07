<<<<<<< HEAD
import { DataTable } from "../_components/ui/data-table";
import { productTableColumns } from "./_components/table-columns";
import { cachedGetProducts } from "../_data-access/product/get-products";
import AddProductButton from "@/app/products/_components/add-product-button";

const ProductsPage = async () => {
  const products = await cachedGetProducts();
=======
<<<<<<< HEAD
import { DataTable } from "@/app/_components/ui/data-table";
import { productTableColumns } from "@/app/products/_components/table-columns";
import { cachedGetProducts } from "@/app/_data-access/product/get-products";
import AddProductButton from "@/app/products/_components/add-product-button";

const ProductsPage = async () => {
  const products = await cachedGetProducts();
=======
import { PlusIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { DataTable } from "../_components/ui/data-table";
import { productTableColumns } from "./_components/table-columns";

const ProductsPage = async () => {
  const response = await fetch("http://localhost:3000/api/products", {
    method: "GET",
    cache: "no-cache",
  });
  const { products, randomNumber } = await response.json();
>>>>>>> eeebf5b3fbf43516ad8ed07a7b5629dc8f543c39
>>>>>>> 5a58bdf9d5d49483c69ef91992629ed596487ef2
  return (
    <div className="m-8 w-full space-y-8 rounded-lg bg-slate-100 p-8">
      <div className="mb-2 flex w-full items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-xl font-medium">
            Random Number from API: {randomNumber}
          </h1>
          <span className="text-xs font-semibold text-blue-500">
            Gestão de Produtos
          </span>
          <h2 className="text xl font-semibold">Produtos</h2>
        </div>
        <AddProductButton />
      </div>
<<<<<<< HEAD
=======

>>>>>>> 5a58bdf9d5d49483c69ef91992629ed596487ef2
      <DataTable columns={productTableColumns} data={products} />
    </div>
  );
};

export default ProductsPage;
