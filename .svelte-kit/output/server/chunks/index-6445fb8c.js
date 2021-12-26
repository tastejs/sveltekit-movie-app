import { c as create_ssr_component, s as subscribe, f as set_store_value, v as validate_component } from "./app-14a936dc.js";
import { d as data, s as selected } from "./store-cc224516.js";
import { M as MainSection } from "./MainSection-8f5559a2.js";
import "./ProgressBar-607c37c9.js";
async function load({ fetch }) {
  data.set(void 0);
  const res = await fetch("./api/getShow", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ media: "movie", page: "1" })
  });
  const datas = await res.json();
  data.set(await datas.res.results);
  const total_pages = await datas.res.total_pages;
  return { props: { total_pages } };
}
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selected, $$unsubscribe_selected;
  $$unsubscribe_selected = subscribe(selected, (value) => $selected = value);
  let { total_pages } = $$props;
  set_store_value(selected, $selected = null, $selected);
  if ($$props.total_pages === void 0 && $$bindings.total_pages && total_pages !== void 0)
    $$bindings.total_pages(total_pages);
  $$unsubscribe_selected();
  return `${validate_component(MainSection, "MainSection").$$render($$result, { total_pages }, {}, {})}`;
});
export { Routes as default, load };
