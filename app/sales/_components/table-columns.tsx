"use client";

import { SaleDto } from "@/app/_data-access/sale/get-sales";
import { ColumnDef } from "@tanstack/react-table";
import { formatCurrency } from "../../_helpers/currency";
import SalesTableDropdownMenu from "./table-dropdown-menu";

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
    cell: ({ row: { original: sale } }) => (
      <SalesTableDropdownMenu sale={sale} />
    ),
  },
];
