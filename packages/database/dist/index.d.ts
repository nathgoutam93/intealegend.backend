import { PrismaClient } from "@prisma/client";
declare global {
    var prisma: PrismaClient | undefined;
}
export declare const db: any;
export * from "@prisma/client";
