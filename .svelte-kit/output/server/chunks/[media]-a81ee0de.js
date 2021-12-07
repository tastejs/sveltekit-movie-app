import { g as get_store_value, c as create_ssr_component, s as subscribe, d as set_store_value, v as validate_component } from "./app-3d85ebcf.js";
import { a as media_type, s as selected, c as current_page } from "./store-f8b67767.js";
import { M as MainSection } from "./MainSection-866f73c3.js";
import { p as page } from "./stores-544eaed2.js";
import "./Spinner-d0149d04.js";
async function load({ fetch, page: page2 }) {
  const res = await fetch("../../api/getShow", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      media: page2.params.media,
      page: get_store_value(current_page)
    })
  });
  const datas = await res.json();
  const data = await datas.res.results;
  const total_pages = await datas.res.total_pages;
  return { props: { data, total_pages } };
}
const U5Bmediau5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selected, $$unsubscribe_selected;
  let $page, $$unsubscribe_page;
  let $media_type, $$unsubscribe_media_type;
  $$unsubscribe_selected = subscribe(selected, (value) => $selected = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_media_type = subscribe(media_type, (value) => $media_type = value);
  let { data } = $$props;
  let { total_pages } = $$props;
  set_store_value(media_type, $media_type = $page.params.media, $media_type);
  set_store_value(selected, $selected = null, $selected);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.total_pages === void 0 && $$bindings.total_pages && total_pages !== void 0)
    $$bindings.total_pages(total_pages);
  $$unsubscribe_selected();
  $$unsubscribe_page();
  $$unsubscribe_media_type();
  return `${validate_component(MainSection, "MainSection").$$render($$result, { data, total_pages }, {}, {})}`;
});
export { U5Bmediau5D as default, load };
