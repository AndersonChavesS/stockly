"use server";

import { db } from "@/app/_lib/prisma";
import { revalidateTag } from "next/cache";
import { upsertProductSchema, UpsertProductSchema } from "./schema";

export const upsertProduct = async (data: UpsertProductSchema) => {
  upsertProductSchema.parse(data);
  await db.product.upsert({
    where: { id: data.id ?? "" },
    update: data,
    create: data,
  });
  revalidateTag("get-products");
};
