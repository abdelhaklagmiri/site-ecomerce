import { PrismaClient } from "@prisma/client";

/**
 * Singleton Prisma client. Next.js dev mode reloads modules constantly which
 * would create dozens of database connections if we didn't cache the instance
 * on `globalThis`.
 */
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
