import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, u as unescapeHTML } from './astro_CzUXaSc3.mjs';
import 'kleur/colors';
/* empty css                         */

const $$Astro = createAstro("https://fabiola29298.github.io/");
const $$Tweet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tweet;
  const { id } = Astro2.props;
  async function fetchTweet(id2) {
    try {
      const oembedUrl = new URL("https://publish.twitter.com/oembed");
      oembedUrl.searchParams.set("url", id2);
      oembedUrl.searchParams.set("omit_script", "true");
      oembedUrl.searchParams.set("dnt", "true");
      return await fetch(oembedUrl).then((res) => res.json());
    } catch (e) {
      console.error(
        `[error]  astro-embed
         ${e.status} - ${e.statusText}: Failed to fetch tweet ${id2}`
      );
    }
  }
  const tweet = await fetchTweet(id);
  return renderTemplate`${tweet && renderTemplate`${renderComponent($$result, "astro-embed-tweet", "astro-embed-tweet", {}, { "default": () => renderTemplate`${unescapeHTML(tweet.html)}` })}`}`;
}, "/home/fabi/april2024/ethBoliviaWebsite/node_modules/@astro-community/astro-embed-twitter/Tweet.astro", void 0);

export { $$Tweet as $ };
