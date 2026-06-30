/**
 * Domain types shared across services, hooks and UI.
 * Re-export Prisma enums so consumers don't need to import the client directly.
 */

export type Currency = "MAD" | "EUR" | "USD";

export type Money = {
  amountCents: number;
  currency: Currency;
};

/** Generic paginated query result, used by every list service. */
export interface Paginated<T> {
  data: T[];
  page: number;
  pageSize: number;
  total: number;
  hasMore: boolean;
}

export interface ListParams {
  page?: number;
  pageSize?: number;
  search?: string;
  sortBy?: string;
  sortDir?: "asc" | "desc";
}
