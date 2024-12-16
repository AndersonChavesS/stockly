"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "../../_components/ui/badge";
import { Circle } from "lucide-react";
import ProductTableDropdownMenu from "./table-dropdown-menu";
import { ProductDto } from "@/app/_data-access/product/get-products";

const getStatusLabel = (status: string) => {
  if (status === "IN_STOCK") {
    return "Disponível";
  }
  return "Indisponível";
};

export const productTableColumns: ColumnDef<ProductDto>[] = [
  {
    accessorKey: "name",
    header: "Produto",
  },
  {
    accessorKey: "price",
    header: "Valor unitário",
    cell: (row) => {
      const product = row.row.original;
      return Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(product.price));
    },
  },
  {
    accessorKey: "stock",
    header: "Estoque",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (row) => {
      const product = row.row.original;

      const label = getStatusLabel(product.status);
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
    },
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: (row) => <ProductTableDropdownMenu product={row.row.original} />,
  },
];
