import type { ListParams, Paginated } from "@/types/common";

export interface Order {
  id: string;
  reference: string;
  partnerId: string;
  status:
    | "DRAFT"
    | "PENDING"
    | "CONFIRMED"
    | "FULFILLED"
    | "CANCELLED"
    | "REFUNDED";
  paymentStatus: "UNPAID" | "PARTIAL" | "PAID" | "REFUNDED";
  totalCents: number;
  currency: string;
  createdAt: string;
}

export type OrderListParams = ListParams & {
  status?: Order["status"];
  paymentStatus?: Order["paymentStatus"];
  partnerId?: string;
};

export async function listOrders(
  _params: OrderListParams = {},
): Promise<Paginated<Order>> {
  throw new Error("[VALON] orderService.listOrders not implemented yet");
}

export async function getOrder(_id: string): Promise<Order | null> {
  throw new Error("[VALON] orderService.getOrder not implemented yet");
}
