import { c as create_ssr_component, b as escape } from "./app-14a936dc.js";
var __error_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-be3lyz,p.svelte-be3lyz{margin:0 auto}h1.svelte-be3lyz{font-size:2.8em;font-weight:700;margin:0 0 .5em}p.svelte-be3lyz{margin:1em auto}@media(min-width:480px){h1.svelte-be3lyz{font-size:4em}}",
  map: null
};
function load({ error, status }) {
  return { props: { error, status } };
}
const _error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status } = $$props;
  let { error } = $$props;
  const offline = typeof navigator !== "undefined" && navigator.onLine === false;
  const title = offline ? "Offline" : status;
  const message = offline ? "Find the internet and try again" : error.message;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>${escape(title)}</title>`, ""}`, ""}

<h1 class="${"svelte-be3lyz"}">${escape(title)}</h1>

<p class="${"svelte-be3lyz"}">${escape(message)}</p>

${error.stack ? `
	<h2>This page does not exist</h2>

	<pre>${escape(error.stack)}</pre>` : ``}`;
});
export { _error as default, load };
