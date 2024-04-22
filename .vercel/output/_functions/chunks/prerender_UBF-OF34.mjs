import { A as APP_BLOG, c as getPermalink, f as findImage, k as getFormattedDate, d as getBlogPermalink, I as I18N, l as getCanonical } from './pages/404_D5uYgjFE.mjs';
import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, k as Fragment, m as maybeRenderHead, h as addAttribute, u as unescapeHTML } from './astro_CzUXaSc3.mjs';
import 'kleur/colors';
import { changeLanguage } from 'i18next';
import { f as $$Image, g as $$Icon, b as $$Button, l as getStaticPathsBlogCategory, m as blogCategoryRobots, e as $$PageLayout, n as getStaticPathsBlogTag, o as blogTagRobots, p as getStaticPathsBlogList, q as blogListRobots, r as getStaticPathsBlogPost, s as blogPostRobots } from './pages/hackathon-2023_C3LmKge5.mjs';
import merge from 'lodash.merge';
import 'clsx';

const $$Astro$f = createAstro("https://fabiola29298.github.io/");
const $$Tags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Tags;
  const { tags, class: className = "text-sm", title = void 0, isCategory = false } = Astro2.props;
  return renderTemplate`${tags && Array.isArray(tags) && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${title !== void 0 && renderTemplate`${maybeRenderHead()}<span class="align-super font-normal underline underline-offset-4 decoration-2 dark:text-slate-400">${title}</span>`}` })}<ul${addAttribute(className, "class")}>${tags.map((tag) => renderTemplate`<li class="bg-gray-100 dark:bg-slate-700 inline-block mr-2 rtl:mr-0 rtl:ml-2 mb-2 py-0.5 px-2 lowercase font-medium">${!APP_BLOG?.tag?.isEnabled ? tag : renderTemplate`<a${addAttribute(getPermalink(tag, isCategory ? "category" : "tag"), "href")} class="text-muted dark:text-slate-300 hover:text-primary dark:hover:text-gray-200">${tag}</a>`}</li>`)}</ul>` })}`}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/blog/Tags.astro", void 0);

const $$Astro$e = createAstro("https://fabiola29298.github.io/");
const $$ListItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$ListItem;
  const { post } = Astro2.props;
  const image = await findImage(post.image);
  const link = APP_BLOG?.post?.isEnabled ? getPermalink(post.permalink, "post") : "";
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`max-w-md mx-auto md:max-w-none grid gap-6 md:gap-8 ${image ? "md:grid-cols-2" : ""}`, "class")}> ${image && renderTemplate`<a class="relative block group"${addAttribute(link ?? "javascript:void(0)", "href")}> <div class="relative h-0 pb-[56.25%] md:pb-[75%] md:h-72 lg:pb-[56.25%] overflow-hidden bg-gray-400 dark:bg-slate-700 rounded shadow-lg"> ${image && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": image, "class": "absolute inset-0 object-cover w-full h-full mb-6 rounded shadow-lg bg-gray-400 dark:bg-slate-700", "widths": [400, 900], "width": 900, "sizes": "(max-width: 900px) 400px, 900px", "alt": post.title, "aspectRatio": "16:9", "loading": "lazy", "decoding": "async" })}`} </div> </a>`} <div class="mt-2"> <header> <div class="mb-1"> <span class="text-sm"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:clock", "class": "w-3.5 h-3.5 inline-block -mt-0.5 dark:text-gray-400" })} <time${addAttribute(String(post.publishDate), "datetime")} class="inline-block">${getFormattedDate(post.publishDate)}</time> ${post.category && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${" "}
·${" "}<a class="capitalize hover:underline"${addAttribute(getPermalink(post.category, "category"), "href")}> ${post.category.replaceAll("-", " ")} </a> ` })}`} </span> </div> <h2 class="text-xl sm:text-2xl font-bold leading-tight mb-2 font-heading dark:text-slate-300"> ${link ? renderTemplate`<a class="hover:text-primary dark:hover:text-blue-700 transition ease-in duration-200"${addAttribute(link, "href")}> ${post.title} </a>` : post.title} </h2> </header> ${post.excerpt && renderTemplate`<p class="flex-grow text-muted dark:text-slate-400 text-lg">${post.excerpt}</p>`} <footer class="mt-5"> ${renderComponent($$result, "PostTags", $$Tags, { "tags": post.tags })} </footer> </div> </article>`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/blog/ListItem.astro", void 0);

