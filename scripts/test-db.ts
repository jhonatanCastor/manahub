
import "dotenv/config";
import { prisma } from "../lib/prisma";

async function main() {
  try {
    const result = await prisma.$queryRaw<Array<{ result: number }>>`
      SELECT 1 AS result
    `;

    console.log("Database connection successful!");
    console.log("Query result:", result);
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
}

main();
