"use client";

import { Button } from "@/app/_components/ui/button";
import { SaleDto } from "@/app/_data-access/sale/get-sales";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontalIcon } from "lucide-react";
import { formatCurrency } from "../../_helpers/currency";

export const saleTablesColumns: ColumnDef<SaleDto>[] = [
  {
    accessorKey: "productNames",
    header: "Produtos",
  },
  {
    accessorKey: "totalProducts",
    header: "Quantidade de Produtos",
  },
  {
    header: "Valor Total",
    cell: ({
      row: {
        original: { totalAmount },
      },
    }) => formatCurrency(totalAmount),
  },
  {
    header: "Data",
    cell: ({
      row: {
        original: { date },
      },
    }) => new Date(date).toLocaleDateString("pt-BR"),
  },
  {
    header: "Ações",
    cell: () => (
      <Button variant="ghost">
        <MoreHorizontalIcon size={16} />
      </Button>
    ),
  },
];
