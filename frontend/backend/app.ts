import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routers/contact.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

const env = Deno.env.toObject();

const PORT = env.PORT || 4000;
const HOST = env.HOST || "localhost";
const app = new Application();

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now();
  ctx.response.headers.set("X-Response-Time", `${ms} ms`);
});

app.use(oakCors());
app.use(router.routers());
app.use(router.allowedMethods());
console.log(`Application is listing on port: ${PORT} or open ${HOST}:${PORT}`);
await app.listen(`${HOST}:${PORT}`);
