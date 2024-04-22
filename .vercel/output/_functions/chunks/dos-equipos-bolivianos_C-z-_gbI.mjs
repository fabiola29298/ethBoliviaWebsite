import { a6 as __astro_tag_component__, k as Fragment, a5 as createVNode } from './astro_CzUXaSc3.mjs';
import { m as $$Image } from './pages/404_D5uYgjFE.mjs';
import 'clsx';

const frontmatter = {
  "publishDate": "2023-06-02T00:00:00.000Z",
  "title": "Fuimos sponsor de dos equipos bolivianos para ETH Global Online",
  "excerpt": "\xC9xito en la hackathon ETH Global con mentoreo de Ethereum Bolivia para dos equipos novatos. Colaboraci\xF3n excepcional.",
  "tags": ["ETH Global", "Hackathon", "Grants"],
  "readingTime": 2
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "resultados",
    "text": "Resultados"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "La comunidad de Ethereum Bolivia particip\xF3 de manera activa y solidaria en la hackathon ETH Global durante el primer semestre de 2023. A pesar de que la competencia se llev\xF3 a cabo de manera virtual, la comunidad se comprometi\xF3 a brindar mentoreo y apoyo a los participantes, especialmente a aquellos que estaban compitiendo en su primera hackathon de blockchain."
    }), "\n", createVNode(_components.h2, {
      id: "resultados",
      children: "Resultados"
    }), "\n", createVNode(_components.p, {
      children: "El resultado fue excepcional: dos equipos, cada uno compuesto por cinco personas, se unieron a la competencia y se aventuraron en el emocionante mundo de la programaci\xF3n y desarrollo de blockchain. Esto marc\xF3 un hito significativo para Ethereum Bolivia, ya que permiti\xF3 que nuevos talentos se unieran al ecosistema blockchain y se beneficiaran de la experiencia y el conocimiento de la comunidad."
    }), "\n", createVNode(_components.p, {
      children: "Un aspecto crucial del \xE9xito de estos equipos fue el apoyo brindado por expertos en Solidity y productos de Ethereum Bolivia. El mentoreo fue fundamental para ayudar a los equipos a superar obst\xE1culos y desaf\xEDos t\xE9cnicos, y para garantizar que sus proyectos estuvieran en l\xEDnea con las mejores pr\xE1cticas y est\xE1ndares de Ethereum."
    }), "\n", createVNode(_components.p, {
      children: "La participaci\xF3n activa de la comunidad de Ethereum Bolivia en la hackathon ETH Global no solo contribuy\xF3 al crecimiento de la comunidad local, sino que tambi\xE9n fortaleci\xF3 los lazos entre los miembros y consolid\xF3 su compromiso con la promoci\xF3n y expansi\xF3n de Ethereum en la regi\xF3n."
    }), "\n", createVNode(_components.p, {
      children: "Este evento es un testimonio de la importancia del apoyo y mentor\xEDa en la comunidad blockchain, y demuestra que juntos, podemos lograr avances significativos en la adopci\xF3n y desarrollo de Ethereum."
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
const url = "src/content/post/dos-equipos-bolivianos.mdx";
const file = "/home/fabi/april2024/ethBoliviaWebsite/src/content/post/dos-equipos-bolivianos.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/fabi/april2024/ethBoliviaWebsite/src/content/post/dos-equipos-bolivianos.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
