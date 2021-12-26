import { c as create_ssr_component, s as subscribe, f as set_store_value, v as validate_component } from "./app-14a936dc.js";
import { d as data, a as media_type, s as selected } from "./store-cc224516.js";
import { M as MainSection } from "./MainSection-8f5559a2.js";
import "./ProgressBar-607c37c9.js";
const prerender = true;
async function load({ fetch, page }) {
  data.set(void 0);
  const genres = page.params.id;
  media_type.set(page.params.media);
  const res = await fetch("../../api/getShowGenre", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      media: page.params.media,
      page: "1",
      genre: genres
    })
  });
  const datas = await res.json();
  data.set(await datas.res.results);
  const total_pages = await datas.res.total_pages;
  return { props: { total_pages, genres } };
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selected, $$unsubscribe_selected;
  $$unsubscribe_selected = subscribe(selected, (value) => $selected = value);
  let { total_pages } = $$props;
  let { genres } = $$props;
  set_store_value(selected, $selected = null, $selected);
  if ($$props.total_pages === void 0 && $$bindings.total_pages && total_pages !== void 0)
    $$bindings.total_pages(total_pages);
  if ($$props.genres === void 0 && $$bindings.genres && genres !== void 0)
    $$bindings.genres(genres);
  $$unsubscribe_selected();
  return `${validate_component(MainSection, "MainSection").$$render($$result, { total_pages, genres }, {}, {})}`;
});
export { U5Bidu5D as default, load, prerender };
