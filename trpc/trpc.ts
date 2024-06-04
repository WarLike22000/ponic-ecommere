import { initTRPC } from "@trpc/server";
import { init } from "next/dist/compiled/webpack/webpack";

const t = initTRPC.context().create();
export const router = t.router;
export const publicProcedure = t.procedure