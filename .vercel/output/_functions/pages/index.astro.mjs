import { c as createComponent, r as renderHead, b as renderSlot, d as renderTemplate, e as renderComponent, f as renderScript, m as maybeRenderHead } from '../chunks/astro/server_CbS3X-6P.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>Rent4Even</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/HOME/OneDrive/Escritorio/PROYECTO TERMINADO/AlquilerApp/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="loginPage flex"> <div class="container flex"> <div class="videoDiv"> <video src="/image/clipLogo.mp4" autoplay muted loop></video> <div class="footerDiv flex"> <span class="text-white">Bienvenido a tu Renta de Alquiler.</span> </div> </div> <div class="formDiv w-full h-full flex flex-col justify-center items-center"> <div> <h1 class="title text-4xl font-bold text-center text-pink-800 mb-2">
Rent4Even
</h1> </div> <form id="loginForm" class="form grid"> <div class="inputDiv"> <label for="username" class="username">Usuario</label> <div class="input flex"> <input placeholder="Ingrese su usuario" type="text" id="username" name="email" required> </div> </div> <div class="inputDiv"> <label for="password" class="password">Contraseña</label> <div class="input flex"> <input placeholder="Ingrese su contraseña" type="password" id="password" name="password" required> </div> </div> <button type="submit" class="btn flex"> <span>Login</span> </button> </form> <div id="errorMessage" class="text-red-700 text-center hidden text-sm mt-4"></div> </div> </div> </div> ` })} ${renderScript($$result, "C:/Users/HOME/OneDrive/Escritorio/PROYECTO TERMINADO/AlquilerApp/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/HOME/OneDrive/Escritorio/PROYECTO TERMINADO/AlquilerApp/src/pages/index.astro", void 0);

const $$file = "C:/Users/HOME/OneDrive/Escritorio/PROYECTO TERMINADO/AlquilerApp/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
