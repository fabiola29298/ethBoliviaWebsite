import './404_D5uYgjFE.mjs';
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead, k as Fragment, u as unescapeHTML } from '../astro_CzUXaSc3.mjs';
import 'kleur/colors';
import { changeLanguage } from 'i18next';
import { $ as $$Hero } from './index_CsgPenFb.mjs';
import { $ as $$WidgetWrapper, a as $$Headline, f as $$Image, i as $$ItemGrid, d as $$Steps2, j as $$Agenda, h as $$BlogLatestPosts, e as $$PageLayout } from './hackathon-2023_C3LmKge5.mjs';

const $$Astro$2 = createAstro("https://fabiola29298.github.io/");
const $$Features3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Features3;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    image,
    items = [],
    columns,
    defaultIcon,
    isBeforeContent,
    isAfterContent,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `${isBeforeContent ? "md:pb-8 lg:pb-12" : ""} ${isAfterContent ? "pt-0 md:pt-0 lg:pt-0" : ""} ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": classes?.headline })} ${maybeRenderHead()}<div aria-hidden="true" class="aspect-w-16 aspect-h-7"> ${image && renderTemplate`<div class="w-full h-80 object-cover rounded-xl mx-auto bg-gray-500 shadow-lg"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "w-full h-80 object-cover rounded-xl mx-auto bg-gray-500 shadow-lg", "width": "auto", "height": 320, "widths": [400, 768], "layout": "fullWidth", ...image })}`} </div>`} </div> ${renderComponent($$result2, "ItemGrid", $$ItemGrid, { "items": items, "columns": columns, "defaultIcon": defaultIcon, "classes": {
    container: "mt-12",
    panel: "max-w-full sm:max-w-md",
    title: "text-lg font-semibold",
    description: "mt-0.5",
    icon: "flex-shrink-0 mt-1 text-primary w-6 h-6",
    ...classes?.items ?? {}
  } })} ` })}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/widgets/Features3.astro", void 0);

const $$Astro$1 = createAstro("https://fabiola29298.github.io/");
const $$Nosotros$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Nosotros$1;
  changeLanguage("es");
  const metadata = {
    title: "Quienes Somos"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "Quienes Somos", "image": {
    src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/heroNosotros.png",
    alt: "Comunidad Image"
  } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Somos una vibrante comunidad de apasionadas y curiosas mentes, entusiastas del ecosistema blockchain en Bolivia y toda Latinoamérica.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
¡Bienvenidos/as a Ethereum Bolivia!
` })}` })}  ${renderComponent($$result2, "Features3", $$Features3, { "title": "Sedes", "subtitle": " ", "columns": 2, "isBeforeContent": true, "items": [
    {
      title: "La Paz",
      description: "Comenzamos la comunidad en La Paz en 2021, organizamos eventos mensuales.",
      icon: "tabler:gps"
    },
    {
      title: "Santa Cruz",
      description: "Nuestro primer evento en Santa Cruz fue en 2022 y ahora estamos preparando la Hackathon para 2024.",
      icon: "tabler:gps"
    }
  ] })}  ${renderComponent($$result2, "Steps2", $$Steps2, { "title": "\xBFQuienes Somos?", "subtitle": " ", "items": [
    {
      title: "Misi\xF3n",
      description: "Inspirar y convocar a todos los bolivianos, bolivianas y latinoamericanos a sumarse al movimiento web3 y construir un mejor futuro de la mano de Ethereum."
    },
    {
      title: "Nuestro Espacio",
      description: "Queremos que nuestro espacio sea un punto de encuentro donde se comparten ideas, se fomenta el aprendizaje continuo y se creen relaciones fruct\xEDferas y duraderas."
    },
    {
      title: "Quienes somos",
      description: "Ethereum Bolivia es un grupo de j\xF3venes entusiastas de la Web3 y de la tecnolog\xEDa Blockchain. Buscamos fomentar la investigaci\xF3n e innovaci\xF3n mediante diversas actividades para la comunidad."
    }
  ] })}  ${renderComponent($$result2, "Steps2", $$Steps2, { "title": "Nuestro Impacto", "subtitle": "Adem\xE1s revisa los logros de la primera Hackathon Web3 en el pa\xEDs. ", "isReversed": true, "callToAction": {
    text: "Ethereum Bolivia 2023",
    href: "/2023"
  }, "items": [
    {
      title: "Miembros de ETH Kipu - ETH Latam",
      description: "Somos parte de la red de comunidades latinas de Ethereum.",
      icon: "tabler:globe"
    },
    {
      title: "Generaci\xF3n de Comunidad",
      description: "Nos esforzamos por ser una comunidad orientada en crear la pr\xF3xima generaci\xF3n.",
      icon: "tabler:message-star"
    },
    {
      title: "Educaci\xF3n sobre Web3 y Blockchain",
      description: "buscamos fomentar la educaci\xF3n, la colaboraci\xF3n, el intercambio de conocimiento y el desarrollo, ya sea que est\xE9s dando tus primeros pasos.",
      icon: "tabler:award"
    }
  ] })}  ${renderComponent($$result2, "Agenda", $$Agenda, { "title": "Equipo", "subtitle": "", "tagline": " ", "items": [
    {
      title: "Nico Gallardo",
      description: `Co-Founder / Finanzas Lead <br>
        <a href="https://twitter.com/EthereumBo" class="text-muted hover:underline dark:text-slate-400 font-medium"
        >Follow me! \xBB</a>
        `,
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers12.png",
        alt: "Nico Gallardo Image"
      }
    },
    {
      title: "Fabi Acarapi",
      description: `Co-Founder / Community Lead<br>
        <a href="https://twitter.com/EthereumBo" class="text-muted hover:underline dark:text-slate-400 font-medium"
        >Follow me! \xBB</a>
        `,
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers15.png",
        alt: "Sidney Hansen Image"
      }
    },
    {
      title: "Pedro Rey",
      description: `Co-Founder  <br>
        <a href="https://twitter.com/EthereumBo" class="text-muted hover:underline dark:text-slate-400 font-medium"
        >Follow me! \xBB</a>
        `,
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers28.png",
        alt: "Sidney Hansen Image"
      }
    },
    {
      title: "Cecilia Contreras",
      description: `Content Manager <br>
        <a href="https://twitter.com/EthereumBo" class="text-muted hover:underline dark:text-slate-400 font-medium"
        >Follow me! \xBB</a>
        `,
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers1.png",
        alt: "Sidney Hansen Image"
      }
    },
    {
      title: "Huascar Miranda",
      description: `Technical Mentor <br>
        <a href="https://twitter.com/EthereumBo" class="text-muted hover:underline dark:text-slate-400 font-medium"
        >Follow me! \xBB</a>
        `,
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers14.png",
        alt: "Sidney Hansen Image"
      }
    },
    {
      title: "Alison Berbetty",
      description: `Legal Mentor <br>
        <a href="https://twitter.com/EthereumBo" class="text-muted hover:underline dark:text-slate-400 font-medium"
        >Follow me! \xBB</a>
        `,
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers12.png",
        alt: "Sidney Hansen Image"
      }
    },
    {
      title: "Ayrton Paredes",
      description: `Technical Mentor <br>
        <a href="https://twitter.com/EthereumBo" class="text-muted hover:underline dark:text-slate-400 font-medium"
        >Follow me! \xBB</a>
        `,
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers19.png",
        alt: "Sidney Hansen Image"
      }
    },
    {
      title: "Freddy Chambi",
      description: `Technical Mentor <br>
        <a href="https://twitter.com/EthereumBo" class="text-muted hover:underline dark:text-slate-400 font-medium"
        >Follow me! \xBB</a>
        `,
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers21.png",
        alt: "Sidney Hansen Image"
      }
    },
    {
      title: "Fabian",
      description: `Legal Mentor <br>
        <a href="https://twitter.com/EthereumBo" class="text-muted hover:underline dark:text-slate-400 font-medium"
        >Follow me! \xBB</a>
        `,
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers12.png",
        alt: "Sidney Hansen Image"
      }
    },
    {
      title: "Abidan",
      description: `Technical Mentor <br>
        <a href="https://twitter.com/EthereumBo" class="text-muted hover:underline dark:text-slate-400 font-medium"
        >Follow me! \xBB</a>
        `,
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers12.png",
        alt: "Sidney Hansen Image"
      }
    },
    {
      title: "Manuel Elias ",
      description: `Technical Mentor <br>
        <a href="https://twitter.com/EthereumBo" class="text-muted hover:underline dark:text-slate-400 font-medium"
        >Follow me! \xBB</a>
        `,
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers12.png",
        alt: "Sidney Hansen Image"
      }
    },
    {
      title: "Alexandro",
      description: `Technical Mentor <br>
        <a href="https://twitter.com/EthereumBo" class="text-muted hover:underline dark:text-slate-400 font-medium"
        >Follow me! \xBB</a>
        `,
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers12.png",
        alt: "Sidney Hansen Image"
      }
    }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "Steps2", $$Steps2, { "title": "Cont\xE1ctanos", "subtitle": "\xBFTienes alguna duda?, Estamos ac\xE1 para ayudarte.", "items": [
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
}, "/home/fabi/april2024/ethBoliviaWebsite/src/pages/es/nosotros.astro", void 0);

const $$file$1 = "/home/fabi/april2024/ethBoliviaWebsite/src/pages/es/nosotros.astro";
const $$url$1 = "/ethBoliviaWebsite/es/nosotros";

const nosotros$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Nosotros$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://fabiola29298.github.io/");
const $$Nosotros = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Nosotros;
  changeLanguage("en");
  const metadata = {
    title: "About us",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "About us", "image": {
    src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/heroNosotros.png",
    alt: "Comunidad Image"
  } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
We are a vibrant community of passionate and curious minds, enthusiastic about the blockchain ecosystem in Bolivia and all of Latin America.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Welcome to Ethereum Bolivia!
` })}` })}  ${renderComponent($$result2, "Features3", $$Features3, { "title": "Venues", "subtitle": " ", "columns": 2, "isBeforeContent": true, "items": [
    {
      title: "La Paz",
      description: "We start community in La Paz in 2021, we organize monthly events.",
      icon: "tabler:gps"
    },
    {
      title: "Santa Cruz",
      description: "Our first event in Santa Cruz was in 2022 and now we are preparing the Hackathon for 2024.",
      icon: "tabler:gps"
    }
  ] })}  ${renderComponent($$result2, "Steps2", $$Steps2, { "title": "About us", "subtitle": " ", "items": [
    {
      title: "Mission",
      description: "To inspire and invite all Bolivians and Latin Americans to join the web3 movement and build a better future with Ethereum"
    },
    {
      title: "Our Space",
      description: "We want our space to be a meeting point where ideas are shared, continuous learning is encouraged and fruitful and lasting relationships are created."
    },
    {
      title: "About us",
      description: "Ethereum Bolivia is a group of young enthusiasts of Web3 and Blockchain technology. We seek to promote research and innovation through various activities for the community."
    }
  ] })}  ${renderComponent($$result2, "Steps2", $$Steps2, { "title": "Our Impact", "subtitle": "Also check out the achievements of the first Web3 Hackathon in the country. ", "isReversed": true, "callToAction": {
    text: "Ethereum Bolivia 2023",
    href: "/2023"
  }, "items": [
    {
      title: "ETH Kipu Members - ETH Latam",
      description: "We are part of the Ethereum Latam community network",
      icon: "tabler:globe"
    },
    {
      title: "Community Generation",
      description: "We strive to be a community oriented in creating the next generation.",
      icon: "tabler:message-star"
    },
    {
      title: "Web3 and Blockchain education",
      description: "we seek to foster education, collaboration, knowledge sharing and development, whether you are just taking your first steps.",
      icon: "tabler:award"
    }
  ] })}  ${renderComponent($$result2, "Agenda", $$Agenda, { "title": "Team", "subtitle": "", "tagline": " ", "items": [
    {
      title: "Nico Gallardo",
      description: `Co-Founder / Finanzas Lead <br>
        <a href="https://twitter.com/EthereumBo" class="text-muted hover:underline dark:text-slate-400 font-medium"
        >Follow me!  </a>
        `,
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers12.png",
        alt: "Nico Gallardo Image"
      }
    },
    {
      title: "Fabi Acarapi",
      description: `Co-Founder / Community Lead<br>
        <a href="https://twitter.com/EthereumBo" class="text-muted hover:underline dark:text-slate-400 font-medium"
        >Follow me! </a>
        `,
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers15.png",
        alt: "Sidney Hansen Image"
      }
    },
    {
      title: "Pedro Rey",
      description: `Co-Founder  <br>
        <a href="https://twitter.com/EthereumBo" class="text-muted hover:underline dark:text-slate-400 font-medium"
        >Follow me! </a>
        `,
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers28.png",
        alt: "Sidney Hansen Image"
      }
    },
    {
      title: "Cecilia Contreras",
      description: `Content Manager <br>
        <a href="https://twitter.com/EthereumBo" class="text-muted hover:underline dark:text-slate-400 font-medium"
        >Follow me! </a>
        `,
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers1.png",
        alt: "Sidney Hansen Image"
      }
    },
    {
      title: "Huascar Miranda",
      description: `Technical Mentor <br>
        <a href="https://twitter.com/EthereumBo" class="text-muted hover:underline dark:text-slate-400 font-medium"
        >Follow me! </a>
        `,
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers14.png",
        alt: "Sidney Hansen Image"
      }
    },
    {
      title: "Alison Berbetty",
      description: `Legal Mentor <br>
        <a href="https://twitter.com/EthereumBo" class="text-muted hover:underline dark:text-slate-400 font-medium"
        >Follow me! </a>
        `,
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers12.png",
        alt: "Sidney Hansen Image"
      }
    },
    {
      title: "Ayrton Paredes",
      description: `Technical Mentor <br>
        <a href="https://twitter.com/EthereumBo" class="text-muted hover:underline dark:text-slate-400 font-medium"
        >Follow me! </a>
        `,
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers19.png",
        alt: "Sidney Hansen Image"
      }
    },
    {
      title: "Freddy Chambi",
      description: `Technical Mentor <br>
        <a href="https://twitter.com/EthereumBo" class="text-muted hover:underline dark:text-slate-400 font-medium"
        >Follow me! </a>
        `,
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers21.png",
        alt: "Sidney Hansen Image"
      }
    },
    {
      title: "Fabian",
      description: `Legal Mentor <br>
        <a href="https://twitter.com/EthereumBo" class="text-muted hover:underline dark:text-slate-400 font-medium"
        >Follow me! </a>
        `,
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers12.png",
        alt: "Sidney Hansen Image"
      }
    },
    {
      title: "Abidan",
      description: `Technical Mentor <br>
        <a href="https://twitter.com/EthereumBo" class="text-muted hover:underline dark:text-slate-400 font-medium"
        >Follow me! </a>
        `,
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers12.png",
        alt: "Sidney Hansen Image"
      }
    },
    {
      title: "Manuel Elias ",
      description: `Technical Mentor <br>
        <a href="https://twitter.com/EthereumBo" class="text-muted hover:underline dark:text-slate-400 font-medium"
        >Follow me! </a>
        `,
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers12.png",
        alt: "Sidney Hansen Image"
      }
    },
    {
      title: "Alexandro",
      description: `Technical Mentor <br>
        <a href="https://twitter.com/EthereumBo" class="text-muted hover:underline dark:text-slate-400 font-medium"
        >Follow me! </a>
        `,
      image: {
        src: "https://raw.githubusercontent.com/fabiola29298/ethBoliviaWebsite/main/src/assets/images/agendaSpeakers12.png",
        alt: "Sidney Hansen Image"
      }
    }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "Steps2", $$Steps2, { "title": "Contact us", "subtitle": "Do you have any questions, we're here to help.", "items": [
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
  ] })}  ${renderComponent($$result2, "BlogLatestPosts", $$BlogLatestPosts, { "id": "blog", "title": "News ", "information": ` Explore our collection of articles, guides and events we will be holding in different cities in Bolivia.` }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })} ` })}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/pages/nosotros.astro", void 0);

const $$file = "/home/fabi/april2024/ethBoliviaWebsite/src/pages/nosotros.astro";
const $$url = "/ethBoliviaWebsite/nosotros";

const nosotros = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Nosotros,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { nosotros as a, nosotros$1 as n };
