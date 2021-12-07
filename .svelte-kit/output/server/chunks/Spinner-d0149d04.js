import { c as create_ssr_component, a as add_attribute, b as escape } from "./app-3d85ebcf.js";
const ProgressBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { progress } = $$props;
  let progress_percent;
  let canvas;
  if ($$props.progress === void 0 && $$bindings.progress && progress !== void 0)
    $$bindings.progress(progress);
  progress_percent = progress * 10;
  return `<section id="${"progress"}" class="${"bg-gray-900 block rounded-full align-center relative w-24 h-24"}"><div class="${"box"}"><div class="${"percent"}"><canvas class="${"w-24 h-24"}" width="${"98"}" height="${"98"}"${add_attribute("this", canvas, 0)}></canvas>
			<div class="${"absolute top-0 left-0 w-full h-full flex justify-center items-center"}"><h2 class="${"text-gray-200 text-3xl"}">${escape(progress_percent)}<span class="${"text-xl align-top"}">%</span></h2></div></div></div></section>`;
});
var Spinner_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-11hc8a6{-webkit-animation:svelte-11hc8a6-wave .8s ease-in-out infinite alternate;animation:svelte-11hc8a6-wave .8s ease-in-out infinite alternate}div.svelte-11hc8a6:first-of-type{-webkit-animation-delay:-.4s;animation-delay:-.4s}div.svelte-11hc8a6:nth-of-type(2){-webkit-animation-delay:-.2s;animation-delay:-.2s}@-webkit-keyframes svelte-11hc8a6-wave{0%{transform:translateY(-100%)}to{transform:translateY(100%)}}@keyframes svelte-11hc8a6-wave{0%{transform:translateY(-100%)}to{transform:translateY(100%)}}",
  map: null
};
const Spinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section id="${"spinner"}" class="${"w-full h-full m-auto"}"><section class="${"flex absolute items-center h-8 top-1/2 left-1/2 transform -translate-x-1/2 "}"><div class="${"inline-flex flex-nowrap flex-row items-center justify-between mx-auto w-12 svelte-11hc8a6"}"><div class="${"w-3 h-3 rounded-full bg-primary -translate-x-1/2 -translate-y-full svelte-11hc8a6"}"></div>
			<div class="${"w-3 h-3 rounded-full bg-primary -translate-x-1/2 -translate-y-full svelte-11hc8a6"}"></div>
			<div class="${"w-3 h-3 rounded-full bg-primary -translate-x-1/2 -translate-y-full svelte-11hc8a6"}"></div></div></section>
</section>`;
});
export { ProgressBar as P, Spinner as S };
