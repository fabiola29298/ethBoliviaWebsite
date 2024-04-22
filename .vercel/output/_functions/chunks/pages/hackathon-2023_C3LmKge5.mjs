import { U as UI, P, t as trimSlash, a as getHomePermalink, b as getAsset, c as getPermalink, d as getBlogPermalink, $ as $$Layout, e as getImage, f as findImage, A as APP_BLOG, B as BLOG_BASE, C as CATEGORY_BASE, T as TAG_BASE, h as cleanSlug, j as POST_PERMALINK_PATTERN } from './404_D5uYgjFE.mjs';
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, h as addAttribute, j as renderComponent, u as unescapeHTML, k as Fragment, n as renderSlot, A as AstroError, o as UnknownContentCollectionError, p as renderUniqueStylesheet, q as renderScriptElement, t as createHeadAndContent } from '../astro_CzUXaSc3.mjs';
import 'kleur/colors';
import i18next, { changeLanguage } from 'i18next';
import { getIconData, iconToSVG } from '@iconify/utils';
import 'clsx';
import { twMerge } from 'tailwind-merge';
import { parseUrl, transformUrl } from 'unpic';
import pLimit from 'p-limit';
import { p as prependForwardSlash } from '../astro/assets-service_sxVkAok9.mjs';


const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$s = createAstro("https://fabiola29298.github.io/");
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "/home/fabi/april2024/ethBoliviaWebsite/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Astro$r = createAstro("https://fabiola29298.github.io/");
const $$Logo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$Logo;
  return renderTemplate`${maybeRenderHead()}<span class="self-center ml-2 rtl:ml-0 rtl:mr-2 text-2xl md:text-xl font-bold text-gray-900 whitespace-nowrap dark:text-white">
Ethereum Bolivia
</span>`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/Logo.astro", void 0);

const $$Astro$q = createAstro("https://fabiola29298.github.io/");
const $$ToggleTheme = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$ToggleTheme;
  const {
    label = "Toggle between Dark and Light mode",
    class: className = "text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center",
    iconClass = "w-6 h-6",
    iconName = "tabler:sun"
  } = Astro2.props;
  return renderTemplate`${!(UI.theme && UI.theme.endsWith(":only")) && renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute(className, "class")}${addAttribute(label, "aria-label")} data-aw-toggle-color-scheme>${renderComponent($$result, "Icon", $$Icon, { "name": iconName, "class": iconClass })}</button>`}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/common/ToggleTheme.astro", void 0);

const $$Astro$p = createAstro("https://fabiola29298.github.io/");
const $$ToggleMenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$ToggleMenu;
  const {
    label = "Toggle Menu",
    class: className = "flex flex-col h-12 w-12 rounded justify-center items-center cursor-pointer group"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(className, "class")}${addAttribute(label, "aria-label")} data-aw-toggle-menu> <span class="sr-only">${label}</span> ${renderSlot($$result, $$slots["default"], renderTemplate` <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:rotate-45 group-[.expanded]:translate-y-2.5"></span> <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:opacity-0"></span> <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:-rotate-45 group-[.expanded]:-translate-y-2.5"></span> `)} </button>`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/common/ToggleMenu.astro", void 0);

const $$Astro$o = createAstro("https://fabiola29298.github.io/");
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "secondary",
    target,
    text = Astro2.slots.render("default"),
    icon = "",
    class: className = "",
    ...rest
  } = Astro2.props;
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    tertiary: "btn btn-tertiary",
    link: "cursor-pointer hover:text-primary"
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(twMerge(variants[variant] || "", className), "class")}${spreadAttributes(target ? { target, rel: "noopener noreferrer" } : {})}${spreadAttributes(rest)}> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })} ${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5 ml-1 -mr-1.5 rtl:mr-1 rtl:-ml-1.5 inline-block" })}`} </a>`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/ui/Button.astro", void 0);

const handleToggleLanguage = ({ pathname }) => P(pathname, i18next.language === "en" ? "es" : "en");

const $$Astro$n = createAstro("https://fabiola29298.github.io/");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Header;
  const pathname = Astro2.url.pathname;
  const {
    id = "header",
    links = [],
    actions = [],
    isSticky = false,
    isDark = false,
    isFullWidth = false,
    showToggleTheme = false,
    showRssFeed = false,
    showLanguage = false,
    position = "center"
  } = Astro2.props;
  const currentPath = `/${trimSlash(new URL(Astro2.url).pathname)}`;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute([
    { sticky: isSticky, relative: !isSticky, dark: isDark },
    "top-0 z-40 flex-none mx-auto w-full border-b border-gray-50/0 transition-[opacity] ease-in-out"
  ], "class:list")}${spreadAttributes(id ? { id } : {})}> <div class="absolute inset-0"></div> <div${addAttribute([
    "relative text-default py-3 px-3 md:px-6 mx-auto w-full md:flex md:justify-between",
    {
      "max-w-7xl": !isFullWidth
    }
  ], "class:list")}> <div${addAttribute([{ "mr-auto rtl:mr-0 rtl:ml-auto": position === "right" }, "flex justify-between"], "class:list")}> <a class="flex items-center"${addAttribute(getHomePermalink(), "href")}> ${renderComponent($$result, "Logo", $$Logo, {})} </a> <div class="flex items-center md:hidden"> ${renderComponent($$result, "ToggleMenu", $$ToggleMenu, {})} </div> </div> <nav class="items-center w-full md:w-auto hidden md:flex text-default overflow-y-auto overflow-x-hidden md:overflow-y-visible md:overflow-x-auto md:mx-5" aria-label="Main navigation"> <ul class="flex flex-col md:flex-row md:self-center w-full md:w-auto text-xl md:text-[0.9375rem] tracking-[0.01rem] font-medium"> ${links.map(({ text, href, links: links2 }) => renderTemplate`<li${addAttribute(links2?.length ? "dropdown" : "", "class")}> ${links2?.length ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <button class="hover:text-link dark:hover:text-white px-4 py-3 flex items-center"> ${text} ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-down", "class": "w-3.5 h-3.5 ml-0.5 rtl:ml-0 rtl:mr-0.5 hidden md:inline" })} </button> <ul class="dropdown-menu md:backdrop-blur-md dark:md:bg-dark rounded md:absolute pl-4 md:pl-0 md:hidden font-medium md:bg-white/90 md:min-w-[200px] drop-shadow-xl"> ${links2.map(({ text: text2, href: href2 }) => renderTemplate`<li> <a${addAttribute([
    "first:rounded-t last:rounded-b md:hover:bg-gray-100 hover:text-link dark:hover:text-white dark:hover:bg-gray-700 py-2 px-5 block whitespace-no-wrap",
    { "aw-link-active": href2 === currentPath }
  ], "class:list")}${addAttribute(href2, "href")}> ${text2} </a> </li>`)} </ul> ` })}` : renderTemplate`<a${addAttribute([
    "hover:text-link dark:hover:text-white px-4 py-3 flex items-centers",
    { "aw-link-active": href === currentPath }
  ], "class:list")}${addAttribute(href, "href")}> ${text} </a>`} </li>`)} </ul> </nav> <div${addAttribute([
    { "ml-auto rtl:ml-0 rtl:mr-auto": position === "left" },
    "hidden md:self-center flex md:flex items-center md:mb-0 fixed w-full md:w-auto md:static justify-end left-0 rtl:left-auto rtl:right-0 bottom-0 p-3 md:p-0"
  ], "class:list")}> <div class="items-center flex justify-between w-full md:w-auto"> <div class="flex"> ${showToggleTheme && renderTemplate`${renderComponent($$result, "ToggleTheme", $$ToggleTheme, { "iconClass": "w-6 h-6 md:w-5 md:h-5 md:inline-block" })}`} ${showRssFeed && renderTemplate`<a class="text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center" aria-label="RSS Feed"${addAttribute(getAsset("/rss.xml"), "href")}> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:rss", "class": "w-5 h-5" })} </a>`} ${showLanguage && renderTemplate`<a${addAttribute(handleToggleLanguage({ pathname }), "href")}> <div class="text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"> <span>${i18next.language.toUpperCase()}</span> </div> </a>`} </div> ${actions?.length ? renderTemplate`<span class="ml-4 rtl:ml-0 rtl:mr-4"> ${actions.map((btnProps) => renderTemplate`${renderComponent($$result, "Button", $$Button, { ...btnProps, "class": "ml-2 py-2.5 px-5.5 md:px-6 font-semibold shadow-none text-sm w-auto" })}`)} </span>` : ""} </div> </div> </div> </header>`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/widgets/Header.astro", void 0);

const $$Astro$m = createAstro("https://fabiola29298.github.io/");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Footer;
  const { socialLinks = [], secondaryLinks = [], links = [], footNote = "", theme = "light" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute([{ dark: theme === "dark" }, "relative border-t border-gray-200 dark:border-slate-800 not-prose"], "class:list")}> <div class="dark:bg-dark absolute inset-0 pointer-events-none" aria-hidden="true"></div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6 dark:text-slate-300"> <div class="grid grid-cols-12 gap-4 gap-y-8 sm:gap-8 py-8 md:py-12"> <div class="col-span-12 lg:col-span-4"> <div class="mb-2"> <a class="inline-block font-bold text-xl"${addAttribute(getHomePermalink(), "href")}>Contact us by ethbolivia@gmail.com</a> </div> <div class="text-sm text-muted"> ${secondaryLinks.map(({ text, href }) => renderTemplate`<a class="text-muted hover:text-gray-700 dark:text-gray-400 hover:underline transition duration-150 ease-in-out mr-2 rtl:mr-0 rtl:ml-2"${addAttribute(href, "href")}>${unescapeHTML(text)}</a>`)} </div> </div> ${links.map(({ title, links: links2 }) => renderTemplate`<div class="col-span-6 md:col-span-3 lg:col-span-2"> <div class="dark:text-gray-300 font-medium mb-2">${title}</div> ${links2 && Array.isArray(links2) && links2.length > 0 && renderTemplate`<ul class="text-sm"> ${links2.map(({ text, href, ariaLabel }) => renderTemplate`<li class="mb-2"> <a class="text-muted hover:text-gray-700 hover:underline dark:text-gray-400 transition duration-150 ease-in-out"${addAttribute(href, "href")}${addAttribute(ariaLabel, "aria-label")}> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })} </a> </li>`)} </ul>`} </div>`)} </div> <div class="md:flex md:items-center md:justify-between py-6 md:py-8"> ${socialLinks?.length ? renderTemplate`<ul class="flex mb-4 md:order-1 -ml-2 md:ml-4 md:mb-0 rtl:ml-0 rtl:-mr-2 rtl:md:ml-0 rtl:md:mr-4"> ${socialLinks.map(({ ariaLabel, href, text, icon }) => renderTemplate`<li> <a class="text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"${addAttribute(ariaLabel, "aria-label")}${addAttribute(href, "href")}> ${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5" })}`} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })} </a> </li>`)} </ul>` : ""} <div class="text-sm mr-4 dark:text-slate-400"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(footNote)}` })} </div> </div> </div> </footer>`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/widgets/Footer.astro", void 0);

