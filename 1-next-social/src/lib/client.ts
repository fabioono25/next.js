import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

const prisma = globalForPrisma.prisma || new PrismaClient(); // on production, it will be created once

export default prisma; // on development, it will be re-created on each request

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
