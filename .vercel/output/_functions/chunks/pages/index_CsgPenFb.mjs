import './404_D5uYgjFE.mjs';
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, u as unescapeHTML, j as renderComponent, k as Fragment, h as addAttribute } from '../astro_CzUXaSc3.mjs';
import 'kleur/colors';
import { b as $$Button, f as $$Image, g as $$Icon, $ as $$WidgetWrapper, a as $$Headline, h as $$BlogLatestPosts, e as $$PageLayout } from './hackathon-2023_C3LmKge5.mjs';
import { $ as $$CallToAction } from './hackathon-2024_C9b0gzGa.mjs';
import { changeLanguage, t } from 'i18next';

const $$Astro$4 = createAstro("https://fabiola29298.github.io/");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    id,
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    content = await Astro2.slots.render("content"),
    actions = await Astro2.slots.render("actions"),
    image = await Astro2.slots.render("image")
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative md:-mt-[76px] not-prose"${spreadAttributes(id ? { id } : {})}> <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6"> <div class="pt-0 md:pt-[76px] pointer-events-none"></div> <div class="py-12 md:py-20"> <div class="text-center pb-10 md:pb-16 max-w-5xl mx-auto"> ${tagline && renderTemplate`<p class="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase">${unescapeHTML(tagline)}</p>`} ${title && renderTemplate`<h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">${unescapeHTML(title)}</h1>`} <div class="max-w-3xl mx-auto"> ${subtitle && renderTemplate`<p class="text-xl text-muted mb-6 dark:text-slate-300">${unescapeHTML(subtitle)}</p>`} ${actions && renderTemplate`<div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4"> ${Array.isArray(actions) ? actions.map((action) => renderTemplate`<div class="flex w-full sm:w-auto"> ${renderComponent($$result, "Button", $$Button, { ...action || {}, "class": "w-full sm:mb-0" })} </div>`) : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(actions)}` })}`} </div>`} </div> ${content && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}`} </div> <div> ${image && renderTemplate`<div class="relative m-auto max-w-5xl"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "mx-auto rounded-md w-full", "object-fit": "contain", "widths": [400, 768, 1024, 2040], "sizes": "(max-width: 767px) 400px, (max-width: 1023px) 768px, (max-width: 2039px) 1024px, 2040px", "loading": "eager", "width": 400, "height": 576, ...image })}`} </div>`} </div> </div> </div> </section>`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/widgets/Hero.astro", void 0);

const $$Astro$3 = createAstro("https://fabiola29298.github.io/");
const $$Note = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Note;
  return renderTemplate`${maybeRenderHead()}<section class="bg-blue-50 dark:bg-slate-800 not-prose"> <div class="max-w-6xl mx-auto px-4 sm:px-6 py-4 text-md text-center font-medium"> <span class="font-bold"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:info-square", "class": "w-5 h-5 inline-block align-text-bottom" })} Philosophy:</span> Contributing to the <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://ethereum.foundation/infinitegarden">Infinite Garden </a> to help the Ethereum ecosystem flourish.
