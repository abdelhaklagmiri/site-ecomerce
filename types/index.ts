export * from "@/types/auth";
export * from "@/types/navigation";
export * from "@/types/partner";

export type EntityStatus = "active" | "inactive" | "archived";

export type SortDirection = "asc" | "desc";

export interface PaginationParams {
  page: number;
  pageSize: number;
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