const $$Astro$d = createAstro("https://fabiola29298.github.io/");
const $$List = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$List;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul> ${posts.map((post) => renderTemplate`<li class="mb-12 md:mb-20"> ${renderComponent($$result, "Item", $$ListItem, { "post": post })} </li>`)} </ul>`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/blog/List.astro", void 0);

const $$Astro$c = createAstro("https://fabiola29298.github.io/");
const $$Headline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Headline;
  const { title = await Astro2.slots.render("default"), subtitle = await Astro2.slots.render("subtitle") } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="mb-8 md:mb-16 text-center max-w-3xl mx-auto"> <h1 class="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter font-heading">${unescapeHTML(title)}</h1> ${subtitle && renderTemplate`<div class="mt-2 md:mt-3 mx-auto text-xl text-gray-500 dark:text-slate-400 font-medium">${unescapeHTML(subtitle)}</div>`} </header>`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/blog/Headline.astro", void 0);

const $$Astro$b = createAstro("https://fabiola29298.github.io/");
const $$Pagination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { prevUrl, nextUrl, prevText = "Newer posts", nextText = "Older posts" } = Astro2.props;
  return renderTemplate`${(prevUrl || nextUrl) && renderTemplate`${maybeRenderHead()}<div class="container flex"><div class="flex flex-row mx-auto container justify-between">${renderComponent($$result, "Button", $$Button, { "variant": "tertiary", "class": `md:px-3 px-3 mr-2 ${!prevUrl ? "invisible" : ""}`, "href": getPermalink(prevUrl) }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-left", "class": "w-6 h-6" })}<p class="ml-2">${prevText}</p>` })}${renderComponent($$result, "Button", $$Button, { "variant": "tertiary", "class": `md:px-3 px-3 ${!nextUrl ? "invisible" : ""}`, "href": getPermalink(nextUrl) }, { "default": ($$result2) => renderTemplate`<span class="mr-2">${nextText}</span>${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-right", "class": "w-6 h-6" })}` })}</div></div>`}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/blog/Pagination.astro", void 0);