</div> </section>`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/widgets/Note.astro", void 0);

const $$Astro$2 = createAstro("https://fabiola29298.github.io/");
const $$CardActivities = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CardActivities;
  const {
    title = "",
    subtitle = "",
    tagline = "",
    prices = [],
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${maybeRenderHead()}<div class="flex items-stretch justify-center"> <div class="grid grid-cols-3 gap-4 dark:text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"> ${prices && prices.map(({ title: title2, subtitle: subtitle2, items, callToAction, hasRibbon = false, ribbonTitle, image }) => renderTemplate`<div class="col-span-3 mx-auto flex w-full sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"> ${title2 && subtitle2 && renderTemplate`<div class="rounded-lg backdrop-blur border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow px-6 py-8 flex w-full max-w-sm flex-col justify-between text-center"> ${hasRibbon && ribbonTitle && renderTemplate`<div class="absolute right-[-5px] 2xl:right-[-8px] rtl:right-auto rtl:left-[-8px] rtl:2xl:left-[-10px] top-[-5px] 2xl:top-[-10px] z-[1] h-[100px] w-[100px] overflow-hidden text-right"> <span class="absolute top-[19px] right-[-21px] rtl:right-auto rtl:left-[-21px] block w-full rotate-45 rtl:-rotate-45 bg-green-700 text-center text-[10px] font-bold uppercase leading-5 text-white shadow-[0_3px_10px_-5px_rgba(0,0,0,0.3)] before:absolute before:left-0 before:top-full before:z-[-1] before:border-[3px] before:border-r-transparent before:border-b-transparent before:border-l-green-800 before:border-t-green-800 before:content-[''] after:absolute after:right-0 after:top-full after:z-[-1] after:border-[3px] after:border-l-transparent after:border-b-transparent after:border-r-green-800 after:border-t-green-800 after:content-['']"> ${ribbonTitle} </span> </div>`} <div class="px-2 py-0"> ${title2 && renderTemplate`<h3 class="text-center text-xl font-semibold uppercase leading-6 tracking-wider mb-2">${title2}</h3>`} ${subtitle2 && renderTemplate`<p class="font-light sm:text-lg text-gray-600 dark:text-slate-400">${subtitle2}</p>`} <div class="flex justify-center h-auto my-8 md:my-10"> ${image && renderTemplate`<div class="h-32 w-32 rounded-xl border border-slate-200 dark:border-slate-600"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "h-10 w-10  rounded-xl border border-slate-200 dark:border-slate-600 min-w-full min-h-full", "width": 100, "widths": [400, 768], "layout": "fixed", ...image })}`} </div>`} </div> ${items && renderTemplate`<ul role="list" class="my-8 md:my-10 space-y-2 text-left"> ${items.map(
    ({ description, icon }) => description && renderTemplate`<li class="mb-1.5 flex items-start space-x-3 leading-7"> <div class="rounded-full bg-primary mt-1"> ${renderComponent($$result2, "Icon", $$Icon, { "name": icon ? icon : "tabler:check", "class": "w-5 h-5 font-bold p-1 text-white" })} </div> <span>${description}</span> </li>`
  )} </ul>`} </div> ${callToAction && renderTemplate`<div${addAttribute(`flex justify-center`, "class")}> ${typeof callToAction === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(callToAction)}` })}` : callToAction && callToAction.href && renderTemplate`${renderComponent($$result2, "Button", $$Button, { ...hasRibbon ? { variant: "primary" } : {}, ...callToAction })}`} </div>`} </div>`} </div>`)} </div> </div> ` })}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/widgets/CardActivities.astro", void 0);

const $$Astro$1 = createAstro("https://fabiola29298.github.io/");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  changeLanguage("es");
  const metadata = {
    title: "ETH Bolivia \u2014 Website de la comunidad.",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "actions": [
    {
      variant: "primary",
      text: "S\xEDguenos en",
      href: "https://twitter.com/EthereumBo",
      target: "_blank",
      icon: "tabler:brand-x"
    },
    {
      variant: "secondary",
      text: "Comunidad en ",
      href: "https://t.me/EthereumBo",
      target: "_blank",
      icon: "tabler:brand-telegram"
    }
  ], "image": { src: "~/assets/images/hero2.png", alt: "Artist: Patrick Atkins" } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`${t("home.title")}${maybeRenderHead()}<span class="hidden sm:inline">
Comunidad de Ethereum en Bolivia.
         Aprendamos, difundamos y construyamos!
