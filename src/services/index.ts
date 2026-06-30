/**
 * Service layer index.
 *
 * Services are the single read/write boundary between the UI and the
 * database / Supabase. Each domain entity gets its own file so we can
 * scale the team and grow the codebase without ceremony.
 *
 * Pages are not built yet — these stubs document the contracts the
 * upcoming dashboard pages will rely on.
 */

export * as authService from "./auth.service";
export * as partnerService from "./partner.service";
export * as orderService from "./order.service";
export * as productService from "./product.service";
export * as salesService from "./sales.service";
export * as statsService from "./stats.service";