const headerData = {
  links: [

        {
          text: 'Home',
          href: getPermalink(),
        },
        {
          text: 'ETH Bolivia 2023',
          href: getPermalink('/hackathon-2023'),
        },
        {
          text: 'ETH Bolivia 2024',
          href: getPermalink('/hackathon-2024'),
        },
        {
          text: 'About us',
          href: getPermalink('/nosotros'),
        },
        {
          text: 'News',
          href: getBlogPermalink(),
        },
  ],
  actions: [{ text: 'Twitter', href: 'https://twitter.com/EthereumBo', target: '_blank' }],
};

const footerData = {

  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/EthereumBo' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/EthereumBo' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/EthereumBo' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },  ],
  footNote: `
      Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://twitter.com/fa_async"> Fa Async </a> and template by onWidget - All rights reserved.
  `,
};

const $$Astro$l = createAstro("https://fabiola29298.github.io/");
const $$PageLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { metadata } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["header"], renderTemplate` ${renderComponent($$result2, "Header", $$Header, { ...headerData, "isSticky": true, "showRssFeed": true, "showLanguage": true, "showToggleTheme": true })} `)} ${maybeRenderHead()}<main> ${renderSlot($$result2, $$slots["default"])} </main> ${renderSlot($$result2, $$slots["footer"], renderTemplate` ${renderComponent($$result2, "Footer", $$Footer, { ...footerData })} `)} ` })}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/layouts/PageLayout.astro", void 0);

const config = {
  // FIXME: Use this when image.width is minor than deviceSizes
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  deviceSizes: [
    640,
    // older and lower-end phones
    750,
    // iPhone 6-8
    828,
    // iPhone XR/11
    960,
    // older horizontal phones
    1080,
    // iPhone 6-8 Plus
    1280,
    // 720p
    1668,
    // Various iPads
    1920,
    // 1080p
    2048,
    // QXGA
    2560,
    // WQXGA
    3200,
    // QHD+
    3840,
    // 4K
    4480,
    // 4.5K
    5120,
    // 5K
    6016
    // 6K
  ],
  formats: ["image/webp"]
};
const computeHeight = (width, aspectRatio) => {
  return Math.floor(width / aspectRatio);
};
const parseAspectRatio = (aspectRatio) => {
  if (typeof aspectRatio === "number")
    return aspectRatio;
  if (typeof aspectRatio === "string") {
    const match = aspectRatio.match(/(\d+)\s*[/:]\s*(\d+)/);
    if (match) {
      const [, num, den] = match.map(Number);
      if (den && !isNaN(num))
        return num / den;
    } else {
      const numericValue = parseFloat(aspectRatio);
      if (!isNaN(numericValue))
        return numericValue;
    }
  }
  return void 0;
};
const getSizes = (width, layout) => {
  if (!width || !layout) {
    return void 0;
  }
  switch (layout) {
    case `constrained`:
      return `(min-width: ${width}px) ${width}px, 100vw`;
    case `fixed`:
      return `${width}px`;
    case `fullWidth`:
      return `100vw`;
    default:
      return void 0;
  }
};
const pixelate = (value) => value || value === 0 ? `${value}px` : void 0;
const getStyle = ({
  width,
  height,
  aspectRatio,
  layout,
  objectFit = "cover",
  objectPosition = "center",
  background
}) => {
  const styleEntries = [
    ["object-fit", objectFit],
    ["object-position", objectPosition]
  ];
  if (background?.startsWith("https:") || background?.startsWith("http:") || background?.startsWith("data:")) {
    styleEntries.push(["background-image", `url(${background})`]);
    styleEntries.push(["background-size", "cover"]);
    styleEntries.push(["background-repeat", "no-repeat"]);
  } else {
    styleEntries.push(["background", background]);
  }
  if (layout === "fixed") {
    styleEntries.push(["width", pixelate(width)]);
    styleEntries.push(["height", pixelate(height)]);
    styleEntries.push(["object-position", "top left"]);
  }
  if (layout === "constrained") {
    styleEntries.push(["max-width", pixelate(width)]);
    styleEntries.push(["max-height", pixelate(height)]);
    styleEntries.push(["aspect-ratio", aspectRatio ? `${aspectRatio}` : void 0]);
    styleEntries.push(["width", "100%"]);
  }
  if (layout === "fullWidth") {
    styleEntries.push(["width", "100%"]);
    styleEntries.push(["aspect-ratio", aspectRatio ? `${aspectRatio}` : void 0]);
    styleEntries.push(["height", pixelate(height)]);
  }
  if (layout === "responsive") {
    styleEntries.push(["width", "100%"]);
    styleEntries.push(["height", "auto"]);
    styleEntries.push(["aspect-ratio", aspectRatio ? `${aspectRatio}` : void 0]);
  }
  if (layout === "contained") {
    styleEntries.push(["max-width", "100%"]);
    styleEntries.push(["max-height", "100%"]);
    styleEntries.push(["object-fit", "contain"]);
    styleEntries.push(["aspect-ratio", aspectRatio ? `${aspectRatio}` : void 0]);
  }
  if (layout === "cover") {
    styleEntries.push(["max-width", "100%"]);
    styleEntries.push(["max-height", "100%"]);
  }
  const styles = Object.fromEntries(styleEntries.filter(([, value]) => value));
  return Object.entries(styles).map(([key, value]) => `${key}: ${value};`).join(" ");
};
const getBreakpoints = ({
  width,
  breakpoints,
  layout
}) => {
  if (layout === "fullWidth" || layout === "cover" || layout === "responsive" || layout === "contained") {
    return breakpoints || config.deviceSizes;
  }
  if (!width) {
    return [];
  }
  const doubleWidth = width * 2;
  if (layout === "fixed") {
    return [width, doubleWidth];
  }
  if (layout === "constrained") {
    return [
      // Always include the image at 1x and 2x the specified width
      width,
      doubleWidth,
      // Filter out any resolutions that are larger than the double-res image
      ...(breakpoints || config.deviceSizes).filter((w) => w < doubleWidth)
    ];
  }
  return [];
};
const astroAsseetsOptimizer = async (image, breakpoints) => {
  if (!image || typeof image === "string") {
    return [];
  }
  return Promise.all(
    breakpoints.map(async (w) => {
      const url = (await getImage({ src: image, width: w })).src;
      return {
        src: url,
        width: w
      };
    })
  );
};
const unpicOptimizer = async (image, breakpoints, width, height) => {
  if (!image || typeof image !== "string") {
    return [];
  }
  const urlParsed = parseUrl(image);
  if (!urlParsed) {
    return [];
  }
  return Promise.all(
    breakpoints.map(async (w) => {
      const url = await transformUrl({
        url: image,
        width: w,
        height: width && height ? computeHeight(w, width / height) : height,
        cdn: urlParsed.cdn
      }) || image;
      return {
        src: String(url),
        width: w
      };
    })
  );
};
async function getImagesOptimized(image, { src: _, width, height, sizes, aspectRatio, widths, layout = "constrained", style = "", ...rest }, transform = () => Promise.resolve([])) {
  if (typeof image !== "string") {
    width ||= Number(image.width) || void 0;
    height ||= typeof width === "number" ? computeHeight(width, image.width / image.height) : void 0;
  }
  width = width && Number(width) || void 0;
  height = height && Number(height) || void 0;
  widths ||= config.deviceSizes;
  sizes ||= getSizes(Number(width) || void 0, layout);
  aspectRatio = parseAspectRatio(aspectRatio);
  if (aspectRatio) {
    if (width) {
      if (height) ; else {
        height = width / aspectRatio;
      }
    } else if (height) {
      width = Number(height * aspectRatio);
    } else if (layout !== "fullWidth") {
      console.error("When aspectRatio is set, either width or height must also be set");
      console.error("Image", image);
    }
  } else if (width && height) {
    aspectRatio = width / height;
  } else if (layout !== "fullWidth") {
    console.error("Either aspectRatio or both width and height must be set");
    console.error("Image", image);
  }
  let breakpoints = getBreakpoints({ width, breakpoints: widths, layout });
  breakpoints = [...new Set(breakpoints)].sort((a, b) => a - b);
  const srcset = (await transform(image, breakpoints, Number(width) || void 0, Number(height) || void 0)).map(({ src, width: width2 }) => `${src} ${width2}w`).join(", ");
  return {
    src: typeof image === "string" ? image : image.src,
    attributes: {
      width,
      height,
      srcset: srcset || void 0,
      sizes,
      style: `${getStyle({
        width,
        height,
        aspectRatio,
        layout
      })}${style ?? ""}`,
      ...rest
    }
  };
}

const $$Astro$k = createAstro("https://fabiola29298.github.io/");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new Error();
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  if (!props.loading) {
    props.loading = "lazy";
  }
  if (!props.decoding) {
    props.decoding = "async";
  }
  const _image = await findImage(props.src);
  let image = void 0;
  if (_image !== null && typeof _image === "object") {
    image = await getImagesOptimized(_image, props, astroAsseetsOptimizer);
  } else if (typeof _image === "string" && (_image.startsWith("http://") || _image.startsWith("https://"))) {
    image = await getImagesOptimized(_image, props, unpicOptimizer);
  } else if (_image) {
    image = await getImagesOptimized(_image, props);
  }
  return renderTemplate`${!image ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {})}` : renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(image.attributes)}>`}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/common/Image.astro", void 0);

