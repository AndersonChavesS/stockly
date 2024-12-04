"use client";

import { Product } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "../../_components/ui/badge";
import { Circle } from "lucide-react";

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
        <Badge variant={label === "Disponível" ? "default" : "destructive"} className="gap-1.5">
          <Circle
            size={10}
            className={`${label == "Disponível" ? "fill-primary-foreground" : "fill-destructive-foreground"}`}
          />
          {label}
        </Badge>
      );
    },
  },
];
