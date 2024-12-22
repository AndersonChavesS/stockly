import "server-only";

import { db } from "@/app/_lib/prisma";

export const getTotalRevenue = async (): Promise<number> => {
  const totalRevenueQuery = `
    SELECT SUM("SaleProduct"."UnitPrice" * "SaleProduct"."quantity") as "totalRevenue"
    FROM "SaleProduct"
    JOIN "Sale" ON "SaleProduct"."saleId" = "Sale"."id";
  `;

  const totalRevenue =
    await db.$queryRawUnsafe<{ totalRevenue: number }[]>(totalRevenueQuery);

  return totalRevenue[0].totalRevenue;
};
