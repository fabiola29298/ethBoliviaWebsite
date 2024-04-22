import { a6 as __astro_tag_component__, k as Fragment, a5 as createVNode } from './astro_CzUXaSc3.mjs';
import { m as $$Image } from './pages/404_D5uYgjFE.mjs';
import { $ as $$Tweet } from './Tweet_PW7n_0Z8.mjs';
import 'clsx';

const frontmatter = {
  "publishDate": "2023-07-15T00:00:00.000Z",
  "title": "Primera version >> Curso de Solidity en dos ciudades de Bolivia",
  "excerpt": "\xC9xito en la primera edici\xF3n del curso gratuito de Solidity en Bolivia, con la participaci\xF3n de estudiantes en dos ciudades.",
  "image": "https://pbs.twimg.com/media/F4PnR0XW0AAk3Qv?format=jpg&name=large",
  "tags": ["Video", "Solidity", "Cursos"],
  "readingTime": 2
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "capacitaci\xF3n-y-actualizaci\xF3n-de-docentes",
    "text": "Capacitaci\xF3n y actualizaci\xF3n de docentes"
  }, {
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
      children: "Estamos emocionados de compartir los resultados de la primera versi\xF3n del curso gratuito de Solidity en Bolivia, una iniciativa que reuni\xF3 a estudiantes y profesionales interesados en el desarrollo de contratos inteligentes en la red Ethereum. El curso se llev\xF3 a cabo en dos ciudades clave, La Paz y Santa Cruz, con la colaboraci\xF3n de universidades locales que proporcionaron salas de computaci\xF3n para las clases."
    }), "\n", createVNode(_components.h2, {
      id: "capacitaci\xF3n-y-actualizaci\xF3n-de-docentes",
      children: "Capacitaci\xF3n y actualizaci\xF3n de docentes"
    }), "\n", createVNode(_components.p, {
      children: "Una parte fundamental de este curso fue la capacitaci\xF3n y actualizaci\xF3n de docentes a cargo. ETH Kipu, una plataforma dedicada a la promoci\xF3n y educaci\xF3n de Ethereum en Am\xE9rica Latina, se asoci\xF3 con nosotros para brindar a los instructores recursos educativos y mentoreo. Esto permiti\xF3 que los docentes estuvieran bien preparados para guiar a los estudiantes a trav\xE9s de los conceptos y desaf\xEDos de Solidity."
    }), "\n", createVNode(_components.p, {
      children: "Uno de los momentos destacados del curso fue la presencia de Solange, miembro del equipo de ETH Samba y DevRel de Chainlink, quien comparti\xF3 su experiencia y conocimientos con los participantes. Su aporte fue invaluable para comprender c\xF3mo Solidity y Chainlink pueden trabajar juntos para crear soluciones descentralizadas y seguras en Ethereum."
    }), "\n", createVNode(_components.h2, {
      id: "resultados",
      children: "Resultados"
    }), "\n", createVNode(_components.p, {
      children: "El resultado fue un \xE9xito rotundo. En La Paz, participaron 30 estudiantes, mientras que en Santa Cruz, 18 personas se unieron al curso. Estos n\xFAmeros reflejan un creciente inter\xE9s en blockchain y Ethereum en Bolivia y la importancia de brindar oportunidades educativas en la regi\xF3n. Esperamos que esta primera versi\xF3n del curso sea el inicio de una serie de eventos educativos y colaborativos que fomenten la adopci\xF3n de Ethereum en Bolivia y m\xE1s all\xE1."
    }), "\n", createVNode($$Tweet, {
      id: "https://twitter.com/astrodotbuild/status/1694452182848848361"
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
const url = "src/content/post/curso-solidity-2023.mdx";
const file = "/home/fabi/april2024/ethBoliviaWebsite/src/content/post/curso-solidity-2023.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/fabi/april2024/ethBoliviaWebsite/src/content/post/curso-solidity-2023.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