const $$Astro$a = createAstro("https://fabiola29298.github.io/");
const prerender$7 = true;
async function getStaticPaths$7({ paginate }) {
  return await getStaticPathsBlogCategory({ paginate });
}
const $$$5 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$$5;
  changeLanguage("es");
  const { page, category } = Astro2.props;
  const currentPage = page.currentPage ?? 1;
  const metadata = {
    title: `Category '${category}' ${currentPage > 1 ? ` \u2014 Page ${currentPage}` : ""}`,
    robots: {
      index: blogCategoryRobots?.index,
      follow: blogCategoryRobots?.follow
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-4 md:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-4xl"> ${renderComponent($$result2, "Headline", $$Headline, {}, { "default": ($$result3) => renderTemplate`<span class="capitalize">${category.replaceAll("-", " ")}</span>` })} ${renderComponent($$result2, "BlogList", $$List, { "posts": page.data })} ${renderComponent($$result2, "Pagination", $$Pagination, { "prevUrl": page.url.prev, "nextUrl": page.url.next })} </section> ` })}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/pages/es/[...blog]/[category]/[...page].astro", void 0);

const $$file$7 = "/home/fabi/april2024/ethBoliviaWebsite/src/pages/es/[...blog]/[category]/[...page].astro";
const $$url$7 = "/ethBoliviaWebsite/es/[...blog]/[category]/[...page]";

const ____page_$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$5,
  file: $$file$7,
  getStaticPaths: getStaticPaths$7,
  prerender: prerender$7,
  url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$9 = createAstro("https://fabiola29298.github.io/");
const prerender$6 = true;
async function getStaticPaths$6({ paginate }) {
  return await getStaticPathsBlogTag({ paginate });
}
const $$$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$$4;
  changeLanguage("es");
  const { page, tag } = Astro2.props;
  const currentPage = page.currentPage ?? 1;
  const metadata = {
    title: `Posts by tag '${tag}'${currentPage > 1 ? ` \u2014 Page ${currentPage} ` : ""}`,
    robots: {
      index: blogTagRobots?.index,
      follow: blogTagRobots?.follow
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-4 md:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-4xl"> ${renderComponent($$result2, "Headline", $$Headline, {}, { "default": ($$result3) => renderTemplate`Tag: ${tag}` })} ${renderComponent($$result2, "BlogList", $$List, { "posts": page.data })} ${renderComponent($$result2, "Pagination", $$Pagination, { "prevUrl": page.url.prev, "nextUrl": page.url.next })} </section> ` })}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/pages/es/[...blog]/[tag]/[...page].astro", void 0);

const $$file$6 = "/home/fabi/april2024/ethBoliviaWebsite/src/pages/es/[...blog]/[tag]/[...page].astro";
const $$url$6 = "/ethBoliviaWebsite/es/[...blog]/[tag]/[...page]";

const ____page_$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$4,
  file: $$file$6,
  getStaticPaths: getStaticPaths$6,
  prerender: prerender$6,
  url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$8 = createAstro("https://fabiola29298.github.io/");
const prerender$5 = true;
async function getStaticPaths$5({ paginate }) {
  return await getStaticPathsBlogList({ paginate });
}
const $$$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$$3;
  changeLanguage("es");
  const { page } = Astro2.props;
  const currentPage = page.currentPage ?? 1;
  const metadata = {
    title: `News ${currentPage > 1 ? ` - Page ${currentPage}` : ""}`,
    robots: {
      index: blogListRobots?.index && currentPage === 1,
      follow: blogListRobots?.follow
    },
    openGraph: {
      type: "blog"
    },
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-6 sm:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-4xl"> ${renderComponent($$result2, "Headline", $$Headline, { "subtitle": "Explora nuestra publicaciones" }, { "default": ($$result3) => renderTemplate`
Novedades
` })} ${renderComponent($$result2, "BlogList", $$List, { "posts": page.data })} ${renderComponent($$result2, "Pagination", $$Pagination, { "prevUrl": page.url.prev, "nextUrl": page.url.next })} <!--
      <PostTags tags={allCategories} class="mb-2" title="Search by Categories:" isCategory />
      <PostTags tags={allTags}  title="Search by Tags:" />
    --> </section> ` })}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/pages/es/[...blog]/[...page].astro", void 0);

const $$file$5 = "/home/fabi/april2024/ethBoliviaWebsite/src/pages/es/[...blog]/[...page].astro";
const $$url$5 = "/ethBoliviaWebsite/es/[...blog]/[...page]";

const ____page_$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$3,
  file: $$file$5,
  getStaticPaths: getStaticPaths$5,
  prerender: prerender$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$7 = createAstro("https://fabiola29298.github.io/");
