import { c as create_ssr_component, a as add_attribute, b as escape } from "./app-14a936dc.js";
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
export { ProgressBar as P };
