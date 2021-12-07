import { c as create_ssr_component, s as subscribe, d as set_store_value, v as validate_component } from "./app-3d85ebcf.js";
import { s as selected, a as media_type } from "./store-f8b67767.js";
import { M as MainSection } from "./MainSection-866f73c3.js";
import "./Spinner-d0149d04.js";
async function load({ fetch }) {
  const res = await fetch("./api/getShow", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ media: "movie", page: "1" })
  });
  const datas = await res.json();
  return { props: { datas } };
}
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selected, $$unsubscribe_selected;
  let $$unsubscribe_media_type;
  $$unsubscribe_selected = subscribe(selected, (value) => $selected = value);
  $$unsubscribe_media_type = subscribe(media_type, (value) => value);
  let { datas } = $$props;
  let data = datas.res.results;
  let total_pages = datas.res.total_pages;
  set_store_value(selected, $selected = null, $selected);
  if ($$props.datas === void 0 && $$bindings.datas && datas !== void 0)
    $$bindings.datas(datas);
  $$unsubscribe_selected();
  $$unsubscribe_media_type();
  return `${validate_component(MainSection, "MainSection").$$render($$result, { data, total_pages }, {}, {})}`;
});
export { Routes as default, load };
