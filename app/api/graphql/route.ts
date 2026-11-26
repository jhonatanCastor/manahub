import { createYoga } from "graphql-yoga";
import type { NextRequest } from "next/server";
import { schema } from "@/graphql/schema";
import { createContext, type GraphQLContext } from "@/graphql/context";

const yoga = createYoga<GraphQLContext>({
  schema,
  context: createContext,
  graphqlEndpoint: "/api/graphql",
  fetchAPI: { Response },
});

export async function GET(request: NextRequest) {
  return yoga.fetch(request);
}

export async function POST(request: NextRequest) {
  return yoga.fetch(request);
}

export async function OPTIONS(request: NextRequest) {
  return yoga.fetch(request);
}