const $$Astro$j = createAstro("https://fabiola29298.github.io/");
const $$Hero2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Hero2;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    content = await Astro2.slots.render("content"),
    actions = await Astro2.slots.render("actions"),
    image = await Astro2.slots.render("image")
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative md:-mt-[76px] not-prose"> <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6"> <div class="pt-0 md:pt-[76px] pointer-events-none"></div> <div class="py-12 md:py-20 lg:py-0 lg:flex lg:items-center lg:h-screen lg:gap-8"> <div class="basis-1/2 text-center lg:text-left pb-10 md:pb-16 mx-auto"> ${tagline && renderTemplate`<p class="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase">${unescapeHTML(tagline)}</p>`} ${title && renderTemplate`<h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">${unescapeHTML(title)}</h1>`} <div class="max-w-3xl mx-auto lg:max-w-none"> ${subtitle && renderTemplate`<p class="text-xl text-muted mb-6 dark:text-slate-300">${unescapeHTML(subtitle)}</p>`} ${actions && renderTemplate`<div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start lg:m-0 lg:max-w-7xl"> ${Array.isArray(actions) ? actions.map((action) => renderTemplate`<div class="flex w-full sm:w-auto"> ${renderComponent($$result, "Button", $$Button, { ...action || {}, "class": "w-full sm:mb-0" })} </div>`) : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(actions)}` })}`} </div>`} </div> ${content && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}`} </div> <div class="basis-1/2"> ${image && renderTemplate`<div class="relative m-auto max-w-5xl"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "mx-auto rounded-md w-full", "widths": [400, 768, 1024, 2040], "sizes": "(max-width: 767px) 400px, (max-width: 1023px) 768px, (max-width: 2039px) 1024px, 2040px", "loading": "eager", "width": 600, "height": 600, ...image })}`} </div>`} </div> </div> </div> </section>`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/widgets/Hero2.astro", void 0);

const $$Astro$i = createAstro("https://fabiola29298.github.io/");
const $$Background = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Background;
  const { isDark = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["absolute inset-0", { "bg-dark dark:bg-transparent": isDark }], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/ui/Background.astro", void 0);

const $$Astro$h = createAstro("https://fabiola29298.github.io/");
const $$WidgetWrapper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$WidgetWrapper;
  const { id, isDark = false, containerClass = "", bg, as = "section" } = Astro2.props;
  const WrapperTag = as;
  return renderTemplate`${renderComponent($$result, "WrapperTag", WrapperTag, { "class": "relative not-prose scroll-mt-[72px]", ...id ? { id } : {} }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true"> ${renderSlot($$result2, $$slots["bg"], renderTemplate` ${bg ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(bg)}` })}` : renderTemplate`${renderComponent($$result2, "Background", $$Background, { "isDark": isDark })}`} `)} </div> <div${addAttribute([
    twMerge("relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default", containerClass),
    { dark: isDark }
  ], "class:list")}> ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/ui/WidgetWrapper.astro", void 0);

const $$Astro$g = createAstro("https://fabiola29298.github.io/");
const $$Headline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Headline;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    classes = {}
  } = Astro2.props;
  const {
    container: containerClass = "max-w-3xl",
    title: titleClass = "text-3xl md:text-4xl ",
    subtitle: subtitleClass = "text-xl"
  } = classes;
  return renderTemplate`${(title || subtitle || tagline) && renderTemplate`${maybeRenderHead()}<div${addAttribute(twMerge("mb-8 md:mx-auto md:mb-12 text-center", containerClass), "class")}>${tagline && renderTemplate`<p class="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase">${unescapeHTML(tagline)}</p>`}${title && renderTemplate`<h2${addAttribute(twMerge(
    "font-bold leading-tighter tracking-tighter font-heading text-heading text-3xl",
    titleClass
  ), "class")}>${unescapeHTML(title)}</h2>`}${subtitle && renderTemplate`<p${addAttribute(twMerge("mt-4 text-muted", subtitleClass), "class")}>${unescapeHTML(subtitle)}</p>`}</div>`}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/ui/Headline.astro", void 0);

const $$Astro$f = createAstro("https://fabiola29298.github.io/");
const $$Steps2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Steps2;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    callToAction = await Astro2.slots.render("callToAction"),
    items = [],
    isReversed = false,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(`flex flex-col gap-8 md:gap-12 md:flex-row ${isReversed ? "md:flex-row-reverse" : ""}`, "class")}> <div${addAttribute(`w-full lg:w-1/2 gap-8 md:gap-12 ${isReversed ? "lg:ml-16 md:ml-8 ml-0" : "lg:mr-16 md:mr-8 mr-0"}`, "class")}> ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "text-center md:text-left rtl:md:text-right mb-4 md:mb-8",
    title: "mb-4 text-3xl lg:text-4xl font-bold font-heading",
    subtitle: "mb-8 text-xl text-muted dark:text-slate-400"
    // ...((classes?.headline as {}) ?? {}),
  } })} <div class="w-full text-center md:text-left rtl:md:text-right"> ${typeof callToAction === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(callToAction)}` })}` : callToAction && callToAction.text && callToAction.href && renderTemplate`${renderComponent($$result2, "Button", $$Button, { "variant": "primary", ...callToAction, "class": "mb-12 w-auto" })}`} </div> </div> <div class="w-full lg:w-1/2 px-0"> <ul class="space-y-10"> ${items && items.length ? items.map(({ title: title2, description, icon }, index) => renderTemplate`<li class="flex md:-mx-4"> <div class="pr-4 sm:pl-4 rtl:pr-0 rtl:pl-4 rtl:sm:pl-0 rtl:sm:pr-4"> <span class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold rounded-full bg-blue-100 text-primary"> ${icon ? renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": "w-6 h-6 icon-bold" })}` : index + 1} </span> </div> <div class="pl-4 rtl:pl-0 rtl:pr-4"> <h3 class="mb-4 text-xl font-semibold font-heading">${unescapeHTML(title2)}</h3> <p class="text-muted dark:text-gray-400">${unescapeHTML(description)}</p> </div> </li>`) : ""} </ul> </div> </div> ` })}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/widgets/Steps2.astro", void 0);

const $$Astro$e = createAstro("https://fabiola29298.github.io/");
const $$ItemGrid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$ItemGrid;
  const { items = [], columns, defaultIcon = "", classes = {} } = Astro2.props;
  const {
    container: containerClass = "",
    panel: panelClass = "",
    title: titleClass = "",
    description: descriptionClass = "",
    icon: defaultIconClass = "text-primary",
    action: actionClass = ""
  } = classes;
  return renderTemplate`${items && renderTemplate`${maybeRenderHead()}<div${addAttribute(twMerge(
    `grid mx-auto gap-8 md:gap-y-12 ${columns === 4 ? "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2" : columns === 3 ? "lg:grid-cols-3 sm:grid-cols-2" : columns === 2 ? "sm:grid-cols-2 " : ""}`,
    containerClass
  ), "class")}>${items.map(({ title, description, icon, callToAction, classes: itemClasses = {} }) => renderTemplate`<div><div${addAttribute(twMerge("flex flex-row max-w-md", panelClass, itemClasses?.panel), "class")}><div class="flex justify-center">${(icon || defaultIcon) && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon || defaultIcon, "class": twMerge("w-7 h-7 mr-2 rtl:mr-0 rtl:ml-2", defaultIconClass, itemClasses?.icon) })}`}</div><div class="mt-0.5">${title && renderTemplate`<h3${addAttribute(twMerge("text-xl font-bold", titleClass, itemClasses?.title), "class")}>${title}</h3>`}${description && renderTemplate`<p${addAttribute(twMerge(`${title ? "mt-3" : ""} text-muted`, descriptionClass, itemClasses?.description), "class")}>${unescapeHTML(description)}</p>`}${callToAction && renderTemplate`<div${addAttribute(twMerge(
    `${title || description ? "mt-3" : ""}`,
    actionClass,
    itemClasses?.actionClass
  ), "class")}>${renderComponent($$result, "Button", $$Button, { "variant": "link", ...callToAction })}${renderComponent($$result, "Button", $$Button, { "variant": "primary", ...callToAction, "class": "mb-12 w-auto" })}</div>`}</div></div></div>`)}</div>`}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/ui/ItemGrid.astro", void 0);

const $$Astro$d = createAstro("https://fabiola29298.github.io/");
const $$Content = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Content;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    content = await Astro2.slots.render("content"),
    callToAction,
    items = [],
    columns,
    image = await Astro2.slots.render("image"),
    isReversed = false,
    isAfterContent = false,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${isAfterContent ? "pt-0 md:pt-0 lg:pt-0" : ""} ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "max-w-xl sm:mx-auto lg:max-w-2xl",
    title: "text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading",
    subtitle: "max-w-3xl mx-auto sm:text-center text-xl text-muted dark:text-slate-400"
  } })} ${maybeRenderHead()}<div class="mx-auto max-w-7xl p-4 md:px-8"> <div${addAttribute(`md:flex ${isReversed ? "md:flex-row-reverse" : ""} md:gap-16`, "class")}> <div class="md:basis-1/2 self-center"> ${content && renderTemplate`<div class="mb-12 text-lg dark:text-slate-400">${unescapeHTML(content)}</div>`} ${callToAction && renderTemplate`<div class="mt-[-40px] mb-8 text-primary"> ${renderComponent($$result2, "Button", $$Button, { "variant": "link", ...callToAction })} </div>`} ${renderComponent($$result2, "ItemGrid", $$ItemGrid, { "items": items, "columns": columns, "defaultIcon": "tabler:check", "classes": {
    container: `gap-y-4 md:gap-y-8`,
    panel: "max-w-none",
    title: "text-lg font-medium leading-6 dark:text-white ml-2 rtl:ml-0 rtl:mr-2",
    description: "text-muted dark:text-slate-400 ml-2 rtl:ml-0 rtl:mr-2",
    icon: "flex h-7 w-7 items-center justify-center rounded-full bg-green-600 dark:bg-green-700 text-gray-50 p-1",
    action: "text-lg font-medium leading-6 dark:text-white ml-2 rtl:ml-0 rtl:mr-2"
  } })} </div> <div aria-hidden="true" class="mt-10 md:mt-0 md:basis-1/2"> ${image && renderTemplate`<div class="relative m-auto max-w-4xl"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "mx-auto w-full rounded-lg bg-gray-500 shadow-lg", "width": 500, "height": 500, "widths": [400, 768], "sizes": "(max-width: 768px) 100vw, 432px", "layout": "responsive", ...image })}`} </div>`} </div> </div> </div> ` })}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/widgets/Content.astro", void 0);

const $$Astro$c = createAstro("https://fabiola29298.github.io/");
const $$ItemGrid2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$ItemGrid2;
  const {
    items = [],
    columns,
    defaultIcon = "",
    classes = {}
  } = Astro2.props;
  const {
    container: containerClass = "",
    // container: containerClass = "sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    panel: panelClass = "",
    title: titleClass = "",
    description: descriptionClass = "",
    icon: defaultIconClass = "text-primary"
  } = classes;
  return renderTemplate`${items && renderTemplate`${maybeRenderHead()}<div${addAttribute(twMerge(
    `grid gap-8 gap-x-12 sm:gap-y-8 ${columns === 4 ? "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2" : columns === 3 ? "lg:grid-cols-3 sm:grid-cols-2" : columns === 2 ? "sm:grid-cols-2 " : ""}`,
    containerClass
  ), "class")}>${items.map(
    ({
      title,
      description,
      icon,
      callToAction,
      classes: itemClasses = {}
    }) => renderTemplate`<div${addAttribute(twMerge(
      "relative flex flex-col",
      panelClass,
      itemClasses?.panel
    ), "class")}>${(icon || defaultIcon) && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon || defaultIcon, "class": twMerge(
      "mb-2 w-10 h-10",
      defaultIconClass,
      itemClasses?.icon
    ) })}`}<div${addAttribute(twMerge(
      "text-xl font-bold",
      titleClass,
      itemClasses?.title
    ), "class")}>${title}</div>${description && renderTemplate`<p${addAttribute(twMerge(
      "text-muted mt-2",
      descriptionClass,
      itemClasses?.description
    ), "class")}>${unescapeHTML(description)}</p>`}${callToAction && renderTemplate`<div class="mt-2">${renderComponent($$result, "Button", $$Button, { ...callToAction })}</div>`}</div>`
  )}</div>`}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/ui/ItemGrid2.astro", void 0);

const $$Astro$b = createAstro("https://fabiola29298.github.io/");
const $$Features2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Features2;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    items = [],
    columns = 3,
    defaultIcon,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": classes?.headline })} ${renderComponent($$result2, "ItemGrid2", $$ItemGrid2, { "items": items, "columns": columns, "defaultIcon": defaultIcon, "classes": {
    container: "gap-4 md:gap-6",
    panel: "rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur border border-[#ffffff29] bg-white dark:bg-slate-900 p-6",
    // panel:
    //   "text-center bg-page items-center md:text-left rtl:md:text-right md:items-start p-6 p-6 rounded-md shadow-xl dark:shadow-none dark:border dark:border-slate-800",
    icon: "w-12 h-12 mb-6 text-primary",
    ...classes?.items ?? {}
  } })} ` })}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/widgets/Features2.astro", void 0);

