import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_CzUXaSc3.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://fabiola29298.github.io/");
const $$DListItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DListItem;
  const {
    dt
  } = Astro2.props;
  const content = await Astro2.slots.render("default");
  return renderTemplate`${maybeRenderHead()}<h6>${unescapeHTML(dt)}</h6> <div class="dd ml-8">${unescapeHTML(content)}</div>`;
}, "/home/fabi/april2024/ethBoliviaWebsite/src/components/ui/DListItem.astro", void 0);
