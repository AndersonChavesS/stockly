"use client";

import { Product } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "../../_components/ui/badge";
import { Circle } from "lucide-react";
import ProductTableDropdownMenu from "./table-dropdown-menu";

const getStatusLabel = (status: string) => {
  if (status === "IN_STOCK") {
    return "Disponível";
  }
  return "Indisponível";
};

export const productTableColumns: ColumnDef<Product>[] = [
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
      // @ts-expect-error - status is a string
      const label = getStatusLabel(product.status);
      return (
        <Badge
          className={
            label === "Disponível"
              ? "w-28 gap-1.5 bg-green-700"
              : "w-28 gap-1.5 bg-red-700"
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
