import 'kleur/colors';
import { g as decodeKey } from './chunks/astro/server_CbS3X-6P.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_D7FvF-Ix.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/HOME/OneDrive/Escritorio/PROYECTO%20TERMINADO/AlquilerApp/","cacheDir":"file:///C:/Users/HOME/OneDrive/Escritorio/PROYECTO%20TERMINADO/AlquilerApp/node_modules/.astro/","outDir":"file:///C:/Users/HOME/OneDrive/Escritorio/PROYECTO%20TERMINADO/AlquilerApp/dist/","srcDir":"file:///C:/Users/HOME/OneDrive/Escritorio/PROYECTO%20TERMINADO/AlquilerApp/src/","publicDir":"file:///C:/Users/HOME/OneDrive/Escritorio/PROYECTO%20TERMINADO/AlquilerApp/public/","buildClientDir":"file:///C:/Users/HOME/OneDrive/Escritorio/PROYECTO%20TERMINADO/AlquilerApp/dist/client/","buildServerDir":"file:///C:/Users/HOME/OneDrive/Escritorio/PROYECTO%20TERMINADO/AlquilerApp/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.SgIJv9Vc.css"},{"type":"inline","content":"html,body{margin:0;width:100%;height:100%}table[data-astro-cid-qhz7dzok]{border-collapse:separate;border-spacing:0}th[data-astro-cid-qhz7dzok],td[data-astro-cid-qhz7dzok]{border-bottom:1px solid #e5e7eb}tr[data-astro-cid-qhz7dzok]:last-child td[data-astro-cid-qhz7dzok]{border-bottom:none}#modalAgregarAlquiler[data-astro-cid-qhz7dzok]>div[data-astro-cid-qhz7dzok]{max-height:90vh;overflow-y:auto}main[data-astro-cid-zmrtbboo]{margin:0;width:100%;height:100%}\n"}],"routeData":{"route":"/gestion","isIndex":false,"type":"page","pattern":"^\\/gestion\\/?$","segments":[[{"content":"gestion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gestion.astro","pathname":"/gestion","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/logout","isIndex":false,"type":"page","pattern":"^\\/logout\\/?$","segments":[[{"content":"logout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/logout.astro","pathname":"/logout","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.SgIJv9Vc.css"},{"type":"inline","content":"@import\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\";html,body{margin:0;width:100%;height:100%}*{padding:0;margin:0;box-sizing:border-box;font-family:Poppins,sans-serif}.flex{display:flex;align-items:center}.grid{display:grid;align-items:center;gap:1.5 rem}html{font-size:90%}a{text-decoration:none}li{list-style:none}.icon{font-size:var(1.25rem);cursor:pointer}.video{height:auto;width:100%}.message{display:none}.showMessage{display:block;color:#fff;background:#f36a6a;border-radius:3px;text-align:center}.btn{border:none;outline:none;cursor:pointer;border-radius:8px;padding:.8rem 1rem;background:#b2b2b2;color:#000}.btn .icon{margin-left:.5rem}.btn:hover{color:#fff;background:#0ea1f0}.loginPage{height:100vh;width:100%;margin:auto;border-radius:12px;overflow:hidden;box-shadow:0 7px 50px #9ab398;.container{height:75vh;width:60%;margin:auto;justify-content:space-between;border-radius:10px;background-color:#e8e8e8;.videoDiv{position:relative;display:flex;flex-basis:50%;width:70%;height:100%;padding:0 1.5rem;text-align:center;justify-content:center;flex-direction:column;margin:auto;border-radius:10px;overflow:hidden;video,.footerDiv{position:absolute}video{height:100%;width:100%;object-fit:cover;inset:0}.textDiv{position:relative;.title{color:#f5f5f5;font-size:35px;font-weight:800}}.footerDiv{bottom:10px;padding:0 1rem;height:60px;background:#ffffff28;left:0;right:0;justify-content:space-between;backdrop-filter:blur(4px);border-radius:10px;.text{color:#d8d8d8}.btn{background:#fff;color:#000;padding:.8rem 1.5rem;border-radius:10px;font-weight:400;transition:.3s ease;&:hover{background:#397f95;color:#000}}}}.formDiv{flex-basis:50%;margin:full;flex-direction:column;gap:1.5rem;transform:translateY(-2rem);.headerDiv{text-align:center;padding:1.5rem 0;img{width:150px;padding-bottom:.5rem}h3{font-size:30px;color:#000;font-weight:600}t{font-size:20px;color:#000;font-weight:600}pp{font-size:60px;color:#000;font-weight:700}}.form{gap:1rem;.inputDiv{.icon{color:#000}input{background:none;outline:none;border:none;width:200px}label{color:#000;font-weight:400;font-size:14px;padding:.5rem 0;display:block}.input{gap:.5rem;padding:1rem;background:#c2c2c2;border-radius:10px}}.btn{padding:.8rem;border-radius:10px;align-items:center;margin:auto;justify-content:center;font-size:17px;width:100%;gap:.5rem;transition:.3s ease;.icon{font-size:25px;transition:.3s ease}&:hover{background:#0ea1f0;color:#fff;.icon{color:#fff;transform:translate(5px)}}}.forgotPassword{font-size:14px;color:#000;opacity:.7;text-align:center;a{text-decoration:underline;cursor:pointer}}}}}}@media screen and (max-width: 602px){.loginPage,.registerPage{.container{height:100%;width:100%;flex-direction:column;padding:1rem;.videoDiv{width:100%;.textDiv{.title{font-size:20px}p{padding:1rem}}.footerDiv{.text{font-size:12px}}}}}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/HOME/OneDrive/Escritorio/PROYECTO TERMINADO/AlquilerApp/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/HOME/OneDrive/Escritorio/PROYECTO TERMINADO/AlquilerApp/src/pages/gestion.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/logout@_@astro":"pages/logout.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/gestion@_@astro":"pages/gestion.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/HOME/OneDrive/Escritorio/PROYECTO TERMINADO/AlquilerApp/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Cm89XgmY.mjs","\u0000@astrojs-manifest":"manifest_9wv48L4T.mjs","C:/Users/HOME/OneDrive/Escritorio/PROYECTO TERMINADO/AlquilerApp/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.CGCx9d8h.js","C:/Users/HOME/OneDrive/Escritorio/PROYECTO TERMINADO/AlquilerApp/src/components/GestionCliente.astro?astro&type=script&index=0&lang.ts":"_astro/GestionCliente.astro_astro_type_script_index_0_lang.C8T6gcHy.js","C:/Users/HOME/OneDrive/Escritorio/PROYECTO TERMINADO/AlquilerApp/src/components/GestionFacturas.astro?astro&type=script&index=0&lang.ts":"_astro/GestionFacturas.astro_astro_type_script_index_0_lang.BYgz5Bxx.js","C:/Users/HOME/OneDrive/Escritorio/PROYECTO TERMINADO/AlquilerApp/src/components/GestionProveedor.astro?astro&type=script&index=0&lang.ts":"_astro/GestionProveedor.astro_astro_type_script_index_0_lang.sx448HOf.js","C:/Users/HOME/OneDrive/Escritorio/PROYECTO TERMINADO/AlquilerApp/src/components/GestionUsuario.astro?astro&type=script&index=0&lang.ts":"_astro/GestionUsuario.astro_astro_type_script_index_0_lang.DRc-5E2U.js","C:/Users/HOME/OneDrive/Escritorio/PROYECTO TERMINADO/AlquilerApp/src/components/GestionCategoria.astro?astro&type=script&index=0&lang.ts":"_astro/GestionCategoria.astro_astro_type_script_index_0_lang.HZStOdF6.js","C:/Users/HOME/OneDrive/Escritorio/PROYECTO TERMINADO/AlquilerApp/src/components/GestionArticulo.astro?astro&type=script&index=0&lang.ts":"_astro/GestionArticulo.astro_astro_type_script_index_0_lang.NLcwY2vc.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/HOME/OneDrive/Escritorio/PROYECTO TERMINADO/AlquilerApp/src/pages/index.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const a=document.getElementById(\"loginForm\"),r=document.getElementById(\"errorMessage\");function i(o){r.textContent=o,r.classList.remove(\"hidden\")}function c(){r.classList.add(\"hidden\")}function d(o,t,n){const e=new Date;e.setDate(e.getDate()+n),document.cookie=`${o}=${t}; expires=${e.toUTCString()}; path=/`}a.addEventListener(\"submit\",async function(o){o.preventDefault(),c();const t=document.getElementById(\"username\").value,n=document.getElementById(\"password\").value;if(!t||!n){i(\"Por favor complete todos los campos\");return}try{const e=await fetch(\"https://localhost:7280/api/UsuarioControllerAuth/login\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({usuario:t,contraseña:n})});if(!e.ok){const l=await e.json();throw new Error(l.message||\"Credenciales incorrectas\")}const s=await e.json();if(console.log(\"Token JWT recibido:\",s.token),!s.token)throw new Error(\"Token JWT no recibido del servidor\");d(\"jwt\",s.token,1),console.log(\"Login exitoso. Redirigiendo...\"),window.location.href=\"/gestion\"}catch(e){console.error(\"Error en el login:\",e),i(e.message||\"Error al iniciar sesión. Intente nuevamente.\")}})});"],["C:/Users/HOME/OneDrive/Escritorio/PROYECTO TERMINADO/AlquilerApp/src/components/GestionFacturas.astro?astro&type=script&index=0&lang.ts","const f=document.getElementById(\"inputSearch\"),h=document.getElementById(\"filtroEstado\"),m=document.getElementById(\"filtroFechaDesde\"),E=document.getElementById(\"filtroFechaHasta\"),D=document.getElementById(\"alquilerTable\");function c(e){return e.toLowerCase().normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g,\"\")}function o(){const e=c(f.value.trim()),d=h.value,i=m.value,r=E.value;Array.from(D.children).forEach(t=>{const g=c(t.children[1].textContent),p=c(t.children[2].textContent),y=c(t.children[6].textContent),u=t.children[3].children[0]?.textContent?.trim().replace(\"Entrega:\",\"\").trim();let n=null;if(u){const[l,s,v]=u.split(\"/\");n=new Date(`${v}-${s}-${l}`)}let a=!0;if(e&&!g.includes(e)&&!p.includes(e)&&(a=!1),d!==\"Todos\"&&!y.includes(c(d))&&(a=!1),i||r){const l=i?new Date(i):null,s=r?new Date(r):null;l&&n&&n<l&&(a=!1),s&&n&&n>s&&(a=!1)}t.style.display=a?\"\":\"none\"})}f.addEventListener(\"input\",o);h.addEventListener(\"change\",o);m.addEventListener(\"change\",o);E.addEventListener(\"change\",o);"],["C:/Users/HOME/OneDrive/Escritorio/PROYECTO TERMINADO/AlquilerApp/src/components/GestionUsuario.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const a=document.getElementById(\"passwordField\"),d=document.getElementById(\"eyeIcon\"),c=document.getElementById(\"togglePassword\");if(!c||!a||!d)return;c.addEventListener(\"click\",()=>{const o=a.type===\"password\";a.type=o?\"text\":\"password\",d.innerHTML=o?`\n        <path d=\"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21\" />\n      `:`\n        <path d=\"M10 12a2 2 0 100-4 2 2 0 000 4z\" />\n        <path fill-rule=\"evenodd\" d=\"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z\" clip-rule=\"evenodd\" />\n      `});const e=document.getElementById(\"modalAgregar\"),u=document.getElementById(\"agregarUsuario\"),g=document.getElementById(\"cancelarModal\"),y=document.getElementById(\"closeModalBtn\"),n=document.getElementById(\"formAgregarUsuario\");u?.addEventListener(\"click\",()=>{e.classList.remove(\"hidden\"),setTimeout(()=>{e.style.opacity=\"1\",e.querySelector(\"div\").classList.remove(\"scale-95\")},10)});function r(){e.style.opacity=\"0\",e.querySelector(\"div\").classList.add(\"scale-95\"),setTimeout(()=>e.classList.add(\"hidden\"),300)}y.addEventListener(\"click\",()=>{e.classList.add(\"hidden\")}),g?.addEventListener(\"click\",r),e?.addEventListener(\"click\",o=>{o.target===e&&r()}),n?.addEventListener(\"submit\",async o=>{o.preventDefault();const s=n.querySelector('button[type=\"submit\"]'),i=s.querySelector(\"#submitText\"),l=s.querySelector(\"#loadingSpinner\");i.classList.add(\"hidden\"),l.classList.remove(\"hidden\"),s.disabled=!0;try{const t=new FormData(n);if(t.get(\"contraseña\")!==t.get(\"confirmar_contraseña\"))throw new Error(\"Las contraseñas no coinciden\");const p={nombre:t.get(\"nombre\"),usuario:t.get(\"usuario\"),contraseña:t.get(\"contraseña\")},m=await fetch(\"http://localhost:5183/api/Usuario\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(p)});if(!m.ok){const L=await m.json();throw new Error(L.message||\"Error al guardar el usuario\")}alert(\"Usuario guardado correctamente\"),window.location.reload(),r(),n.reset()}catch(t){alert(t.message),console.error(\"Error:\",t)}finally{i.classList.remove(\"hidden\"),l.classList.add(\"hidden\"),s.disabled=!1}})});"]],"assets":["/_astro/index.SgIJv9Vc.css","/favicon.svg","/_redirects","/image/clipLogo.mp4","/image/LoginIcon.jpg","/_astro/GestionArticulo.astro_astro_type_script_index_0_lang.NLcwY2vc.js","/_astro/GestionCategoria.astro_astro_type_script_index_0_lang.HZStOdF6.js","/_astro/GestionCliente.astro_astro_type_script_index_0_lang.C8T6gcHy.js","/_astro/GestionProveedor.astro_astro_type_script_index_0_lang.sx448HOf.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"em2wWqpajS3FbTroPzpe9nIGZWogHWD43IBwhm2/Ifs="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
