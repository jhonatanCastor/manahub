import { createYoga } from "graphql-yoga";
import { schema } from "@/graphql/schema";
import { createContext, type GraphQLContext } from "@/graphql/context";

const yoga = createYoga<GraphQLContext>({
  schema,
  context: createContext,
  graphqlEndpoint: "/api/graphql",
  fetchAPI: { Response },
});

export { yoga as GET, yoga as POST, yoga as OPTIONS };