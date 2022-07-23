import { configAsync } from "./deps.tsx";
await configAsync({ export: true });
import {
  Match,
  router,
  serve,
} from "./deps.tsx";
import { notFound, redirect } from "./utils/responses.ts";
import { Index } from "./pages/index.tsx";
import { Head } from "./components/head.tsx";
import { jsx } from "./utils/jsx.ts";

serve(router({
  "/": (_req) => jsx(Index(), Head()),
}, (_req) => {
  return notFound();
}));
