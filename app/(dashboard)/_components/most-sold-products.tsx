import { getMostSoldProducts } from "@/app/_data-access/dashboard/get-most-sold-products";
import MostSoldProductItem from "./most-sold-product-item";

const MostSoldProductsCard = async () => {
    const mostSoldProducts = await getMostSoldProducts()
    return ( 
        <div className="flex h-[333px] flex-col overflow-hidden rounded-xl bg-white py-5">
        <p className="px-4 py-6 text-xl font-semibold text-blue-700">
          Produtos Mais Vendidos
        </p>

        <div className="mt-1 space-y-6 overflow-y-auto px-4 pb-2">
          {mostSoldProducts.map((product) => (
            <MostSoldProductItem key={product.productId} product={product} />
          ))}
        </div>
      </div>
     );
}
 
export default MostSoldProductsCard;