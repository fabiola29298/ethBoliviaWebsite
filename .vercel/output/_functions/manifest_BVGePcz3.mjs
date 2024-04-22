import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import './chunks/astro_CzUXaSc3.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
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
    isIndex: rawRouteData.isIndex
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
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/ethBoliviaWebsite/_astro/privacy.C8H-qtQw.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/ethBoliviaWebsite/_astro/privacy.C8H-qtQw.css"}],"routeData":{"route":"/es/404","isIndex":false,"type":"page","pattern":"^\\/es\\/404$","segments":[[{"content":"es","dynamic":false,"spread":false}],[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/404.astro","pathname":"/es/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/ethBoliviaWebsite/_astro/privacy.C8H-qtQw.css"}],"routeData":{"route":"/es/hackathon-2023","isIndex":false,"type":"page","pattern":"^\\/es\\/hackathon-2023$","segments":[[{"content":"es","dynamic":false,"spread":false}],[{"content":"hackathon-2023","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/hackathon-2023.astro","pathname":"/es/hackathon-2023","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/ethBoliviaWebsite/_astro/privacy.C8H-qtQw.css"}],"routeData":{"route":"/es/hackathon-2024","isIndex":false,"type":"page","pattern":"^\\/es\\/hackathon-2024$","segments":[[{"content":"es","dynamic":false,"spread":false}],[{"content":"hackathon-2024","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/hackathon-2024.astro","pathname":"/es/hackathon-2024","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/ethBoliviaWebsite/_astro/privacy.C8H-qtQw.css"}],"routeData":{"route":"/es/nosotros","isIndex":false,"type":"page","pattern":"^\\/es\\/nosotros$","segments":[[{"content":"es","dynamic":false,"spread":false}],[{"content":"nosotros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/nosotros.astro","pathname":"/es/nosotros","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/ethBoliviaWebsite/_astro/privacy.C8H-qtQw.css"}],"routeData":{"route":"/es","isIndex":true,"type":"page","pattern":"^\\/es$","segments":[[{"content":"es","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/index.astro","pathname":"/es","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/ethBoliviaWebsite/_astro/privacy.C8H-qtQw.css"}],"routeData":{"route":"/hackathon-2023","isIndex":false,"type":"page","pattern":"^\\/hackathon-2023$","segments":[[{"content":"hackathon-2023","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hackathon-2023.astro","pathname":"/hackathon-2023","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/ethBoliviaWebsite/_astro/privacy.C8H-qtQw.css"}],"routeData":{"route":"/hackathon-2024","isIndex":false,"type":"page","pattern":"^\\/hackathon-2024$","segments":[[{"content":"hackathon-2024","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hackathon-2024.astro","pathname":"/hackathon-2024","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/ethBoliviaWebsite/_astro/privacy.C8H-qtQw.css"}],"routeData":{"route":"/nosotros","isIndex":false,"type":"page","pattern":"^\\/nosotros$","segments":[[{"content":"nosotros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nosotros.astro","pathname":"/nosotros","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/ethBoliviaWebsite/_astro/privacy.C8H-qtQw.css"}],"routeData":{"route":"/privacy","isIndex":false,"type":"page","pattern":"^\\/privacy$","segments":[[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy.md","pathname":"/privacy","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.ts","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/ethBoliviaWebsite/_astro/privacy.C8H-qtQw.css"}],"routeData":{"route":"/terms","isIndex":false,"type":"page","pattern":"^\\/terms$","segments":[[{"content":"terms","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/terms.md","pathname":"/terms","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/ethBoliviaWebsite/_astro/privacy.C8H-qtQw.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}}],"site":"https://fabiola29298.github.io/","base":"/ethBoliviaWebsite","trailingSlash":"never","compressHTML":true,"componentMetadata":[["/home/fabi/april2024/ethBoliviaWebsite/src/pages/privacy.md",{"propagation":"none","containsHead":true}],["/home/fabi/april2024/ethBoliviaWebsite/src/pages/terms.md",{"propagation":"none","containsHead":true}],["/home/fabi/april2024/ethBoliviaWebsite/src/pages/[...blog]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["/home/fabi/april2024/ethBoliviaWebsite/src/pages/[...blog]/[category]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["/home/fabi/april2024/ethBoliviaWebsite/src/pages/[...blog]/[tag]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["/home/fabi/april2024/ethBoliviaWebsite/src/pages/[...blog]/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/fabi/april2024/ethBoliviaWebsite/src/pages/es/[...blog]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["/home/fabi/april2024/ethBoliviaWebsite/src/pages/es/[...blog]/[category]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["/home/fabi/april2024/ethBoliviaWebsite/src/pages/es/[...blog]/[tag]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["/home/fabi/april2024/ethBoliviaWebsite/src/pages/es/[...blog]/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/fabi/april2024/ethBoliviaWebsite/src/pages/es/hackathon-2023.astro",{"propagation":"in-tree","containsHead":true}],["/home/fabi/april2024/ethBoliviaWebsite/src/pages/es/hackathon-2024.astro",{"propagation":"none","containsHead":true}],["/home/fabi/april2024/ethBoliviaWebsite/src/pages/es/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/fabi/april2024/ethBoliviaWebsite/src/pages/es/nosotros.astro",{"propagation":"in-tree","containsHead":true}],["/home/fabi/april2024/ethBoliviaWebsite/src/pages/hackathon-2023.astro",{"propagation":"in-tree","containsHead":true}],["/home/fabi/april2024/ethBoliviaWebsite/src/pages/hackathon-2024.astro",{"propagation":"none","containsHead":true}],["/home/fabi/april2024/ethBoliviaWebsite/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/fabi/april2024/ethBoliviaWebsite/src/pages/nosotros.astro",{"propagation":"in-tree","containsHead":true}],["/home/fabi/april2024/ethBoliviaWebsite/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/home/fabi/april2024/ethBoliviaWebsite/src/pages/es/404.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/fabi/april2024/ethBoliviaWebsite/src/utils/blog.ts",{"propagation":"in-tree","containsHead":false}],["/home/fabi/april2024/ethBoliviaWebsite/src/components/widgets/BlogLatestPosts.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/es/hackathon-2023@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/es/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/es/nosotros@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/hackathon-2023@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/nosotros@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[...blog]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[...blog]/[category]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[...blog]/[tag]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[...blog]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/es/[...blog]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/es/[...blog]/[category]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/es/[...blog]/[tag]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/es/[...blog]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/fabi/april2024/ethBoliviaWebsite/src/pages/rss.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@ts",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_BxlFRvRH.mjs","/src/pages/rss.xml.ts":"chunks/pages/rss_D63nscUI.mjs","/src/pages/terms.md":"chunks/pages/terms_CvE73sem.mjs","\u0000@astrojs-manifest":"manifest_BVGePcz3.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_DO1PYn5c.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_MtsgAeAN.mjs","\u0000@astro-page:src/pages/es/404@_@astro":"chunks/404_DDzNiYqJ.mjs","\u0000@astro-page:src/pages/es/hackathon-2023@_@astro":"chunks/hackathon-2023_CfOPOLS_.mjs","\u0000@astro-page:src/pages/es/hackathon-2024@_@astro":"chunks/hackathon-2024_62xyOOrf.mjs","\u0000@astro-page:src/pages/es/nosotros@_@astro":"chunks/nosotros_DrHoA06Z.mjs","\u0000@astro-page:src/pages/es/[...blog]/[category]/[...page]@_@astro":"chunks/_.._BOoCbISl.mjs","\u0000@astro-page:src/pages/es/[...blog]/[tag]/[...page]@_@astro":"chunks/_.._BTAz-sSz.mjs","\u0000@astro-page:src/pages/es/[...blog]/[...page]@_@astro":"chunks/_.._CLk3pEEb.mjs","\u0000@astro-page:src/pages/es/index@_@astro":"chunks/index_DsG20awq.mjs","\u0000@astro-page:src/pages/es/[...blog]/index@_@astro":"chunks/index_DBMIqQGI.mjs","\u0000@astro-page:src/pages/hackathon-2023@_@astro":"chunks/hackathon-2023_DuzU4tc4.mjs","\u0000@astro-page:src/pages/hackathon-2024@_@astro":"chunks/hackathon-2024_BbCQflWt.mjs","\u0000@astro-page:src/pages/nosotros@_@astro":"chunks/nosotros_C-H2ddZo.mjs","\u0000@astro-page:src/pages/privacy@_@md":"chunks/privacy_CZPhBnzO.mjs","\u0000@astro-page:src/pages/rss.xml@_@ts":"chunks/rss_Dip060KM.mjs","\u0000@astro-page:src/pages/terms@_@md":"chunks/terms_gcqeq5PR.mjs","\u0000@astro-page:src/pages/[...blog]/[category]/[...page]@_@astro":"chunks/_.._BTIrG2Ib.mjs","\u0000@astro-page:src/pages/[...blog]/[tag]/[...page]@_@astro":"chunks/_.._CiSBfZgx.mjs","\u0000@astro-page:src/pages/[...blog]/[...page]@_@astro":"chunks/_.._BJG3iCw3.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_D59ymvts.mjs","\u0000@astro-page:src/pages/[...blog]/index@_@astro":"chunks/index_D4Yny5z7.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/agendaSpeakers1.png":"chunks/agendaSpeakers1_DR_SLor4.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/agendaSpeakers10.png":"chunks/agendaSpeakers10_CBNEcz9v.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/agendaSpeakers11.png":"chunks/agendaSpeakers11_-fCsMqb9.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/agendaSpeakers12.png":"chunks/agendaSpeakers12_Bfg8C8JE.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/agendaSpeakers13.png":"chunks/agendaSpeakers13_Bivdguao.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/agendaSpeakers14.png":"chunks/agendaSpeakers14_Bd1ecMyM.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/agendaSpeakers15.png":"chunks/agendaSpeakers15_cJrjHrdJ.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/agendaSpeakers16.png":"chunks/agendaSpeakers16_Hc7aG_gg.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/agendaSpeakers17.png":"chunks/agendaSpeakers17_C3RYKWUW.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/agendaSpeakers18.png":"chunks/agendaSpeakers18_D31S7hw6.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/agendaSpeakers19.png":"chunks/agendaSpeakers19_sIH9Ctrf.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/agendaSpeakers2.png":"chunks/agendaSpeakers2_DdtvDSFK.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/agendaSpeakers20.png":"chunks/agendaSpeakers20_D4sxeiUP.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/agendaSpeakers21.png":"chunks/agendaSpeakers21_Bca9bKuw.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/agendaSpeakers22.png":"chunks/agendaSpeakers22_C3sl6GXp.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/agendaSpeakers23.png":"chunks/agendaSpeakers23_CVeIXm2f.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/agendaSpeakers24.png":"chunks/agendaSpeakers24_DCq4oGwr.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/agendaSpeakers25.png":"chunks/agendaSpeakers25_DPBEdjS6.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/agendaSpeakers26.png":"chunks/agendaSpeakers26_DGBp9XA0.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/agendaSpeakers27.png":"chunks/agendaSpeakers27_CUiHkjtn.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/agendaSpeakers28.png":"chunks/agendaSpeakers28_CUz-w2oe.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/agendaSpeakers3.png":"chunks/agendaSpeakers3_CTfU-Zy-.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/agendaSpeakers4.png":"chunks/agendaSpeakers4_BCxkLFM3.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/agendaSpeakers5.png":"chunks/agendaSpeakers5_JTzrgG7T.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/agendaSpeakers6.png":"chunks/agendaSpeakers6_BFKHWD0k.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/agendaSpeakers7.png":"chunks/agendaSpeakers7_DzlbNsvQ.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/agendaSpeakers8.png":"chunks/agendaSpeakers8_CKMtjOix.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/agendaSpeakers9.png":"chunks/agendaSpeakers9_CVzKC_VN.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/app-store.png":"chunks/app-store_COke8-zy.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/default.png":"chunks/default_RMTYTkIs.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/google-play.png":"chunks/google-play_PNyF5w26.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/hero.png":"chunks/hero_oAQS0dqg.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/hero2.png":"chunks/hero2_rLzIt7Dq.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/heroNosotros.png":"chunks/heroNosotros_C_6rL8qx.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/heroScz.png":"chunks/heroScz_HXzYjrcT.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/impact2.png":"chunks/impact2_BDV7IY1B.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/impact3.png":"chunks/impact3_C9J68tXO.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/impact4.png":"chunks/impact4_DBR8V8bb.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/photo4eth2023.jpg":"chunks/photo4eth2023_dAWTMJzo.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/sponsor1.png":"chunks/sponsor1_DqTStAza.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/sponsor2.png":"chunks/sponsor2_DfdTsr7W.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/sponsor3.png":"chunks/sponsor3_BcnTQ5S4.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/sponsor4.png":"chunks/sponsor4_BI2XCAOz.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/sponsor5.png":"chunks/sponsor5_DwIrusYZ.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/sponsor6.png":"chunks/sponsor6_wt4jThxX.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/sponsor7.png":"chunks/sponsor7_DdW-ipkB.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/sponsor8.png":"chunks/sponsor8_CSJybwZs.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/sponsor9.png":"chunks/sponsor9_U59Yz4Ov.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/content/post/communitiy-hour-3.mdx?astroContentCollectionEntry=true":"chunks/communitiy-hour-3_ra3a4NoX.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/content/post/curso-solidity-2023.mdx?astroContentCollectionEntry=true":"chunks/curso-solidity-2023_BzJc5k1h.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/content/post/dos-equipos-bolivianos.mdx?astroContentCollectionEntry=true":"chunks/dos-equipos-bolivianos_CxMvBLTv.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/content/post/entrevista-eth-argentina.md?astroContentCollectionEntry=true":"chunks/entrevista-eth-argentina_WNE6P9pg.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/content/post/metricas-eth-kipu.md?astroContentCollectionEntry=true":"chunks/metricas-eth-kipu_CaFk4MTj.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/content/post/por-primera-vez-en-tarija.mdx?astroContentCollectionEntry=true":"chunks/por-primera-vez-en-tarija_B0L3Z64V.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/content/post/proyecto-ley-de-criptoactivos.md?astroContentCollectionEntry=true":"chunks/proyecto-ley-de-criptoactivos_jAK9v1eE.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/content/post/communitiy-hour-3.mdx?astroPropagatedAssets":"chunks/communitiy-hour-3_coaSZQjk.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/content/post/curso-solidity-2023.mdx?astroPropagatedAssets":"chunks/curso-solidity-2023_dnJrfKpv.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/content/post/dos-equipos-bolivianos.mdx?astroPropagatedAssets":"chunks/dos-equipos-bolivianos_DCnTY8uI.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/content/post/entrevista-eth-argentina.md?astroPropagatedAssets":"chunks/entrevista-eth-argentina_D6Q6Htrp.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/content/post/metricas-eth-kipu.md?astroPropagatedAssets":"chunks/metricas-eth-kipu_CNDZZZed.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/content/post/por-primera-vez-en-tarija.mdx?astroPropagatedAssets":"chunks/por-primera-vez-en-tarija_B4wxAly5.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/content/post/proyecto-ley-de-criptoactivos.md?astroPropagatedAssets":"chunks/proyecto-ley-de-criptoactivos_BK4kqFxT.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/content/post/communitiy-hour-3.mdx":"chunks/communitiy-hour-3_32aIQyOk.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/content/post/curso-solidity-2023.mdx":"chunks/curso-solidity-2023_DxlM5Nyk.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/content/post/dos-equipos-bolivianos.mdx":"chunks/dos-equipos-bolivianos_C-z-_gbI.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/content/post/entrevista-eth-argentina.md":"chunks/entrevista-eth-argentina_CnhWr4Dg.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/content/post/metricas-eth-kipu.md":"chunks/metricas-eth-kipu_BMbJ3gKj.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/content/post/por-primera-vez-en-tarija.mdx":"chunks/por-primera-vez-en-tarija_DHdGth17.mjs","/home/fabi/april2024/ethBoliviaWebsite/src/content/post/proyecto-ley-de-criptoactivos.md":"chunks/proyecto-ley-de-criptoactivos_C5wSq5w8.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/ethBoliviaWebsite/_astro/agendaSpeakers1.D1sPCbsS.png","/ethBoliviaWebsite/_astro/agendaSpeakers10.DNoa9N5q.png","/ethBoliviaWebsite/_astro/agendaSpeakers11.DQQvCem5.png","/ethBoliviaWebsite/_astro/agendaSpeakers12.vrc1JywT.png","/ethBoliviaWebsite/_astro/agendaSpeakers13.CEikovS_.png","/ethBoliviaWebsite/_astro/agendaSpeakers14.zglVV6Ja.png","/ethBoliviaWebsite/_astro/agendaSpeakers15.CKQ1J-8A.png","/ethBoliviaWebsite/_astro/agendaSpeakers17.DgZaVuRH.png","/ethBoliviaWebsite/_astro/agendaSpeakers16.Bczuu_kr.png","/ethBoliviaWebsite/_astro/agendaSpeakers2.Hmu7Kpoh.png","/ethBoliviaWebsite/_astro/agendaSpeakers18.CZllIqV8.png","/ethBoliviaWebsite/_astro/agendaSpeakers19.CbTeaGHZ.png","/ethBoliviaWebsite/_astro/agendaSpeakers20.D5oXxZX1.png","/ethBoliviaWebsite/_astro/agendaSpeakers21.Bcr446rd.png","/ethBoliviaWebsite/_astro/agendaSpeakers22.Bf-hyygN.png","/ethBoliviaWebsite/_astro/agendaSpeakers23.k4kjczpS.png","/ethBoliviaWebsite/_astro/agendaSpeakers25.D9xQesZt.png","/ethBoliviaWebsite/_astro/agendaSpeakers24.CELUN9i2.png","/ethBoliviaWebsite/_astro/agendaSpeakers26.BgDPbhip.png","/ethBoliviaWebsite/_astro/agendaSpeakers27.CkObQG1F.png","/ethBoliviaWebsite/_astro/agendaSpeakers28.6y6I5AIU.png","/ethBoliviaWebsite/_astro/agendaSpeakers3.D-rVz6vX.png","/ethBoliviaWebsite/_astro/agendaSpeakers4.HhTEu0xn.png","/ethBoliviaWebsite/_astro/agendaSpeakers5.CS5MkS7s.png","/ethBoliviaWebsite/_astro/agendaSpeakers6.C4sHkzEO.png","/ethBoliviaWebsite/_astro/app-store.t3tG4Jz3.png","/ethBoliviaWebsite/_astro/agendaSpeakers7.cxg0ET2D.png","/ethBoliviaWebsite/_astro/google-play.ISTMcpLO.png","/ethBoliviaWebsite/_astro/agendaSpeakers8.KRP_3YyD.png","/ethBoliviaWebsite/_astro/agendaSpeakers9.PYAKusKU.png","/ethBoliviaWebsite/_astro/default.BkhVp2mh.png","/ethBoliviaWebsite/_astro/hero.D0-9_4zY.png","/ethBoliviaWebsite/_astro/hero2.CiAuxIbJ.png","/ethBoliviaWebsite/_astro/heroNosotros.BEfs1uur.png","/ethBoliviaWebsite/_astro/heroScz.BlOkb2jx.png","/ethBoliviaWebsite/_astro/photo4eth2023.Ctk3PUYm.jpg","/ethBoliviaWebsite/_astro/sponsor1.B3E0F2ez.png","/ethBoliviaWebsite/_astro/impact2.DYpBAqdx.png","/ethBoliviaWebsite/_astro/favicon.DsM5GVUw.ico","/ethBoliviaWebsite/_astro/impact3.DipOE3Pm.png","/ethBoliviaWebsite/_astro/impact4.dCx75f3U.png","/ethBoliviaWebsite/_astro/sponsor2.CJrTGEX5.png","/ethBoliviaWebsite/_astro/sponsor7.LpyIPUPa.png","/ethBoliviaWebsite/_astro/sponsor3.CmsrLmYz.png","/ethBoliviaWebsite/_astro/sponsor8.nvxCCsSN.png","/ethBoliviaWebsite/_astro/sponsor6.EHZyZp-D.png","/ethBoliviaWebsite/_astro/sponsor5.BCm7dCmm.png","/ethBoliviaWebsite/_astro/sponsor4.DETe5Fyd.png","/ethBoliviaWebsite/_astro/sponsor9.BusXkBzL.png","/ethBoliviaWebsite/_astro/apple-touch-icon.B5So9fOP.png","/ethBoliviaWebsite/_astro/inter-cyrillic-ext-wght-normal.DIEz8p5i.woff2","/ethBoliviaWebsite/_astro/inter-cyrillic-wght-normal.BmJJXa8e.woff2","/ethBoliviaWebsite/_astro/inter-greek-ext-wght-normal.D5AYLNiq.woff2","/ethBoliviaWebsite/_astro/inter-greek-wght-normal.DyIDNIyN.woff2","/ethBoliviaWebsite/_astro/favicon.DEJ4Rgxo.svg","/ethBoliviaWebsite/_astro/inter-vietnamese-wght-normal._GQuwPVU.woff2","/ethBoliviaWebsite/_astro/inter-latin-ext-wght-normal.CN1pIXkb.woff2","/ethBoliviaWebsite/_astro/inter-latin-wght-normal.BgVq2Tq4.woff2","/ethBoliviaWebsite/_astro/privacy.C8H-qtQw.css","/ethBoliviaWebsite/_headers","/ethBoliviaWebsite/robots.txt","/ethBoliviaWebsite/decapcms/config.yml","/ethBoliviaWebsite/decapcms/index.html","/ethBoliviaWebsite/locales/en/translation.json","/ethBoliviaWebsite/locales/es/translation.json"],"buildFormat":"directory","checkOrigin":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
