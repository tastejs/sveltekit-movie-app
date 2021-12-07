import { g as get_store_value, c as create_ssr_component, v as validate_component } from "./app-3d85ebcf.js";
import { a as media_type } from "./store-f8b67767.js";
import { M as MainSection } from "./MainSection-866f73c3.js";
import "./Spinner-d0149d04.js";
async function load({ fetch, page }) {
  const res = await fetch("../api/getSearch", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      media: get_store_value(media_type),
      page: "1",
      query: page.params.id
    })
  });
  const datas = await res.json();
  const data = await datas.res.results;
  const total_pages = await datas.res.total_pages;
  return { props: { data, total_pages } };
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { total_pages } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.total_pages === void 0 && $$bindings.total_pages && total_pages !== void 0)
    $$bindings.total_pages(total_pages);
  return `${validate_component(MainSection, "MainSection").$$render($$result, { data, total_pages }, {}, {})}`;
});
export { U5Bidu5D as default, load };