const $$Astro$a = createAstro("https://fabiola29298.github.io/");
const $$AgendaGrid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$AgendaGrid;
  const {
    items = [],
    columns,
    defaultIcon = "",
    classes = {}
  } = Astro2.props;
  const {
    container: containerClass = "",
    // container: containerClass = "sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    panel: panelClass = "",
    title: titleClass = "",
    description: descriptionClass = "",
    icon: defaultIconClass = "text-primary"
  } = classes;
  return renderTemplate`${items && renderTemplate`${maybeRenderHead()}<div${addAttribute(twMerge(
    `grid gap-8 gap-x-12 sm:gap-y-8 ${columns === 4 ? "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2" : columns === 3 ? "lg:grid-cols-3 sm:grid-cols-2" : columns === 2 ? "sm:grid-cols-2 " : ""}`,
    containerClass
  ), "class")}>${items.map(
    ({
      title,
      description,
      icon,
      image,
      callToAction,
      classes: itemClasses = {}
    }) => renderTemplate`<div${addAttribute(twMerge(
      "relative flex flex-row",
      panelClass,
      itemClasses?.panel
    ), "class")}><div class="text-xl font-bold">${image && renderTemplate`<div class=" just h-20 w-20 rounded-xl border border-slate-200 dark:border-slate-600">${typeof image === "string" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "h-10 w-10  rounded-xl border border-slate-200 dark:border-slate-600 min-w-full min-h-full", "width": 100, "widths": [400, 768], "layout": "fixed", ...image })}`}</div>`}</div><div class="px-4"><div${addAttribute(twMerge(
      "text-xl font-bold",
      titleClass,
      itemClasses?.title
    ), "class")}>${title}</div>${description && renderTemplate`<p${addAttribute(twMerge(
      " mt-2",
      descriptionClass,
      itemClasses?.description
    ), "class")}>${unescapeHTML(description)}</p>`}${icon && renderTemplate`<p${addAttribute(twMerge(
      "text-muted  mt-2",
      descriptionClass,
      itemClasses?.description
    ), "class")}>${unescapeHTML(icon)}</p>`}</div></div>`
  )}</div>`}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/ui/AgendaGrid.astro", void 0);

const $$Astro$9 = createAstro("https://fabiola29298.github.io/");
const $$Agenda = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Agenda;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    items = [],
    columns = 3,
    defaultIcon,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": classes?.headline })} ${renderComponent($$result2, "AgendaGrid", $$AgendaGrid, { "items": items, "columns": columns, "defaultIcon": defaultIcon, "classes": {
    container: "gap-4 md:gap-6",
    panel: "rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur border border-[#ffffff29] bg-white dark:bg-slate-900 p-6",
    // panel:
    //   "text-center bg-page items-center md:text-left rtl:md:text-right md:items-start p-6 p-6 rounded-md shadow-xl dark:shadow-none dark:border dark:border-slate-800",
    icon: "w-12 h-12 mb-6 text-primary",
    ...classes?.items ?? {}
  } })} ` })}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/widgets/Agenda.astro", void 0);

const $$Astro$8 = createAstro("https://fabiola29298.github.io/");
const $$Stats = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Stats;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    stats = [],
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${maybeRenderHead()}<div class="flex flex-wrap justify-center -m-4 text-center"> ${stats && stats.map(({ amount, title: title2, icon }) => renderTemplate`<div class="p-4 md:w-1/4 sm:w-1/2 w-full min-w-[220px] text-center md:border-r md:last:border-none dark:md:border-slate-500"> ${icon && renderTemplate`<div class="flex items-center justify-center mx-auto mb-4 text-primary"> ${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": "w-10 h-10" })} </div>`} ${amount && renderTemplate`<div class="font-heading text-primary text-[2.6rem] font-bold dark:text-white lg:text-5xl xl:text-6xl"> ${amount} </div>`} ${title2 && renderTemplate`<div class="text-sm font-medium uppercase tracking-widest text-gray-800 dark:text-slate-400 lg:text-base"> ${title2} </div>`} </div>`)} </div> ` })}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/widgets/Stats.astro", void 0);

