import { c as create_ssr_component, s as subscribe, d as set_store_value, v as validate_component } from "./app-3d85ebcf.js";
import { a as media_type, s as selected } from "./store-f8b67767.js";
import { M as MainSection } from "./MainSection-866f73c3.js";
import "./Spinner-d0149d04.js";
media_type.set("tv");
const load = async ({ fetch, page }) => {
  const genres = page.params.id;
  const res = await fetch("../../api/getShowGenre", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ media: "tv", page: "1", genre: genres })
  });
  const datas = await res.json();
  const data = await datas.res.results;
  const total_pages = await datas.res.total_pages;
  return { props: { data, total_pages, genres } };
};
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selected, $$unsubscribe_selected;
  $$unsubscribe_selected = subscribe(selected, (value) => $selected = value);
  let { data } = $$props;
  let { total_pages } = $$props;
  let { genres } = $$props;
  set_store_value(selected, $selected = null, $selected);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.total_pages === void 0 && $$bindings.total_pages && total_pages !== void 0)
    $$bindings.total_pages(total_pages);
  if ($$props.genres === void 0 && $$bindings.genres && genres !== void 0)
    $$bindings.genres(genres);
  $$unsubscribe_selected();
  return `${validate_component(MainSection, "MainSection").$$render($$result, { data, total_pages, genres }, {}, {})}`;
});
export { U5Bidu5D as default, load };