const $$SocialShare = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SocialShare;
  const { text, url, class: className = "inline-block" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(className, "class")}> <span class="align-super font-bold text-gray-400 dark:text-slate-400">Share:</span> <button class="ml-2 rtl:ml-0 rtl:mr-2" title="Twitter Share" data-aw-social-share="twitter"${addAttribute(url, "data-aw-url")}${addAttribute(text, "data-aw-text")}>${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:brand-x", "class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300" })} </button> <button class="ml-2 rtl:ml-0 rtl:mr-2" title="Facebook Share" data-aw-social-share="facebook"${addAttribute(url, "data-aw-url")}>${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:brand-facebook", "class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300" })} </button> <button class="ml-2 rtl:ml-0 rtl:mr-2" title="Linkedin Share" data-aw-social-share="linkedin"${addAttribute(url, "data-aw-url")}${addAttribute(text, "data-aw-text")}>${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:brand-linkedin", "class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300" })} </button> <button class="ml-2 rtl:ml-0 rtl:mr-2" title="Whatsapp Share" data-aw-social-share="whatsapp"${addAttribute(url, "data-aw-url")}${addAttribute(text, "data-aw-text")}>${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:brand-whatsapp", "class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300" })} </button> <button class="ml-2 rtl:ml-0 rtl:mr-2" title="Email Share" data-aw-social-share="mail"${addAttribute(url, "data-aw-url")}${addAttribute(text, "data-aw-text")}>${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:mail", "class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300" })} </button> </div>`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/common/SocialShare.astro", void 0);

const $$Astro$6 = createAstro("https://fabiola29298.github.io/");
const $$SinglePost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SinglePost;
  const { post, url } = Astro2.props;
  const { Content } = post;
  return renderTemplate`${maybeRenderHead()}<section class="py-8 sm:py-16 lg:py-20 mx-auto"> <article> <header${addAttribute(post.image ? "" : "", "class")}> <div class="flex justify-between flex-col sm:flex-row max-w-3xl mx-auto mt-0 mb-2 px-4 sm:px-6 sm:items-center"> <p> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:clock", "class": "w-4 h-4 inline-block -mt-0.5 dark:text-gray-400" })} <time${addAttribute(String(post.publishDate), "datetime")} class="inline-block">${getFormattedDate(post.publishDate)}</time> ${post.category && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${" "}
·${" "}<a class="capitalize hover:underline inline-block"${addAttribute(getPermalink(post.category, "category"), "href")}> ${post.category.replaceAll("-", " ")} </a> ` })}`} ${post.readingTime && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` · ${post.readingTime} min read` })}`} </p> </div> <h1 class="px-4 sm:px-6 max-w-3xl mx-auto text-4xl md:text-5xl font-bold leading-tighter tracking-tighter font-heading"> ${post.title} </h1> <p class="max-w-3xl mx-auto mt-4 mb-8 px-4 sm:px-6 text-xl md:text-2xl text-muted dark:text-slate-400 text-justify"> ${post.excerpt} </p> ${post.image ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": post.image, "class": "max-w-full lg:max-w-[900px] mx-auto mb-6 sm:rounded-md bg-gray-400 dark:bg-slate-700", "widths": [400, 900], "sizes": "(max-width: 900px) 400px, 900px", "alt": post?.excerpt || "", "width": 900, "height": 506, "loading": "eager", "decoding": "async" })}` : renderTemplate`<div class="max-w-3xl mx-auto px-4 sm:px-6"> <div class="border-t dark:border-slate-700"></div> </div>`} </header> <div class="mx-auto px-6 sm:px-6 max-w-3xl prose prose-lg lg:prose-xl dark:prose-invert dark:prose-headings:text-slate-300 prose-md prose-headings:font-heading prose-headings:leading-tighter prose-headings:tracking-tighter prose-headings:font-bold prose-a:text-primary dark:prose-a:text-blue-400 prose-img:rounded-md prose-img:shadow-lg mt-8 prose-headings:scroll-mt-[80px]"> ${Content ? renderTemplate`${renderComponent($$result, "Content", Content, {})}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(post.content || "")}` })}`} </div> <div class="mx-auto px-6 sm:px-6 max-w-3xl mt-8 flex justify-between flex-col sm:flex-row"> ${renderComponent($$result, "PostTags", $$Tags, { "tags": post.tags, "class": "mr-5 rtl:mr-0 rtl:ml-5" })} ${renderComponent($$result, "SocialShare", $$SocialShare, { "url": url, "text": post.title, "class": "mt-5 sm:mt-1 align-middle text-gray-500 dark:text-slate-600" })} </div> </article> </section>`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/blog/SinglePost.astro", void 0);

