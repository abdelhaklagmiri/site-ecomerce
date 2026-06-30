import type { ListParams, Paginated } from "@/types/common";

export interface Product {
  id: string;
  sku: string;
  name: string;
  status: "ACTIVE" | "DRAFT" | "ARCHIVED";
  priceCents: number;
  currency: string;
  stock: number;
  categoryId?: string | null;
}

export type ProductListParams = ListParams & {
  status?: Product["status"];
  categoryId?: string;
};

export async function listProducts(
  _params: ProductListParams = {},
): Promise<Paginated<Product>> {
  throw new Error("[VALON] productService.listProducts not implemented yet");
}

export async function getProduct(_id: string): Promise<Product | null> {
  throw new Error("[VALON] productService.getProduct not implemented yet");
}
