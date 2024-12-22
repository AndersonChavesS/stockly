import { DataTable } from "../_components/ui/data-table";
import { productTableColumns } from "./_components/table-columns";
import { getProducts } from "../_data-access/product/get-products";
import CreateProductButton from "@/app/products/_components/create-product-button";
import Header, {
  HeaderLeft,
  HeaderRight,
  HeaderSubTitle,
  HeaderTitle,
} from "../_components/header";

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <div className="m-8 w-full space-y-8 rounded-lg bg-slate-100 p-8 overflow-y-auto">
      <Header>
        <HeaderLeft>
          <HeaderSubTitle> Gestão de Produtos</HeaderSubTitle>
          <HeaderTitle>Produtos</HeaderTitle>
        </HeaderLeft>
        <HeaderRight>
          <CreateProductButton />
        </HeaderRight>
      </Header>

      <DataTable columns={productTableColumns} data={products} />
    </div>
  );
};

export default ProductsPage;
