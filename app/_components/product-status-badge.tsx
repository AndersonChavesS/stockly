import { Circle } from "lucide-react";
import { ProductStatusDto } from "../_data-access/product/get-products";
import { Badge } from "./ui/badge";

const getStatusLabel = (status: string) => {
  if (status === "IN_STOCK") {
    return "Disponível";
  }
  return "Indisponível";
};

interface ProductStatusBadgeProps {
  status: ProductStatusDto;
}

const ProductStatusBadge = ({ status }: ProductStatusBadgeProps) => {
  const label = getStatusLabel(status);
  return (
    <Badge
      variant="outline"
      className={
        label === "Disponível"
          ? "w-28 gap-1.5 bg-green-700 text-white"
          : "w-28 gap-1.5 bg-red-700 text-white"
      }
    >
      <Circle
        size={10}
        className={`${label === "Disponível" ? "fill-primary-foreground" : "fill-destructive-foreground"}`}
      />
      {label}
    </Badge>
  );
};

export default ProductStatusBadge;
