import { c as create_ssr_component, b as escape, e as each, a as add_attribute } from "./app-3d85ebcf.js";
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { trailer_id } = $$props;
  let shown = false;
  function show() {
    shown = true;
  }
  function hide() {
    shown = false;
  }
  if ($$props.trailer_id === void 0 && $$bindings.trailer_id && trailer_id !== void 0)
    $$bindings.trailer_id(trailer_id);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.hide === void 0 && $$bindings.hide && hide !== void 0)
    $$bindings.hide(hide);
  return `${shown ? `<section id="${"trailer"}" class="${"top-0 left-0 bottom-0 right-0 bg-gray-800 bg-opacity-60 fixed z-50"}"><div class="${"absolute top-0 left-0 w-full h-full bg-contain"}"><iframe class="${"iframe absolute top-0 left-0 w-full h-full bg-contain"}" title="${"Trailer"}" src="${"https://www.youtube.com/embed/" + escape(trailer_id) + "?rel=0"}" allow="${"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen><track default kind="${"captions"}"></iframe></div>

		<div class="${"close absolute top-1 left-1 text-red-900 text-4xl xl:text-5xl hover:font-bold"}"><i class="${"fa fa-window-close"}" aria-hidden="${"true"}"></i></div></section>` : ``}`;
});
const IMAGE_API = "https://image.tmdb.org/t/p/w200/";
const Cast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cast = [] } = $$props;
  if ($$props.cast === void 0 && $$bindings.cast && cast !== void 0)
    $$bindings.cast(cast);
  return `${cast.length ? `<section id="${"people"}" class="${"max-w-7xl mx-auto xl:mt-5 xl:mb-10 bg-skin-secondary xl:pl-5 pt-1 xl:rounded-2xl"}"><h3 class="${"text-skin-base flex xl:inline-block justify-center xl:justify-start xl:my-5 text-2xl font-bold"}">Top Billed Cast
		</h3>
		<div class="${"flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden relative"}">${each(cast, (person) => `<div class="${"w-28 flex-shrink-0 mb-2 rounded relative bg-skin-primary m-0.5 sm:mr-3 hover:bg-selected"}"><a${add_attribute("href", `/person/${person.id}`, 0)}><div class="${"w-28 h-42 bg-blue-900"}">${person.profile_path ? `<img class="${"w-28 h-42 rounded-t"}"${add_attribute("src", IMAGE_API + person.profile_path, 0)} alt="${"profile"}">` : `<img class="${"pt-8 flex justify-end items-end w-28 h-42 bottom-0 rounded-t"}" src="${"/person.svg"}" alt="${"profile"}">`}</div>
						<p class="${"text-center flex justify-center items-center text-skin-base font-semibold line-clamp-1 xl:line-clamp-2"}">${escape(person.character)}</p>
						<p class="${"text-center flex justify-center items-center text-skin-muted line-clamp-1 xl:line-clamp-2"}">${escape(person.name)}
						</p></a>
				</div>`)}</div></section>` : ``}`;
});
export { Cast as C, Modal as M };
