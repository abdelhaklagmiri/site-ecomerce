/**
 * Aggregated metrics powering the dashboard & /statistics page.
 * Real queries are deferred until the Statistics page is built.
 */

export interface RangeParams {
  from: Date;
  to: Date;
}

export interface KpiSnapshot {
  totalRevenueCents: number;
  ordersCount: number;
  activePartnersCount: number;
  averageOrderValueCents: number;
}

export interface TimeseriesPoint {
  date: string; // ISO yyyy-mm-dd
  revenueCents: number;
  ordersCount: number;
}

export async function getKpiSnapshot(_range: RangeParams): Promise<KpiSnapshot> {
  throw new Error("[VALON] statsService.getKpiSnapshot not implemented yet");
}

export async function getRevenueTimeseries(
  _range: RangeParams,
): Promise<TimeseriesPoint[]> {
  throw new Error("[VALON] statsService.getRevenueTimeseries not implemented yet");
}