const $$Astro$7 = createAstro("https://fabiola29298.github.io/");
const $$FAQs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$FAQs;
  const {
    title = "",
    subtitle = "",
    tagline = "",
    items = [],
    columns = 2,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${renderComponent($$result2, "ItemGrid", $$ItemGrid, { "items": items, "columns": columns, "defaultIcon": "tabler:chevron-right", "classes": {
    container: `${columns === 1 ? "max-w-4xl" : ""} gap-y-8 md:gap-y-12`,
    panel: "max-w-none",
    icon: "flex-shrink-0 mt-1 w-6 h-6 text-primary"
  } })} ` })}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/widgets/FAQs.astro", void 0);

const $$Astro$6 = createAstro("https://fabiola29298.github.io/");
const $$GridItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$GridItem;
  const { post } = Astro2.props;
  const image = await findImage(post.image);
  return renderTemplate`${maybeRenderHead()}<article class="mb-6 transition"> <div class="relative md:h-64 bg-gray-400 dark:bg-slate-700 rounded shadow-lg mb-6"> ${image && renderTemplate`<a${addAttribute(getPermalink(post.permalink, "post"), "href")}> ${renderComponent($$result, "Image", $$Image, { "src": image, "class": "w-full md:h-full rounded shadow-lg bg-gray-400 dark:bg-slate-700", "widths": [400, 900], "width": 400, "sizes": "(max-width: 900px) 400px, 900px", "alt": post.title, "aspectRatio": "16:9", "layout": "cover", "loading": "lazy", "decoding": "async" })} </a>`} </div> <h3 class="mb-2 text-xl font-bold leading-tight sm:text-2xl font-heading"> ${!APP_BLOG?.post?.isEnabled ? post.title : renderTemplate`<a${addAttribute(getPermalink(post.permalink, "post"), "href")} class="hover:text-primary dark:hover:text-blue-700  transition ease-in duration-200"> ${post.title} </a>`} </h3> <p class="text-muted dark:text-slate-400 text-lg">${post.excerpt}</p> </article>`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/blog/GridItem.astro", void 0);

const $$Astro$5 = createAstro("https://fabiola29298.github.io/");
const $$Grid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Grid;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid gap-6 row-gap-5 md:grid-cols-2 lg:grid-cols-4 -mb-6"> ${posts.map((post) => renderTemplate`${renderComponent($$result, "Item", $$GridItem, { "post": post })}`)} </div>`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/blog/Grid.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/ethBoliviaWebsite", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://fabiola29298.github.io/", "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/post/communitiy-hour-3.mdx": () => import('../communitiy-hour-3_ra3a4NoX.mjs'),"/src/content/post/curso-solidity-2023.mdx": () => import('../curso-solidity-2023_BzJc5k1h.mjs'),"/src/content/post/dos-equipos-bolivianos.mdx": () => import('../dos-equipos-bolivianos_CxMvBLTv.mjs'),"/src/content/post/entrevista-eth-argentina.md": () => import('../entrevista-eth-argentina_WNE6P9pg.mjs'),"/src/content/post/metricas-eth-kipu.md": () => import('../metricas-eth-kipu_CaFk4MTj.mjs'),"/src/content/post/por-primera-vez-en-tarija.mdx": () => import('../por-primera-vez-en-tarija_B0L3Z64V.mjs'),"/src/content/post/proyecto-ley-de-criptoactivos.md": () => import('../proyecto-ley-de-criptoactivos_jAK9v1eE.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"post":{"type":"content","entries":{"communitiy-hour-3":"/src/content/post/communitiy-hour-3.mdx","curso-solidity-2023":"/src/content/post/curso-solidity-2023.mdx","dos-equipos-bolivianos":"/src/content/post/dos-equipos-bolivianos.mdx","entrevista-eth-argentina":"/src/content/post/entrevista-eth-argentina.md","metricas-eth-kipu":"/src/content/post/metricas-eth-kipu.md","por-primera-vez-en-tarija":"/src/content/post/por-primera-vez-en-tarija.mdx","proyecto-ley-de-criptoactivos":"/src/content/post/proyecto-ley-de-criptoactivos.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/post/communitiy-hour-3.mdx": () => import('../communitiy-hour-3_coaSZQjk.mjs'),"/src/content/post/curso-solidity-2023.mdx": () => import('../curso-solidity-2023_dnJrfKpv.mjs'),"/src/content/post/dos-equipos-bolivianos.mdx": () => import('../dos-equipos-bolivianos_DCnTY8uI.mjs'),"/src/content/post/entrevista-eth-argentina.md": () => import('../entrevista-eth-argentina_D6Q6Htrp.mjs'),"/src/content/post/metricas-eth-kipu.md": () => import('../metricas-eth-kipu_CNDZZZed.mjs'),"/src/content/post/por-primera-vez-en-tarija.mdx": () => import('../por-primera-vez-en-tarija_B4wxAly5.mjs'),"/src/content/post/proyecto-ley-de-criptoactivos.md": () => import('../proyecto-ley-de-criptoactivos_BK4kqFxT.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const generatePermalink = async ({
  id,
  slug,
  publishDate,
  category
}) => {
  const year = String(publishDate.getFullYear()).padStart(4, "0");
  const month = String(publishDate.getMonth() + 1).padStart(2, "0");
  const day = String(publishDate.getDate()).padStart(2, "0");
  const hour = String(publishDate.getHours()).padStart(2, "0");
  const minute = String(publishDate.getMinutes()).padStart(2, "0");
  const second = String(publishDate.getSeconds()).padStart(2, "0");
  const permalink = POST_PERMALINK_PATTERN.replace("%slug%", slug).replace("%id%", id).replace("%category%", category || "").replace("%year%", year).replace("%month%", month).replace("%day%", day).replace("%hour%", hour).replace("%minute%", minute).replace("%second%", second);
  return permalink.split("/").map((el) => trimSlash(el)).filter((el) => !!el).join("/");
};
const getNormalizedPost = async (post) => {
  const { id, slug: rawSlug = "", data } = post;
  const { Content, remarkPluginFrontmatter } = await post.render();
  const {
    publishDate: rawPublishDate = /* @__PURE__ */ new Date(),
    updateDate: rawUpdateDate,
    title,
    excerpt,
    image,
    tags: rawTags = [],
    category: rawCategory,
    author,
    draft = false,
    metadata = {}
  } = data;
  const slug = cleanSlug(rawSlug);
  const publishDate = new Date(rawPublishDate);
  const updateDate = rawUpdateDate ? new Date(rawUpdateDate) : void 0;
  const category = rawCategory ? cleanSlug(rawCategory) : void 0;
  const tags = rawTags.map((tag) => cleanSlug(tag));
  return {
    id,
    slug,
    permalink: await generatePermalink({ id, slug, publishDate, category }),
    publishDate,
    updateDate,
    title,
    excerpt,
    image,
    category,
    tags,
    author,
    draft,
    metadata,
    Content,
    // or 'content' in case you consume from API
    readingTime: remarkPluginFrontmatter?.readingTime
  };
};
const load = async function() {
  const posts = await getCollection("post");
  const normalizedPosts = posts.map(async (post) => await getNormalizedPost(post));
  const results = (await Promise.all(normalizedPosts)).sort((a, b) => b.publishDate.valueOf() - a.publishDate.valueOf()).filter((post) => !post.draft);
  return results;
};
let _posts;
const isBlogEnabled = APP_BLOG.isEnabled;
const isBlogListRouteEnabled = APP_BLOG.list.isEnabled;
const isBlogPostRouteEnabled = APP_BLOG.post.isEnabled;
const isBlogCategoryRouteEnabled = APP_BLOG.category.isEnabled;
const isBlogTagRouteEnabled = APP_BLOG.tag.isEnabled;
const blogListRobots = APP_BLOG.list.robots;
const blogPostRobots = APP_BLOG.post.robots;
const blogCategoryRobots = APP_BLOG.category.robots;
const blogTagRobots = APP_BLOG.tag.robots;
const blogPostsPerPage = APP_BLOG?.postsPerPage;
const fetchPosts = async () => {
  if (!_posts) {
    _posts = await load();
  }
  return _posts;
};
const findLatestPosts = async ({ count }) => {
  const _count = count || 4;
  const posts = await fetchPosts();
  return posts ? posts.slice(0, _count) : [];
};
const getStaticPathsBlogList = async ({ paginate }) => {
  if (!isBlogEnabled || !isBlogListRouteEnabled)
    return [];
  return paginate(await fetchPosts(), {
    params: { blog: BLOG_BASE || void 0 },
    pageSize: blogPostsPerPage
  });
};
const getStaticPathsBlogPost = async () => {
  if (!isBlogEnabled || !isBlogPostRouteEnabled)
    return [];
  return (await fetchPosts()).flatMap((post) => ({
    params: {
      blog: post.permalink
    },
    props: { post }
  }));
};
const getStaticPathsBlogCategory = async ({ paginate }) => {
  if (!isBlogEnabled || !isBlogCategoryRouteEnabled)
    return [];
  const posts = await fetchPosts();
  const categories = /* @__PURE__ */ new Set();
  posts.map((post) => {
    typeof post.category === "string" && categories.add(post.category.toLowerCase());
  });
  return Array.from(categories).flatMap(
    (category) => paginate(
      posts.filter((post) => typeof post.category === "string" && category === post.category.toLowerCase()),
      {
        params: { category, blog: CATEGORY_BASE || void 0 },
        pageSize: blogPostsPerPage,
        props: { category }
      }
    )
  );
};
const getStaticPathsBlogTag = async ({ paginate }) => {
  if (!isBlogEnabled || !isBlogTagRouteEnabled)
    return [];
  const posts = await fetchPosts();
  const tags = /* @__PURE__ */ new Set();
  posts.map((post) => {
    Array.isArray(post.tags) && post.tags.map((tag) => tags.add(tag.toLowerCase()));
  });
  return Array.from(tags).flatMap(
    (tag) => paginate(
      posts.filter((post) => Array.isArray(post.tags) && post.tags.find((elem) => elem.toLowerCase() === tag)),
      {
        params: { tag, blog: TAG_BASE || void 0 },
        pageSize: blogPostsPerPage,
        props: { tag }
      }
    )
  );
};

const $$Astro$4 = createAstro("https://fabiola29298.github.io/");
const $$BlogLatestPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BlogLatestPosts;
  const {
    title = await Astro2.slots.render("title"),
    linkText = " See all",
    linkUrl = getBlogPermalink(),
    information = await Astro2.slots.render("information"),
    count = 4,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  const posts = APP_BLOG.isEnabled ? await findLatestPosts({ count }) : [];
  return renderTemplate`${APP_BLOG.isEnabled ? renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": classes?.container, "bg": bg }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col lg:justify-between lg:flex-row mb-8">${title && renderTemplate`<div class="md:max-w-sm"><h2 class="text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none group font-heading mb-2">${unescapeHTML(title)}</h2>${APP_BLOG.list.isEnabled && linkText && linkUrl && renderTemplate`${renderComponent($$result2, "Button", $$Button, { "variant": "link", "href": linkUrl }, { "default": ($$result3) => renderTemplate`${linkText}` })}`}</div>`}${information && renderTemplate`<p class="text-muted dark:text-slate-400 lg:text-sm lg:max-w-md">${unescapeHTML(information)}</p>`}</div>${renderComponent($$result2, "Grid", $$Grid, { "posts": posts })}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {})}`}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/widgets/BlogLatestPosts.astro", void 0);

const $$Astro$3 = createAstro("https://fabiola29298.github.io/");
const $$Speakers = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Speakers;
  const {
    title = "",
    subtitle = "",
    tagline = "",
    speakers = [],
    callToAction,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${maybeRenderHead()}<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"> ${speakers && speakers.map(({ title: title2, speaker, name, job, image }) => renderTemplate`<div class="flex justify-center     "> <div class="flex-auto  p-4 md:p-4 rounded-md shadow-xl dark:shadow-none dark:border dark:border-slate-600"> ${title2 && renderTemplate`<h2 class="text-lg font-medium leading-6 pb-4">${title2}</h2>`} <div class="  "> ${image && renderTemplate`<div class=" just h-32 w-32 rounded-xl border border-slate-200 dark:border-slate-600"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "h-10 w-10  rounded-xl border border-slate-200 dark:border-slate-600 min-w-full min-h-full", "width": 100, "widths": [400, 768], "layout": "fixed", ...image })}`} </div>`} <div class="grow ml-0 rtl:ml-0 rtl:mr-3 py-2 justify-center"> ${name && renderTemplate`<p class="text-base font-semibold">${name}</p>`} ${job && renderTemplate`<p class="text-s text-muted">${job}</p>`} </div> </div> </div> </div>`)} </div> ${callToAction && renderTemplate`<div class="flex justify-center mx-auto w-fit mt-8 md:mt-12 font-medium"> ${renderComponent($$result2, "Button", $$Button, { ...callToAction })} </div>`}` })}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/widgets/Speakers.astro", void 0);

const $$Astro$2 = createAstro("https://fabiola29298.github.io/");
const $$Brands = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Brands;
  const {
    title = "",
    subtitle = "",
    tagline = "",
    icons = [],
    images = [],
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${maybeRenderHead()}<div class="flex flex-wrap justify-center gap-x-6 sm:gap-x-12 lg:gap-x-24"> ${icons && icons.map((icon) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": "py-3 lg:py-5 w-12 h-auto mx-auto sm:mx-0 text-gray-500" })}`)} ${images && images.map(
    (image) => image.src && renderTemplate`<div class="flex justify-center col-span-1 my-2 lg:my-4 py-2 px-6 rounded-md dark:bg-gray-100"> <img${addAttribute(image.src, "src")}${addAttribute(image.alt || "", "alt")} class="max-h-24"> </div>`
  )} </div> ` })}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/widgets/Brands.astro", void 0);

const $$Astro$1 = createAstro("https://fabiola29298.github.io/");
const $$Hackathon2023$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hackathon2023$1;
  changeLanguage("es");
  const metadata = {
    title: "ETH Bolivia 2023"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero2", $$Hero2, { "image": {
    src: "~/assets/images/photo4eth2023.jpg",
    alt: "Ethereum Bolivia Hero Image"
  } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<span class="hidden sm:inline">
Primera Hackathon de Blockchain en La Paz, Bolivia.
</span>` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Ethereum Bolivia 2023<br> ` })}` })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "\xBFQu\xE9 es Ethereum Bolivia 2023?", "subtitle": "Es un evento que re\xFAne a expertos en el ecosistema Ethereum, programadores y entusiastas en La Paz. Un espacio para fomentar la educaci\xF3n, la colaboraci\xF3n, el intercambio de conocimiento y el desarrollo, si est\xE1s en tus primeros pasos en el mundo de Blockchain o que seas un experimentado entusiasta, aqu\xED encontrar\xE1s un lugar para compartir tus ideas. " }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "Stats", $$Stats, { "title": "Impacto del evento", "subtitle": "Los siguientes indicadores reflejan los resultados de eventos organizados en universidades de La Paz en Septiembre de 2023.", "stats": [
    { title: "Asistentes", amount: " +200" },
    { title: "Expertos", amount: "28" },
    { title: "Comunidades aliadas & patrocinadores", amount: "10" },
    { title: "Horas de charlas t\xE9cnicas y no t\xE9cnicas", amount: "+45" },
    { title: "Hackers", amount: "64" },
    { title: "Proyectos", amount: "9" },
    { title: "Premios", amount: "+1000$" }
  ] })}  ${renderComponent($$result2, "Brands", $$Brands, { "title": "Patrocinadores", "subtitle": "", "icons": [], "images": [
    {
      src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/sponsor1.png",
      alt: "Ecosystem Support Program"
    },
    {
      src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/sponsor2.png",
      alt: "1inch Network"
    },
    {
      src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/sponsor3.png",
      alt: "MC4"
    }
  ] })} ${renderComponent($$result2, "Brands", $$Brands, { "title": "Comunidades aliadas y colaboradores ", "subtitle": "", "icons": [], "images": [
    {
      src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/sponsor4.png",
      alt: "Universidad Catolica Boliviana (UCB)"
    },
    {
      src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/sponsor5.png",
      alt: "Mujeres Tics"
    },
    {
      src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/sponsor6.png",
      alt: "esLibertad Bolivia"
    },
    {
      src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/sponsor9.png",
      alt: "Cripto Curiosas"
    },
    {
      src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/sponsor7.png",
      alt: "Taikai"
    },
    {
      src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/sponsor8.png",
      alt: "Talent Protocol"
    }
  ] })}  ${renderComponent($$result2, "Content", $$Content, { "title": "Casos de \xE9xito", "subtitle": "Descubre como Ethereum Bolivia 2023 impact\xF3 en los participantes.", "isReversed": true, "items": [
    {
      title: "Ethereum Foundation como patrocinador principal",
      description: "La participaci\xF3n de The Ecosystem Support Program (ESP) de la Ethereum Foundation como patrocinador contribuy\xF3 en proporcionar recursos, credibilidad, formaci\xF3n y promoci\xF3n, y al fortalecer la comunidad local de Ethereum. Contribuy\xF3 impulsando la innovaci\xF3n y fomentando la adopci\xF3n de tecnolog\xEDa de Blockchain en la regi\xF3n."
    },
    {
      title: "Beca para participar en ETH Lisboa",
      description: "La hackathon tuvo un profundo impacto en Manuel, miembro de la comunidad. Tras el evento, gan\xF3 una valiosa beca de Talent Protocol como comunidad aliada, brind\xE1ndole la oportunidad de participar en la hackathon en Lisboa en noviembre. Este logro fortalecer\xE1 su red de contactos, ampliar\xE1 su conocimiento y le ogrecer\xE1 una plataforma global para desarrollar su carrera en tecnolog\xEDa."
    }
  ], "image": {
    src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/impact2.png",
    alt: "Startup Image"
  } })}  ${renderComponent($$result2, "Content", $$Content, { "isAfterContent": true, "items": [
    {
      title: "TAIKAI como aliado de la Hackathon",
      description: "TAIKAI, como plataforma de Hackathon, gener\xF3 un impacto significativo al conectar el ecosistema Web3 con el evento. Facilit\xF3 la colaboraci\xF3n, foment\xF3 la innovaci\xF3n y brind\xF3 a los participantes acceso a ideas frescas, acelerando el desarrollo de soluciones y promoviendo la creatividad en el \xE1mbito tecnol\xF3gico."
    },
    {
      title: "Talleres en 8 diferentes universidades e institutos educativos",
      description: "La organizaci\xF3n de talleres t\xE9cnicos y no t\xE9cnicos sobre blockchain en cinco Universidades y tres Institutos T\xE9cnicos y Tecnolog\xEDcos tuvo un impacto fundamental. Organizamos 14 charlas introductorias de Blockchain, 15 charlas especializadas y 8 talleres pr\xE1cticos Proporcion\xF3 una s\xF3lida base de conocimiento sobre blockchain a estudiantes de diversas disciplinas, foment\xF3 la conciencia y el inter\xE9s en la tecnolog\xEDa, y cre\xF3 oportunidades de formaci\xF3n y colaboraci\xF3n en un campo emergente."
    }
  ], "image": {
    src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/impact3.png",
    alt: "Startup Image"
  } })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "isAfterContent": true, "items": [
    {
      title: "9 proyectos finalistas",
      description: "La presencia de 9 proyectos finalistas en la primera hackathon de Blockchain en Bolivia"
    },
    {
      title: "Visibilizaci\xF3n de proyectos ReFi con Fork DAO",
      description: "La iniciativa de Fork DAO para visibilizar los proyectos finalistas de la hackathon en relaci\xF3n a ReFi permiti\xF3 destacar el potencial de las soluciones en Bolivia. "
    }
  ], "image": {
    src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/impact4.png",
    alt: "Startup Image"
  } })}  ${renderComponent($$result2, "Speakers", $$Speakers, { "title": "Speakers y mentores destacados", ",": true, "subtitle": "Agradecemos a los speakers y mentores que llegaron de diferentes ciudades y paises para participar.", ",": true, "speakers": [
    {
      speaker: ``,
      name: "Nico Gallardo",
      job: "Co-fundador Troops y el videojuego Wild Friends",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers12.png",
        alt: "Nico Gallardo Image"
      }
    },
    {
      speaker: ``,
      name: "Juan David Reyes",
      job: "Co-fundador de ETH Colombia",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers18.png",
        alt: "Juan David Reyes Image"
      }
    },
    {
      speaker: ``,
      name: "Alexia Celeste",
      job: "Co-fundador de Cripto Curiosas",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers9.png",
        alt: "Alexia Celeste Image"
      }
    },
    {
      speaker: ``,
      name: "Remberto Gonzales",
      job: "Blockchain Developer y Docente en USFX Chuquisaca",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers26.png",
        alt: " Image"
      }
    },
    {
      speaker: ``,
      name: "Ana Bel\xE9n",
      job: "Community Manager de Arbitrum Foundation",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers24.png",
        alt: " Image"
      }
    },
    {
      speaker: ``,
      name: "Pedro Rey @CriptoPepe",
      job: "Marketing Manager en OKX.com. Exbinance. Fundador de Crypto Plata",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers28.png",
        alt: " Image"
      }
    },
    {
      speaker: ``,
      name: "Francisco Actis",
      job: "Contribuidor en 1inch Network",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers25.png",
        alt: " Image"
      }
    }
  ] })}  ${renderComponent($$result2, "Agenda", $$Agenda, { "title": "Agenda & Speakers", "subtitle": "", "tagline": " ", "items": [
    {
      title: "Oportunidades laborares en Blockchain",
      description: "<b> Cecilia Contreras </b> <br> Apicultora y Community Manager de Wild Friends",
      icon: " 06 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers1.png",
        alt: "Image"
      }
    },
    {
      title: "Introducci\xF3n al Blockchain ",
      description: "<b> Neddy Choque </b> <br> Ingeniero certificado por EC-Council como Ethical Hacker",
      icon: " 06 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers2.png",
        alt: "Image"
      }
    },
    {
      title: "Stablecoins como elementos para contrarrestar la inflaci\xF3n",
      description: "<b> Mauricio Garita </b> <br> Investigador de la Universidad del Istmo en Guatemala   ",
      icon: " 25 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers3.png",
        alt: "Image"
      }
    },
    {
      title: "R\xE9gimen jur\xEDdico del contrato inteligente",
      description: "<b> F. Fabian Espinoza </b> <br> Representante regional de pol\xEDticas p\xFAblicas en el Regulatory Institute, B\xE9lgica.",
      icon: " 25 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers4.png",
        alt: "Image"
      }
    },
    {
      title: "Blockchain y legaltech: El futuro del\xA0derecho",
      description: "<b> Natalia Dalenz</b> <br> Abogada, especialista en derecho de las nuevas tecnolog\xEDas. ",
      icon: " 25 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers5.png",
        alt: "Image"
      }
    },
    {
      title: "DEMO de Finanzas Descentralizadas",
      description: "<b> Edwin Fernandez</b> <br> Founder de Definomics Lab, Especialista en DeFi  y Embajador de Metapool, Core Team de ETH Lima.",
      icon: " 26 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers6.png",
        alt: "Image"
      }
    },
    {
      title: "C\xF3mo crear tu comunidad en blockchain, Aprende sobre airdrops y DeFi",
      description: "<b> Luis Alejandro Tintaya </b> <br> Creador y propietario del canal de YouTube Alex Cripto. ",
      icon: " 26 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers7.png",
        alt: "Image"
      }
    },
    {
      title: "NFTs y c\xF3mo crear comunidad y transmitir un mensaje internacional ",
      description: "<b> Sazkiabella</b> <br> Creadora de la popular colecci\xF3n FreakyGirls (NFTs en OpenSea).",
      icon: " 26 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers8.png",
        alt: "Image"
      }
    },
    {
      title: "Comunidades & Networking",
      description: "<b> Alexia Celeste</b> <br>Co Founder & Community Builder de Criptocuriosas ",
      icon: " 27 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers9.png",
        alt: "Image"
      }
    },
    {
      title: "Herramientas de gesti\xF3n para construir una DAO",
      description: "<b> Briguit Reinaldo</b> </b> <br> Fundadora de Women Biz, la comunidad m\xE1s grande de mujeres en tecnolog\xEDa web3 del Per\xFA.",
      icon: " 27 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers10.png",
        alt: "Image"
      }
    },
    {
      title: "Alcanza tus metas con Talent Protocol.",
      description: "<b> Juan Pablo Hernandez  </b> <br> System engenieer & Web3 Degen. Growth at Talent Protocol.",
      icon: " 27 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers11.png",
        alt: "Image"
      }
    },
    {
      title: "C\xF3mo pitchear tu proyecto - charla especializadas",
      description: "<b> Nico Gallardo  </b> <br> Co-fundador de  Troops y el videojuego Wild Friends, W3b Lab, Ethereum Bolivia. ",
      icon: " 28 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers12.png",
        alt: "Image"
      }
    },
    {
      title: "Trazabilidad en la Producci\xF3n",
      description: "<b> Remberto Gonzales   </b> <br> Blockchain developer y Docente en USFX Chuquisaca ",
      icon: " 28 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers26.png",
        alt: "Image"
      }
    },
    {
      title: "Pagos internacionales y tokenizacion de bienes inmuebles con Blockchain en Bolivia",
      description: "<b> Huascar Miranda </b> <br> Gerente empresa Blockchain Consultora.",
      icon: " 28 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers14.png",
        alt: "Image"
      }
    },
    {
      title: "Tokenizaci\xF3n de activos",
      description: "<b> Jorge Cerda </b> <br> Consultor Asociado Euromonitor International ",
      icon: " 28 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers27.png",
        alt: "Image"
      }
    },
    {
      title: "Arquitectura de Aplicaciones Descentralizadas en Ethereum",
      description: "<b> Fabiola Acarapi </b> <br> Co Founder de Ethereum Bolivia ",
      icon: " 29 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers15.png",
        alt: "Image"
      }
    },
    {
      title: "Construyendo Experiencias de Usuario Confiables: Integrando UX y Desarrollo",
      description: "<b> Maria Emilia Aguilar  </b> <br>Ingeniera de Sistemas Computaciones ",
      icon: " 29 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers16.png",
        alt: "Image"
      }
    },
    {
      title: "Blockchain como Herramienta de Inclusi\xF3n en Latinoam\xE9rica: La Visi\xF3n de Proof of Integrity",
      description: "<b> Tom Grau Baena </b> <br>Director Ejecutivo de Proof of Integrity, ",
      icon: " 29 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers17.png",
        alt: "Image"
      }
    },
    {
      title: "Introducci\xF3n al Desarrollo de dApps con Scaffold-eth 2",
      description: "<b> Juan David Reyes </b> <br>Co Founder de Ethereum Colombia. Divulgador de Scaffold-ETH2 ",
      icon: " 29 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers18.png",
        alt: "Image"
      }
    },
    {
      title: "Explorando la Criptograf\xEDa en Blockchain: Wallets y Seguridad",
      description: "<b> Ayrton Paredes </b> <br>Frontend Developer en Think and Dev. ",
      icon: " 29 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers19.png",
        alt: "Image"
      }
    },
    {
      title: "UX Writing en Web3 ",
      description: "<b>  Josefina Ansch\xFCtz </b> <br> UX Writer | Mentora UX | Docente UX Writing ",
      icon: " 29 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers20.png",
        alt: "Image"
      }
    },
    {
      title: "Integraci\xF3n de Or\xE1culos en Contratos Inteligentes",
      description: "<b> Freddy Chambi </b> <br> Web 3 Developer, miembro de Ethereum Bolivia y Eth Kipu",
      icon: " 30 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers21.png",
        alt: "Image"
      }
    },
    {
      title: "\xBFC\xF3mo integrar un contrato inteligente con frontend y no morir en el intento?",
      description: "<b> Alejandro Soto Diaz </b> <br> Desarrollar de Software ",
      icon: " 30 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers22.png",
        alt: "Image"
      }
    },
    {
      title: "Testing con Solidity",
      description: "<b> Hu\xE1scar Miranda Mart\xEDnez </b> <br>Gerente empresa Blockchain Consultora ",
      icon: " 30 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers23.png",
        alt: "Image"
      }
    },
    {
      title: "Los caminos en Web3, c\xF3mo comenzar ",
      description: "<b> Ana Bel\xE9n / AnaTech </b> <br>  Community Manager de Arbitrum Foundation. Co Founder de H.E.R. LATAM",
      icon: " 30 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers24.png",
        alt: "Image"
      }
    },
    {
      title: "Introducci\xF3n a Dev Portal y 1inch APIs",
      description: "<b> Francisco Actis </b> <br> Contribuidor en 1inch Network",
      icon: " 30 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers25.png",
        alt: "Image"
      }
    },
    {
      title: "\xBFC\xF3mo ser builer en Web3? Revisemos algunos proyectos",
      description: "<b> Nico Gallardo </b> <br> Co-fundador de  Troops y el videojuego Wild Friends, W3b Lab, Ethereum Bolivia.",
      icon: " 30 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers12.png",
        alt: "Image"
      }
    }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "FAQs", $$FAQs, { "title": "Preguntas Frecuentes", "items": [
    {
      title: "\xBFQu\xE9 modalidad tiene la Hackathon?",
      description: "Tiene dos modalidades. La Hackathon comenzar\xE1 en modalidad virtual por 8 d\xEDas y despu\xE9s ser\xE1 modalidad presencial en la Universidad Cat\xF3lica Boliviana.",
      icon: "tabler:chevrons-right"
    },
    {
      title: "\xBFQui\xE9n puede asistir a este evento?",
      description: `Los eventos de Ethereum y web3 se centran en invitar a constructores (desarrolladores, dise\xF1adores, artistas) que quieran crear o contribuir a proyectos durante la Hackathon.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "Soy nuevo en Ethereum. \xBFA\xFAn puedo participar?",
      description: "\xA1Absolutamente! Nuestros eventos est\xE1n abiertos tanto a principiantes como a veteranos del mundo web3. Este evento en particular se adaptar\xE1 a los asistentes que tienen experiencia con las tecnolog\xEDas Web2 y est\xE1n interesados \u200B\u200Ben construir en web3 por primera vez.",
      icon: "tabler:chevrons-right"
    },
    {
      title: "\xBFQu\xE9 puedo construir durante el evento?",
      description: `Se le permite trabajar en cualquier idea que le entusiasme, siempre que se desarrolle sobre Ethereum. Esto significa que el evento tiene un final abierto y no es necesario que usted resuelva ning\xFAn problema en particular.`,
      icon: "tabler:chevrons-right"
    }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "Steps2", $$Steps2, { "title": "Cont\xE1ctanos", "subtitle": "\xBFTienes alguna duda?, Estamos ac\xE1 para ayudarte.", "items": [
    {
      title: "Correo electr\xF3nico",
      description: "ethbolivia@gmail.com",
      icon: "tabler:mail"
    },
    {
      title: "S\xEDguenos",
      description: "@EthereumBo",
      icon: "tabler:brand-x"
    }
  ] })}  ${renderComponent($$result2, "BlogLatestPosts", $$BlogLatestPosts, { "id": "blog", "title": "Novedades", "information": `Explora en nuestra colecci\xF3n de art\xEDculos, gu\xEDas y eventos que realizaremos en diferentes ciudades en Bolivia.` }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })} ` })}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/pages/es/hackathon-2023.astro", void 0);