const $$Astro$5 = createAstro("https://fabiola29298.github.io/");
const $$ToBlogLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ToBlogLink;
  const { textDirection } = I18N;
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto px-6 sm:px-6 max-w-3xl pt-8 md:pt-4 pb-12 md:pb-20"> ${renderComponent($$result, "Button", $$Button, { "variant": "tertiary", "class": "px-3 md:px-3", "href": getBlogPermalink() }, { "default": ($$result2) => renderTemplate`${textDirection === "rtl" ? renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-right", "class": "w-5 h-5 mr-1 -ml-1.5 rtl:-mr-1.5 rtl:ml-1" })}` : renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-left", "class": "w-5 h-5 mr-1 -ml-1.5 rtl:-mr-1.5 rtl:ml-1" })}`} Back to Blog
` })} </div>`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/blog/ToBlogLink.astro", void 0);

const $$Astro$4 = createAstro("https://fabiola29298.github.io/");
const prerender$4 = true;
async function getStaticPaths$4() {
  return await getStaticPathsBlogPost();
}
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$1;
  changeLanguage("es");
  const { post } = Astro2.props;
  const url = getCanonical(getPermalink(post.permalink, "post"));
  const image = await findImage(post.image);
  const metadata = merge({
    title: post.title,
    description: post.excerpt,
    robots: {
      index: blogPostRobots?.index,
      follow: blogPostRobots?.follow
    },
    openGraph: {
      type: "article",
      ...image ? { images: [{ url: image, width: image?.width, height: image?.height }] } : {}
    }
  }, { ...post?.metadata ? { ...post.metadata, canonical: post.metadata?.canonical || url } : {} });
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SinglePost", $$SinglePost, { "post": { ...post, image }, "url": url })} ${renderComponent($$result2, "ToBlogLink", $$ToBlogLink, {})} ` })}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/pages/es/[...blog]/index.astro", void 0);

const $$file$4 = "/home/fabi/april2024/ethBoliviaWebsite/src/pages/es/[...blog]/index.astro";
const $$url$4 = "/ethBoliviaWebsite/es/[...blog]";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$4,
  getStaticPaths: getStaticPaths$4,
  prerender: prerender$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro("https://fabiola29298.github.io/");
