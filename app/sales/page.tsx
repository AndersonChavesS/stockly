import Header, {
  HeaderLeft,
  HeaderRight,
  HeaderSubTitle,
  HeaderTitle,
} from "../_components/header";
import { ComboboxOption } from "../_components/ui/combobox";
import { DataTable } from "../_components/ui/data-table";
import { getProducts } from "../_data-access/product/get-products";
import { getSales } from "../_data-access/sale/get-sales";
import UpsertSaleButton from "./_components/create-sale-button";
import { saleTablesColumns } from "./_components/table-columns";

const SalesPage = async () => {
  const sales = await getSales();
  const products = await getProducts();
  const productOptions: ComboboxOption[] = products.map((product) => ({
    label: product.name,
    value: product.id,
  }));

  const tableData = sales.map((sale) => ({
    ...sale,
    products,
    productOptions,
  }));

  return (
    <div className="m-8 w-full space-y-8 overflow-y-auto rounded-lg bg-slate-100 p-8">
      <Header>
        <HeaderLeft>
          <HeaderSubTitle> Gestão de Vendas</HeaderSubTitle>
          <HeaderTitle>Vendas</HeaderTitle>
        </HeaderLeft>
        <HeaderRight>
          <UpsertSaleButton
            products={products}
            productOptions={productOptions}
          />
        </HeaderRight>
      </Header>

      <DataTable columns={saleTablesColumns} data={tableData} />
    </div>
  );
};

export default SalesPage;
