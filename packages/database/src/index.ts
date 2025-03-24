import { Prisma, PrismaClient, User } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = db;
}

export * from "@prisma/client";