</span> ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Ethereum Bolivia
` })}` })}  ${renderComponent($$result2, "Note", $$Note, {})}  ${renderComponent($$result2, "CardActivities", $$CardActivities, { "title": " ", "prices": [
    {
      title: "Ethereum Bolivia 2023",
      subtitle: "La primera hackathon de Blockchain en el pa\xEDs",
      callToAction: {
        text: "Ver m\xE1s",
        href: "https://fabiola29298.github.io/ethBoliviaWebsite/hackathon-2023"
      },
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/photo4eth2023.jpg",
        alt: "Image"
      }
    },
    {
      title: "Ethereum Bolivia 2024",
      subtitle: "Sede: Santa Cruz",
      callToAction: {
        text: "Ver m\xE1s",
        href: "https://fabiola29298.github.io/ethBoliviaWebsite/hackathon-2024"
      },
      hasRibbon: true,
      ribbonTitle: "Pronto",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/heroScz.png",
        alt: "Image"
      }
    },
    {
      title: "\xBFQuienes somos?",
      subtitle: "Conoce al equipo",
      callToAction: {
        text: "Ver m\xE1s",
        href: "https://fabiola29298.github.io/ethBoliviaWebsite/nosotros"
      },
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/heroNosotros.png",
        alt: "Image"
      }
    }
  ] })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "actions": [
    {
      variant: "primary",
      text: "Telegram",
      href: "https://t.me/EthereumBo",
      target: "_blank",
      icon: "tabler:brand-telegram"
    }
  ] }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Organizamos eventos cada mes.<br class="hidden md:inline"> También Twitter Spaces :D
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Participa en nuestra comunidad
` })}` })}  ${renderComponent($$result2, "BlogLatestPosts", $$BlogLatestPosts, { "id": "blog", "title": "Novedades", "information": `Explora en nuestra colecci\xF3n de art\xEDculos, gu\xEDas y eventos que realizaremos en diferentes ciudades en Bolivia.` }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })} ` })}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/pages/es/index.astro", void 0);

const $$file$1 = "/home/fabi/april2024/ethBoliviaWebsite/src/pages/es/index.astro";
const $$url$1 = "/ethBoliviaWebsite/es";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://fabiola29298.github.io/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const metadata = {
    title: "ETH Bolivia - Website de la comunidad.",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "actions": [
    {
      variant: "primary",
      text: "Follow us",
      href: "https://twitter.com/EthereumBo",
      target: "_blank",
      icon: "tabler:brand-x"
    },
    {
      variant: "secondary",
      text: "Community group ",
      href: "https://t.me/EthereumBo",
      target: "_blank",
      icon: "tabler:brand-telegram"
    }
  ], "image": { src: "~/assets/images/hero2.png", alt: "Artist: Patrick Atkins" } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<span class="hidden sm:inline">
Ethereum community in Bolivia.
         Let's learn, spread and build!
</span> ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Ethereum Bolivia
` })}` })}  ${renderComponent($$result2, "Note", $$Note, {})}  ${renderComponent($$result2, "CardActivities", $$CardActivities, { "title": " ", "prices": [
    {
      title: "Ethereum Bolivia 2023",
      subtitle: "First Blockchain hackathon in the country",
      callToAction: {
        text: "See more",
        href: "https://fabiola29298.github.io/ethBoliviaWebsite/hackathon-2023"
      },
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/photo4eth2023.jpg",
        alt: "Image"
      }
    },
    {
      title: "Ethereum Bolivia 2024",
      subtitle: "Location: Santa Cruz",
      callToAction: {
        text: "See more",
        href: "https://fabiola29298.github.io/ethBoliviaWebsite/hackathon-2024"
      },
      hasRibbon: true,
      ribbonTitle: "Soon",
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/heroScz.png",
        alt: "Image"
      }
    },
    {
      title: "Who are we?",
      subtitle: "Meet the team",
      callToAction: {
        text: "See more",
        href: "https://fabiola29298.github.io/ethBoliviaWebsite/nosotros"
      },
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/heroNosotros.png",
        alt: "Image"
      }
    }
  ] })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "actions": [
    {
      variant: "primary",
      text: "Telegram",
      href: "https://t.me/EthereumBo",
      target: "_blank",
      icon: "tabler:brand-telegram"
    }
  ] }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
We organise events every month. <br class="hidden md:inline"> Also Twitter Spaces
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Join our community
` })}` })}  ${renderComponent($$result2, "BlogLatestPosts", $$BlogLatestPosts, { "id": "blog", "title": "News", "information": `Explore our collection of articles, guides and events that we will be holding in different cities in Bolivia.` }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })} ` })}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/pages/index.astro", void 0);

const $$file = "/home/fabi/april2024/ethBoliviaWebsite/src/pages/index.astro";
const $$url = "/ethBoliviaWebsite";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Hero as $, index as a, index$1 as i };
