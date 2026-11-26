import { prisma, type AppPrismaClient } from "@/lib/prisma";

export type GraphQLContext = {
  prisma: AppPrismaClient;
};

export async function createContext(): Promise<GraphQLContext> {
  return { prisma };
}