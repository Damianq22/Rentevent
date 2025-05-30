import { c as createComponent, a as createAstro } from '../chunks/astro/server_CbS3X-6P.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Logout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Logout;
  const cookieHeader = Astro2.request.headers.get("Cookie");
  if (cookieHeader && cookieHeader.includes("jwt")) {
    return new Response(null, {
      headers: {
        "Set-Cookie": "jwt=; Path=/; Secure; HttpOnly; SameSite=Strict; Max-Age=0",
        Location: "/"
      },
      status: 302
    });
  }
  return Astro2.redirect("/", 302);
}, "C:/Users/HOME/OneDrive/Escritorio/PROYECTO TERMINADO/AlquilerApp/src/pages/logout.astro", void 0);

const $$file = "C:/Users/HOME/OneDrive/Escritorio/PROYECTO TERMINADO/AlquilerApp/src/pages/logout.astro";
const $$url = "/logout";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Logout,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
