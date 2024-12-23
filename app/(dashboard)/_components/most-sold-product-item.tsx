import ProductStatusBadge from "@/app/_components/product-status-badge";
import { MostSoldProductDto } from "@/app/_data-access/dashboard/get-most-sold-products";

import { formatCurrency } from "@/app/_helpers/currency";

interface MostSoldProductProps {
  product: MostSoldProductDto;
}

const MostSoldProductItem = ({ product }: MostSoldProductProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-[6px]">
        <ProductStatusBadge status={product.status} />
        <p className="font-semibold text-blue-900">{product.name}</p>
        <p className="font-medium text-blue-300">
          {formatCurrency(Number(product.price))}
        </p>
      </div>

      <div>
        <p className="text-sm font-semibold text-blue-900">
          {product.totalSold} vendido(s)
        </p>
      </div>
    </div>
  );
};

export default MostSoldProductItem;
