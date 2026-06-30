/**
 * Partner service (Barbers today, Salons / Pharmacies / Cosmetic Stores later).
 * The service intentionally exposes only contracts at this stage — real
 * implementations will be added when the Partners pages are scaffolded.
 */

import type { ListParams, Paginated } from "@/types/common";

export interface Partner {
  id: string;
  type: "BARBER" | "SALON" | "PHARMACY" | "COSMETIC_STORE";
  status: "ACTIVE" | "PROSPECT" | "PAUSED" | "ARCHIVED";
  businessName: string;
  contactName?: string | null;
  city?: string | null;
  phone?: string | null;
  email?: string | null;
  createdAt: string;
}

export type PartnerListParams = ListParams & {
  type?: Partner["type"];
  status?: Partner["status"];
};

export async function listPartners(
  _params: PartnerListParams = {},
): Promise<Paginated<Partner>> {
  throw new Error("[VALON] partnerService.listPartners not implemented yet");
}

export async function getPartner(_id: string): Promise<Partner | null> {
  throw new Error("[VALON] partnerService.getPartner not implemented yet");
}

export async function createPartner(
  _input: Omit<Partner, "id" | "createdAt">,
): Promise<Partner> {
  throw new Error("[VALON] partnerService.createPartner not implemented yet");
}

export async function updatePartner(
  _id: string,
  _input: Partial<Omit<Partner, "id" | "createdAt">>,
): Promise<Partner> {
  throw new Error("[VALON] partnerService.updatePartner not implemented yet");
}
