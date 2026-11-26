import { createSchema } from "graphql-yoga";
import { cardResolvers } from "./resolvers/card.resolvers";

const typeDefs = /* GraphQL */ `
  type Card {
    id: ID!
    name: String!
    setCode: String!
    rarity: String!
    imageUrl: String
  }

  type Query {
    health: String!
    cards: [Card!]!
  }

  type Mutation {
    createCard(
      name: String!
      setCode: String!
      rarity: String!
      imageUrl: String
    ): Card!
  }
`;

export const schema = createSchema({
  typeDefs,
  resolvers: cardResolvers,
});