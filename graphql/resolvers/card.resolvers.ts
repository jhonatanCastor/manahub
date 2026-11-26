import type { GraphQLContext } from "../context";

export const cardResolvers = {
  Query: {
    health: () => "ok",
    cards: async (_parent: unknown, _args: unknown, ctx: GraphQLContext) => {
      return ctx.prisma.card.findMany({
        orderBy: { createdAt: "desc" },
      });
    },
  },
  Mutation: {
    createCard: async (
      _parent: unknown,
      args: {
        name: string;
        setCode: string;
        rarity: string;
        imageUrl?: string | null;
      },
      ctx: GraphQLContext
    ) => {
      return ctx.prisma.card.create({
        data: {
          name: args.name,
          setCode: args.setCode,
          rarity: args.rarity,
          imageUrl: args.imageUrl ?? null,
        },
      });
    },
  },
};
