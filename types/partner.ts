export enum PartnerType {
  BARBER = "BARBER",
  SALON = "SALON",
  PHARMACY = "PHARMACY",
  COSMETIC_STORE = "COSMETIC_STORE",
}

export interface Partner {
  id: string;
  type: PartnerType;
  name: string;
  email?: string | null;
  phone?: string | null;
  city?: string | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