const $$file$1 = "/home/fabi/april2024/ethBoliviaWebsite/src/pages/es/hackathon-2023.astro";
const $$url$1 = "/ethBoliviaWebsite/es/hackathon-2023";

const hackathon2023$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Hackathon2023$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://fabiola29298.github.io/");
const $$Hackathon2023 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hackathon2023;
  changeLanguage("en");
  const metadata = {
    title: "ETH Bolivia 2023",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero2", $$Hero2, { "image": {
    src: "~/assets/images/photo4eth2023.jpg",
    alt: "Ethereum Bolivia Hero Image"
  } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<span class="hidden sm:inline">
First Blockchain Hackathon in La Paz, Bolivia.
</span>` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Ethereum Bolivia 2023<br> ` })}` })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "What is Ethereum Bolivia 2023?", "subtitle": "It is an event that brings together experts in the Ethereum ecosystem, programmers and enthusiasts in La Paz. A space to foster education, collaboration, knowledge sharing and development, whether you are in your first steps in the Blockchain world or you are an experienced enthusiast, here you will find a place to share your ideas. " }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "Stats", $$Stats, { "title": "Impact of the event", "subtitle": "The following indicators reflect the results of events organised at universities in La Paz in September 2023.", "stats": [
    { title: "Attendants", amount: " +200" },
    { title: "Experts", amount: "28" },
    { title: "Community partners & sponsors", amount: "10" },
    { title: "Hours of technical and non-technical talks", amount: "+45" },
    { title: "Hackers", amount: "64" },
    { title: "Projects", amount: "9" },
    { title: "Prizes", amount: "+1000$" }
  ] })}  ${renderComponent($$result2, "Brands", $$Brands, { "title": "Sponsors", "subtitle": "", "icons": [], "images": [
    {
      src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/sponsor1.png",
      alt: "Ecosystem Support Program"
    },
    {
      src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/sponsor2.png",
      alt: "1inch Network"
    },
    {
      src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/sponsor3.png",
      alt: "MC4"
    }
  ] })} ${renderComponent($$result2, "Brands", $$Brands, { "title": "Community partners ", "subtitle": "", "icons": [], "images": [
    {
      src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/sponsor4.png",
      alt: "Universidad Catolica Boliviana (UCB)"
    },
    {
      src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/sponsor5.png",
      alt: "Mujeres Tics"
    },
    {
      src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/sponsor6.png",
      alt: "esLibertad Bolivia"
    },
    {
      src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/sponsor9.png",
      alt: "Cripto Curiosas"
    },
    {
      src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/sponsor7.png",
      alt: "Taikai"
    },
    {
      src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/sponsor8.png",
      alt: "Talent Protocol"
    }
  ] })}  ${renderComponent($$result2, "Content", $$Content, { "title": "Successful cases", "subtitle": "Find out how Ethereum Bolivia 2023 impacted on participants.", "isReversed": true, "items": [
    {
      title: "Ethereum Foundation as main sponsor",
      description: "The participation of The Ecosystem Support Program (ESP) of the Ethereum Foundation as a sponsor contributed in providing resources, credibility, training and advocacy, and in strengthening the local Ethereum community. It contributed by driving innovation and fostering the adoption of Blockchain technology in the region."
    },
    {
      title: "Scholarship to participate in ETH Lisbon",
      description: "The hackathon had a profound impact on community member Manuel. Following the event, he won a valuable scholarship from community partner Talent Protocol, giving him the opportunity to participate in the hackathon in Lisbon in November. This achievement will strengthen his network, broaden his knowledge and provide him with a global platform to develop his career in technology."
    }
  ], "image": {
    src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/impact2.png",
    alt: "Startup Image"
  } })}  ${renderComponent($$result2, "Content", $$Content, { "isAfterContent": true, "items": [
    {
      title: "TAIKAI as a Hackathon partner",
      description: "TAIKAI, as a Hackathon platform, made a significant impact by connecting the Web3 ecosystem to the event. It facilitated collaboration, fostered innovation and gave participants access to fresh ideas, accelerating the development of solutions and promoting creativity in technology."
    },
    {
      title: "Workshops in 8 different universities and educational institutes",
      description: "We organised technical and non-technical workshops on blockchain at five Universities and three Technical and Technological Institutes had a fundamental impact. In addition to 14 introductory Blockchain talks, 15 specialised talks and 8 hands-on workshops, it provided a solid foundation of blockchain knowledge to students from diverse disciplines, fostered awareness and interest in the technology, and created opportunities for training and collaboration in an emerging field."
    }
  ], "image": {
    src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/impact3.png",
    alt: "Startup Image"
  } })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "isAfterContent": true, "items": [
    {
      title: "9 finalist projects",
      description: "  9 finalists in Bolivia`s first Blockchain hackathon"
    },
    {
      title: "Visibilisation of ReFi projects with Fork DAO",
      description: "Fork DAO`s initiative to showcase the finalist projects of the hackathon in relation to ReFi highlighted the potential of the solutions in Bolivia."
    }
  ], "image": {
    src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/impact4.png",
    alt: "Startup Image"
  } })}  ${renderComponent($$result2, "Speakers", $$Speakers, { "title": "Featured speakers and mentors", ",": true, "subtitle": "We appreciate the speakers and mentors who came from different cities and countries to participate.", ",": true, "speakers": [
    {
      speaker: ``,
      name: "Nico Gallardo",
      job: "Co-founder Troops and the Wild Friends video game",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers12.png",
        alt: "Nico Gallardo Image"
      }
    },
    {
      speaker: ``,
      name: "Juan David Reyes",
      job: "Co-founder of ETH Colombia",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers18.png",
        alt: "Juan David Reyes Image"
      }
    },
    {
      speaker: ``,
      name: "Alexia Celeste",
      job: "Co-founder of Cripto Curiosas",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers9.png",
        alt: "Alexia Celeste Image"
      }
    },
    {
      speaker: ``,
      name: "Remberto Gonzales",
      job: "Blockchain Developer and Teacher at USFX Chuquisaca",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers26.png",
        alt: " Image"
      }
    },
    {
      speaker: ``,
      name: "Ana Belen",
      job: "Community Manager de Fundacion Arbitrum",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers24.png",
        alt: " Image"
      }
    },
    {
      speaker: ``,
      name: "Pedro Rey @CriptoPepe",
      job: "Marketing Manager at OKX.com. Exbinance. Founder of Crypto Plata",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers28.png",
        alt: " Image"
      }
    },
    {
      speaker: ``,
      name: "Francisco Actis",
      job: "Contributor to 1inch Network",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers25.png",
        alt: " Image"
      }
    }
  ] })}  ${renderComponent($$result2, "Agenda", $$Agenda, { "title": "Agenda & Speakers", "subtitle": "", "tagline": " ", "items": [
    {
      title: "Oportunidades laborares en Blockchain",
      description: "<b> Cecilia Contreras </b> <br> Apicultora y Community Manager de Wild Friends",
      icon: " 06 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers1.png",
        alt: "Image"
      }
    },
    {
      title: "Introduccion al Blockchain ",
      description: "<b> Neddy Choque </b> <br> Ingeniero certificado por EC-Council como Ethical Hacker",
      icon: " 06 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers2.png",
        alt: "Image"
      }
    },
    {
      title: "Stablecoins como elementos para contrarrestar la inflacion",
      description: "<b> Mauricio Garita </b> <br> Investigador de la Universidad del Istmo en Guatemala ",
      icon: " 25 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers3.png",
        alt: "Image"
      }
    },
    {
      title: "Regimen jur\xEDdico del contrato inteligente",
      description: "<b> F. Fabian Espinoza </b> <br> Representante regional de pol\xEDticas p\xFAblicas en el Regulatory Institute, Belgica.",
      icon: " 25 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers4.png",
        alt: "Image"
      }
    },
    {
      title: "Blockchain y legaltech: El futuro del\xA0derecho",
      description: "<b> Natalia Dalenz</b> <br> Abogada, especialista en derecho de las nuevas tecnolog\xEDas. ",
      icon: " 25 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers5.png",
        alt: "Image"
      }
    },
    {
      title: "DEMO de Finanzas Descentralizadas",
      description: "<b> Edwin Fernandez</b> <br> Founder de Definomics Lab, Especialista en DeFi  y Embajador de Metapool, Core Team de ETH Lima.",
      icon: " 26 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers6.png",
        alt: "Image"
      }
    },
    {
      title: "Como crear tu comunidad en blockchain, Aprende sobre airdrops y DeFi",
      description: "<b> Luis Alejandro Tintaya </b> <br> Creador y propietario del canal de YouTube Alex Cripto. ",
      icon: " 26 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers7.png",
        alt: "Image"
      }
    },
    {
      title: "NFTs y como crear comunidad y transmitir un mensaje internacional ",
      description: "<b> Sazkiabella</b> <br> Creadora de la popular coleccion FreakyGirls (NFTs en OpenSea).",
      icon: " 26 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers8.png",
        alt: "Image"
      }
    },
    {
      title: "Comunidades & Networking",
      description: "<b> Alexia Celeste</b> <br>Co Founder & Community Builder de Criptocuriosas ",
      icon: " 27 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers9.png",
        alt: "Image"
      }
    },
    {
      title: "Herramientas de gestion para construir una DAO",
      description: "<b> Briguit Reinaldo</b> </b> <br> Fundadora de Women Biz, la comunidad mas grande de mujeres en tecnolog\xEDa web3 del Per\xFA.",
      icon: " 27 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers10.png",
        alt: "Image"
      }
    },
    {
      title: "Alcanza tus metas con Talent Protocol.",
      description: "<b> Juan Pablo Hernandez  </b> <br> System engenieer & Web3 Degen. Growth at Talent Protocol.",
      icon: " 27 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers11.png",
        alt: "Image"
      }
    },
    {
      title: "Como pitchear tu proyecto - charla especializadas",
      description: "<b> Nico Gallardo  </b> <br> Co-fundador de  Troops y el videojuego Wild Friends, W3b Lab, Ethereum Bolivia. ",
      icon: " 28 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers12.png",
        alt: "Image"
      }
    },
    {
      title: "Trazabilidad en la Produccion",
      description: "<b> Remberto Gonzales   </b> <br> Blockchain developer y Docente en USFX Chuquisaca ",
      icon: " 28 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers26.png",
        alt: "Image"
      }
    },
    {
      title: "Pagos internacionales y tokenizacion de bienes inmuebles con Blockchain en Bolivia",
      description: "<b> Huascar Miranda </b> <br> Gerente empresa Blockchain Consultora.",
      icon: " 28 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers14.png",
        alt: "Image"
      }
    },
    {
      title: "Tokenizacion de activos",
      description: "<b> Jorge Cerda </b> <br> Consultor Asociado Euromonitor International ",
      icon: " 28 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers27.png",
        alt: "Image"
      }
    },
    {
      title: "Arquitectura de Aplicaciones Descentralizadas en Ethereum",
      description: "<b> Fabiola Acarapi </b> <br> Co Founder de Ethereum Bolivia ",
      icon: " 29 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers15.png",
        alt: "Image"
      }
    },
    {
      title: "Construyendo Experiencias de Usuario Confiables: Integrando UX y Desarrollo",
      description: "<b> Maria Emilia Aguilar  </b> <br>Ingeniera de Sistemas Computaciones ",
      icon: " 29 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers16.png",
        alt: "Image"
      }
    },
    {
      title: "Blockchain como Herramienta de Inclusion en Latinoamerica: La Vision de Proof of Integrity",
      description: "<b> Tom Grau Baena </b> <br>Director Ejecutivo de Proof of Integrity, ",
      icon: " 29 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers17.png",
        alt: "Image"
      }
    },
    {
      title: "Introduccion al Desarrollo de dApps con Scaffold-eth 2",
      description: "<b> Juan David Reyes </b> <br>Co Founder de Ethereum Colombia. Divulgador de Scaffold-ETH2 ",
      icon: " 29 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers18.png",
        alt: "Image"
      }
    },
    {
      title: "Explorando la Criptograf\xEDa en Blockchain: Wallets y Seguridad",
      description: "<b> Ayrton Paredes </b> <br>Frontend Developer en Think and Dev. ",
      icon: " 29 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers19.png",
        alt: "Image"
      }
    },
    {
      title: "UX Writing en Web3 ",
      description: "<b>  Josefina Ansch\xFCtz </b> <br> UX Writer | Mentora UX | Docente UX Writing ",
      icon: " 29 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers20.png",
        alt: "Image"
      }
    },
    {
      title: "Integracion de Oraculos en Contratos Inteligentes",
      description: "<b> Freddy Chambi </b> <br> Web 3 Developer, miembro de Ethereum Bolivia y Eth Kipu",
      icon: " 30 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers21.png",
        alt: "Image"
      }
    },
    {
      title: "Como integrar un contrato inteligente con frontend y no morir en el intento?",
      description: "<b> Alejandro Soto Diaz </b> <br> Desarrollar de Software ",
      icon: " 30 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers22.png",
        alt: "Image"
      }
    },
    {
      title: "Testing con Solidity",
      description: "<b> Huascar Miranda Mart\xEDnez </b> <br>Gerente empresa Blockchain Consultora ",
      icon: " 30 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers23.png",
        alt: "Image"
      }
    },
    {
      title: "Los caminos en Web3, como comenzar ",
      description: "<b> Ana Belen / AnaTech </b> <br>  Community Manager de Arbitrum Foundation. Co Founder de H.E.R. LATAM",
      icon: " 30 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers24.png",
        alt: "Image"
      }
    },
    {
      title: "Introduccion a Dev Portal y 1inch APIs",
      description: "<b> Francisco Actis </b> <br> Contribuidor en 1inch Network",
      icon: " 30 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers25.png",
        alt: "Image"
      }
    },
    {
      title: "Como ser builer en Web3? Revisemos algunos proyectos",
      description: "<b> Nico Gallardo </b> <br> Co-fundador de  Troops y el videojuego Wild Friends, W3b Lab, Ethereum Bolivia.",
      icon: " 30 de Septiembre, 2023",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers12.png",
        alt: "Image"
      }
    }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "FAQs", $$FAQs, { "title": "Frequently Asked Questions", "items": [
    {
      title: "What is the mode of the Hackathon?",
      description: "It has two modalities. The Hackathon will start in virtual mode for 8 days and then it will be face-to-face mode at the Universidad Catolica Boliviana",
      description: "The Hackathon will start in virtual mode for 8 days and then it will be face-to-face mode at the Universidad Catolica Boliviana",
      icon: "tabler:chevrons-right"
    },
    {
      title: "Who can attend this event?",
      description: `The Ethereum and web3 events are focused on inviting builders (developers, designers, artists) who want to create or contribute to projects during the Hackathon.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "I`m new to Ethereum, can I still participate?",
      description: "Absolutely! Our events are open to both beginners and veterans of the web3 world. This particular event will suit attendees who have experience with Web2 technologies and are interested in building on web3 for the first time.",
      icon: "tabler:chevrons-right"
    },
    {
      title: "What can I build during the event?",
      description: "You are allowed to work on any idea you are excited about, as long as it is developed on Ethereum. This means that the event is open-ended and you don`t need to solve any particular problem",
      icon: "tabler:chevrons-right"
    }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "Steps2", $$Steps2, { "title": "Contact us", "subtitle": "Do you have any questions, we are here to help you.", "items": [
    {
      title: "Email",
      description: "ethbolivia@gmail.com",
      icon: "tabler:mail"
    },
    {
      title: "Follow us",
      description: "@EthereumBo",
      icon: "tabler:brand-x"
    }
  ] })}  ${renderComponent($$result2, "BlogLatestPosts", $$BlogLatestPosts, { "id": "blog", "title": "News", "information": `Explore our collection of articles, guides and events that we will be holding in different cities in Bolivia.` }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })} ` })}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/pages/hackathon-2023.astro", void 0);

const $$file = "/home/fabi/april2024/ethBoliviaWebsite/src/pages/hackathon-2023.astro";
const $$url = "/ethBoliviaWebsite/hackathon-2023";

const hackathon2023 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Hackathon2023,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$WidgetWrapper as $, $$Headline as a, $$Button as b, $$Hero2 as c, $$Steps2 as d, $$PageLayout as e, $$Image as f, $$Icon as g, $$BlogLatestPosts as h, $$ItemGrid as i, $$Agenda as j, fetchPosts as k, getStaticPathsBlogCategory as l, blogCategoryRobots as m, getStaticPathsBlogTag as n, blogTagRobots as o, getStaticPathsBlogList as p, blogListRobots as q, getStaticPathsBlogPost as r, blogPostRobots as s, hackathon2023$1 as t, hackathon2023 as u };