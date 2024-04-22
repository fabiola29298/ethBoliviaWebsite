import { a6 as __astro_tag_component__, k as Fragment, a5 as createVNode } from './astro_CzUXaSc3.mjs';
import { m as $$Image } from './pages/404_D5uYgjFE.mjs';
import { $ as $$Tweet } from './Tweet_PW7n_0Z8.mjs';
import './DListItem_CuEzBbRR.mjs';
import './pages/hackathon-2023_C3LmKge5.mjs';
import 'clsx';

const frontmatter = {
  "publishDate": "2023-10-04T00:00:00.000Z",
  "title": "Por primera vez en Tarija",
  "excerpt": "Evento imperdible en Tarija con Pedro Rey, experto en Ethereum y blockchain. \xA1No te lo pierdas!",
  "image": "https://pbs.twimg.com/media/F8Xc4svXEAAYcqA?format=jpg&name=large",
  "category": "Documentation",
  "tags": ["Tarija", "Evento", "Educacion"],
  "readingTime": 2
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "pedro-rey-es-un-destacado-experto-en-el-campo-de-blockchain",
    "text": "Pedro Rey, es un destacado experto en el campo de blockchain"
  }, {
    "depth": 2,
    "slug": "contenido-del-taller",
    "text": "Contenido del taller"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "La ciudad de Tarija se est\xE1 preparando para recibir a un invitado de lujo: \xA1@criptopepe1! El evento que se llevar\xE1 a cabo este viernes a las 10 de la ma\xF1ana en el Auditorio D1 de la Facultad de Ciencias Econ\xF3micas y Financieras de la Universidad Aut\xF3noma Juan Misael Saracho promete ser una experiencia imperdible para todos los interesados en el mundo de las criptomonedas y la tecnolog\xEDa blockchain."
    }), "\n", createVNode(_components.h2, {
      id: "pedro-rey-es-un-destacado-experto-en-el-campo-de-blockchain",
      children: "Pedro Rey, es un destacado experto en el campo de blockchain"
    }), "\n", createVNode(_components.p, {
      children: "El invitado de honor, Pedro Rey, es un destacado experto en el campo de blockchain y actualmente se desempe\xF1a como Mkt Manager en okx.com, con experiencia previa en Binance. Adem\xE1s, es el fundador de Crypto Plata, Laboratorio de UTN y Ethereum Bolivia. Su conocimiento en Ethereum, una de las principales criptomonedas y tecnolog\xEDas blockchain del mundo, es amplio y valioso."
    }), "\n", createVNode(_components.h2, {
      id: "contenido-del-taller",
      children: "Contenido del taller"
    }), "\n", createVNode(_components.p, {
      children: "Durante el evento, Pedro compartir\xE1 sus conocimientos sobre Ethereum, su impacto en el mundo de las criptomonedas y las oportunidades que esta tecnolog\xEDa ofrece para Tarija y la regi\xF3n. Desde las bases de blockchain hasta aplicaciones pr\xE1cticas en la vida cotidiana, los asistentes tendr\xE1n la oportunidad de aprender, hacer networking y mantenerse al tanto de las \xFAltimas tendencias en el mundo financiero descentralizado."
    }), "\n", createVNode(_components.p, {
      children: "No te pierdas la oportunidad de conectarte con una figura destacada en el campo y ser parte de esta emocionante introducci\xF3n de Ethereum en Tarija. Este evento promete ser una experiencia inolvidable que te mantendr\xE1 al tanto de las innovaciones blockchain en el mundo financiero."
    }), "\n", createVNode(_components.p, {
      children: ["Evento en Luma ", createVNode(_components.a, {
        href: "https://lu.ma/lx4yapbi",
        children: "Inscripciones"
      })]
    }), "\n", createVNode($$Tweet, {
      id: "https://twitter.com/astrodotbuild/status/1712602332540658098"
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/post/por-primera-vez-en-tarija.mdx";
const file = "/home/fabi/april2024/ethBoliviaWebsite/src/content/post/por-primera-vez-en-tarija.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/fabi/april2024/ethBoliviaWebsite/src/content/post/por-primera-vez-en-tarija.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
