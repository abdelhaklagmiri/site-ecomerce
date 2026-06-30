import type { ListParams, Paginated } from "@/types/common";

export interface SaleRecord {
  id: string;
  orderId: string;
  partnerId: string;
  totalCents: number;
  currency: string;
  occurredAt: string;
}

export async function listSales(
  _params: ListParams = {},
): Promise<Paginated<SaleRecord>> {
  throw new Error("[VALON] salesService.listSales not implemented yet");
}
