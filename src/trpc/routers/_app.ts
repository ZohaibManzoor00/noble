import { prisma } from "@/lib/db";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";

export const appRouter = createTRPCRouter({
  hello: baseProcedure.query(() => "Hello World"),
  users: baseProcedure.query(async () => {
    const users = await prisma.user.findMany();
    return users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));
  }),
});

export type AppRouter = typeof appRouter;