const prerender$3 = true;
async function getStaticPaths$3({ paginate }) {
  return await getStaticPathsBlogCategory({ paginate });
}
const $$$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$$2;
  changeLanguage("en");
  const { page, category } = Astro2.props;
  const currentPage = page.currentPage ?? 1;
  const metadata = {
    title: `Category '${category}' ${currentPage > 1 ? ` \u2014 Page ${currentPage}` : ""}`,
    robots: {
      index: blogCategoryRobots?.index,
      follow: blogCategoryRobots?.follow
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-4 md:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-4xl"> ${renderComponent($$result2, "Headline", $$Headline, {}, { "default": ($$result3) => renderTemplate`<span class="capitalize">${category.replaceAll("-", " ")}</span>` })} ${renderComponent($$result2, "BlogList", $$List, { "posts": page.data })} ${renderComponent($$result2, "Pagination", $$Pagination, { "prevUrl": page.url.prev, "nextUrl": page.url.next })} </section> ` })}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/pages/[...blog]/[category]/[...page].astro", void 0);

const $$file$3 = "/home/fabi/april2024/ethBoliviaWebsite/src/pages/[...blog]/[category]/[...page].astro";
const $$url$3 = "/ethBoliviaWebsite/[...blog]/[category]/[...page]";

const ____page_$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$2,
  file: $$file$3,
  getStaticPaths: getStaticPaths$3,
  prerender: prerender$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://fabiola29298.github.io/");
const prerender$2 = true;
async function getStaticPaths$2({ paginate }) {
  return await getStaticPathsBlogTag({ paginate });
}
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$$1;
  changeLanguage("en");
  const { page, tag } = Astro2.props;
  const currentPage = page.currentPage ?? 1;
  const metadata = {
    title: `Posts by tag '${tag}'${currentPage > 1 ? ` \u2014 Page ${currentPage} ` : ""}`,
    robots: {
      index: blogTagRobots?.index,
      follow: blogTagRobots?.follow
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-4 md:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-4xl"> ${renderComponent($$result2, "Headline", $$Headline, {}, { "default": ($$result3) => renderTemplate`Tag: ${tag}` })} ${renderComponent($$result2, "BlogList", $$List, { "posts": page.data })} ${renderComponent($$result2, "Pagination", $$Pagination, { "prevUrl": page.url.prev, "nextUrl": page.url.next })} </section> ` })}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/pages/[...blog]/[tag]/[...page].astro", void 0);

const $$file$2 = "/home/fabi/april2024/ethBoliviaWebsite/src/pages/[...blog]/[tag]/[...page].astro";
const $$url$2 = "/ethBoliviaWebsite/[...blog]/[tag]/[...page]";

const ____page_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$1,
  file: $$file$2,
  getStaticPaths: getStaticPaths$2,
  prerender: prerender$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://fabiola29298.github.io/");
const prerender$1 = true;
async function getStaticPaths$1({ paginate }) {
  return await getStaticPathsBlogList({ paginate });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$;
  changeLanguage("en");
  const { page } = Astro2.props;
  const currentPage = page.currentPage ?? 1;
  const metadata = {
    title: `News ${currentPage > 1 ? ` - Page ${currentPage}` : ""}`,
    robots: {
      index: blogListRobots?.index && currentPage === 1,
      follow: blogListRobots?.follow
    },
    openGraph: {
      type: "blog"
    },
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-6 sm:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-4xl"> ${renderComponent($$result2, "Headline", $$Headline, { "subtitle": "Explore our collection of articles, guides and events in different cities in Bolivia." }, { "default": ($$result3) => renderTemplate`
News
` })} ${renderComponent($$result2, "BlogList", $$List, { "posts": page.data })} ${renderComponent($$result2, "Pagination", $$Pagination, { "prevUrl": page.url.prev, "nextUrl": page.url.next })} <!--
      <PostTags tags={allCategories} class="mb-2" title="Search by Categories:" isCategory />
      <PostTags tags={allTags}  title="Search by Tags:" />
    --> </section> ` })}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/pages/[...blog]/[...page].astro", void 0);

const $$file$1 = "/home/fabi/april2024/ethBoliviaWebsite/src/pages/[...blog]/[...page].astro";
const $$url$1 = "/ethBoliviaWebsite/[...blog]/[...page]";

const ____page_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file$1,
  getStaticPaths: getStaticPaths$1,
  prerender: prerender$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://fabiola29298.github.io/");
const prerender = true;
async function getStaticPaths() {
  return await getStaticPathsBlogPost();
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  changeLanguage("en");
  const { post } = Astro2.props;
  const url = getCanonical(getPermalink(post.permalink, "post"));
  const image = await findImage(post.image);
  const metadata = merge({
    title: post.title,
    description: post.excerpt,
    robots: {
      index: blogPostRobots?.index,
      follow: blogPostRobots?.follow
    },
    openGraph: {
      type: "article",
      ...image ? { images: [{ url: image, width: image?.width, height: image?.height }] } : {}
    }
  }, { ...post?.metadata ? { ...post.metadata, canonical: post.metadata?.canonical || url } : {} });
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SinglePost", $$SinglePost, { "post": { ...post, image }, "url": url })} ${renderComponent($$result2, "ToBlogLink", $$ToBlogLink, {})} ` })}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/pages/[...blog]/index.astro", void 0);

const $$file = "/home/fabi/april2024/ethBoliviaWebsite/src/pages/[...blog]/index.astro";
const $$url = "/ethBoliviaWebsite/[...blog]";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { ____page_$5 as _, ____page_$4 as a, ____page_$3 as b, ____page_$2 as c, ____page_$1 as d, ____page_ as e, index as f, index$1 as i };
