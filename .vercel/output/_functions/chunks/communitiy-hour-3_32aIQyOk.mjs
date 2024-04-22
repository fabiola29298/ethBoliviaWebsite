import { a6 as __astro_tag_component__, k as Fragment, a5 as createVNode } from './astro_CzUXaSc3.mjs';
import { m as $$Image } from './pages/404_D5uYgjFE.mjs';
import { $ as $$Tweet } from './Tweet_PW7n_0Z8.mjs';
import './DListItem_CuEzBbRR.mjs';
import './pages/hackathon-2023_C3LmKge5.mjs';
import 'clsx';

const frontmatter = {
  "publishDate": "2023-09-26T00:00:00.000Z",
  "title": "Community Hour 3 de ETH Kipu",
  "excerpt": "Ethereum Bolivia y ETH Colombia destacaron logros y desaf\xEDos en un evento online de ETH Kipu.",
  "image": "https://pbs.twimg.com/media/F69EtC8X0AAvSIs?format=jpg&name=large",
  "tags": ["ETH Kipu", "Internacional"],
  "readingTime": 1
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Ethereum Bolivia y ETH Colombia se unieron en un emocionante Community Hour de ETH Kipu antes de la hackathon. Juntos, compartieron los logros y desaf\xEDos de sus respectivas comunidades. Una colaboraci\xF3n internacional que fortalece la red Ethereum en Am\xE9rica Latina."
    }), "\n", createVNode($$Tweet, {
      id: "https://twitter.com/astrodotbuild/status/1706659303405580570"
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
const url = "src/content/post/communitiy-hour-3.mdx";
const file = "/home/fabi/april2024/ethBoliviaWebsite/src/content/post/communitiy-hour-3.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/fabi/april2024/ethBoliviaWebsite/src/content/post/communitiy-hour-3.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
