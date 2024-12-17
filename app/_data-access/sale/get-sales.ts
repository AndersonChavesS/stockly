import "server-only";

import { db } from "@/app/_lib/prisma";


interface SaleProductDto {
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
}
export interface SaleDto {
  id: string;
  productNames: string;
  totalProducts: number;
  totalAmount: number;
  date: Date;
  saleProducts: SaleProductDto[];
}

export const getSales = async (): Promise<SaleDto[]> => {
  const sales = await db.sale.findMany({
    include: {
      saleProducts: {
        include: { product: true },
      },
    },
  });
  return sales.map((sale) => ({
    id: sale.id,
    date: sale.date,
    productNames: sale.saleProducts
      .map((saleProduct) => saleProduct.product.name)
      .join(" • "),
    totalAmount: sale.saleProducts.reduce(
      (acc, saleProduct) =>
        acc + saleProduct.quantity * Number(saleProduct.UnitPrice),
      0,
    ),
    totalProducts: sale.saleProducts.reduce(
      (acc, saleProduct) => acc + saleProduct.quantity,
      0,
    ),
    saleProducts: sale.saleProducts.map(
      (saleProduct): SaleProductDto => ({
        productName: saleProduct.product.name,
        productId: saleProduct.productId,
        quantity: saleProduct.quantity,
        unitPrice: Number(saleProduct.UnitPrice),
      }),
    ),
  }));
};
