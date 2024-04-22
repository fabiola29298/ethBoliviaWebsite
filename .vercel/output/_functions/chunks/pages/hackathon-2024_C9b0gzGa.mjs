import './404_D5uYgjFE.mjs';
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead, k as Fragment, u as unescapeHTML } from '../astro_CzUXaSc3.mjs';
import 'kleur/colors';
import { changeLanguage } from 'i18next';
import { $ as $$WidgetWrapper, a as $$Headline, b as $$Button, c as $$Hero2, d as $$Steps2, e as $$PageLayout } from './hackathon-2023_C3LmKge5.mjs';

const $$Astro$2 = createAstro("https://fabiola29298.github.io/");
const $$CallToAction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    actions = await Astro2.slots.render("actions"),
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto text-center p-6 rounded-md shadow-xl dark:shadow-none dark:border dark:border-slate-600"> ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "mb-0 md:mb-0",
    title: "text-4xl md:text-4xl font-bold leading-tighter tracking-tighter mb-4 font-heading",
    subtitle: "text-xl text-muted dark:text-slate-400"
  } })} ${actions && renderTemplate`<div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 mt-6"> ${Array.isArray(actions) ? actions.map((action) => renderTemplate`<div class="flex w-full sm:w-auto"> ${renderComponent($$result2, "Button", $$Button, { ...action || {}, "class": "w-full sm:mb-0" })} </div>`) : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(actions)}` })}`} </div>`} </div> ` })}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/widgets/CallToAction.astro", void 0);

const $$Astro$1 = createAstro("https://fabiola29298.github.io/");
const $$Hackathon2024$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hackathon2024$1;
  changeLanguage("es");
  const metadata = {
    title: "ETH Bolivia 2024"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero2", $$Hero2, { "tagline": "Segunda versi\xF3n", "title": "Ethereum Bolivia 2024", "subtitle": "Santa Cruz ser\xE1 sede en Agosto de 2024.", "actions": [
    { variant: "secondary", text: "versi\xF3n 2023", href: "2023#" }
  ], "image": {
    src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/heroScz.png",
    alt: "Click-through Landing Page Hero Image"
  } })} ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "Muy pronto", "subtitle": "Estamos trabajando y pronto tendremos novedades. Lo anunciaremos en nuestras redes sociales." })} ${renderComponent($$result2, "Steps2", $$Steps2, { "title": "\xBFQuieres ser patrocinador?", "subtitle": "Cont\xE1ctate a ethbolivia@gmail.com ", "items": [
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
  ] })} ` })}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/pages/es/hackathon-2024.astro", void 0);

const $$file$1 = "/home/fabi/april2024/ethBoliviaWebsite/src/pages/es/hackathon-2024.astro";
const $$url$1 = "/ethBoliviaWebsite/es/hackathon-2024";

const hackathon2024$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Hackathon2024$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://fabiola29298.github.io/");
const $$Hackathon2024 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hackathon2024;
  changeLanguage("en");
  const metadata = {
    title: "ETH Bolivia 2024",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero2", $$Hero2, { "tagline": "Second version", "title": "Ethereum Bolivia 2024", "subtitle": "Santa Cruz will host in August 2024", ".": true, "actions": [
    { variant: "secondary", text: "version 2023", href: "2023#" }
  ], "image": {
    src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/heroScz.png",
    alt: "Click-through Landing Page Hero Image"
  } })} ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "Coming soon", "subtitle": "We are working and we will have news soon. We will announce it on our social networks", ".": true })} ${renderComponent($$result2, "Steps2", $$Steps2, { "title": "Do you want to become a sponsor?", "subtitle": "Contact ethbolivia@gmail.com ", "items": [
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
  ] })} ` })}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/pages/hackathon-2024.astro", void 0);

const $$file = "/home/fabi/april2024/ethBoliviaWebsite/src/pages/hackathon-2024.astro";
const $$url = "/ethBoliviaWebsite/hackathon-2024";

const hackathon2024 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Hackathon2024,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$CallToAction as $, hackathon2024 as a, hackathon2024$1 as h };
