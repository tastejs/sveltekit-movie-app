import { c as create_ssr_component, s as subscribe, a as add_attribute, b as escape, v as validate_component, e as each, f as set_store_value, h as createEventDispatcher, o as onDestroy } from "./app-14a936dc.js";
import { a as media_type, d as data, b as show_name, c as current_page } from "./store-cc224516.js";
import { P as ProgressBar } from "./ProgressBar-607c37c9.js";
const IMAGE_API$2 = "https://image.tmdb.org/t/p/w300";
const MovieCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $media_type, $$unsubscribe_media_type;
  $$unsubscribe_media_type = subscribe(media_type, (value) => $media_type = value);
  let { datum } = $$props;
  if ($$props.datum === void 0 && $$bindings.datum && datum !== void 0)
    $$bindings.datum(datum);
  $$unsubscribe_media_type();
  return `<section id="${"movie-card"}" class="${"group perspective-1000 w-44 xl:w-60 my-0.5 xl:my-2 xl:rounded-lg"}"><div class="${"relative preserve-3d w-full duration-700 group-hover:rotate-y-180"}"><div class="${"backface-hidden top-0 right-0 text-skin-base bg-skin-bg xl:rounded-lg"}"><img class="${"oject-cover w-44 h-64 xl:w-60 xl:h-90 xl:rounded-t-lg text-skin-muted "}"${add_attribute("src", datum.poster_path ? IMAGE_API$2 + datum.poster_path : "/default.jpg", 0)}${add_attribute("alt", datum.title, 0)}>
			<div class="${"p-2 xl:ml-4"}"><h6 class="${"text-sm xl:text-lg text-skin-base w-40 xl:w-52 whitespace-nowrap overflow-hidden overflow-ellipsis"}">${escape(datum.title)}</h6>
				<h6 class="${"xl:text-lg font-bold"}">${escape(datum.release_date ? datum.release_date.substring(0, 4) : "-")}</h6></div>
			<div class="${"transform scale-44 origin-top-left absolute left-1 top-56 xl:top-80"}">${validate_component(ProgressBar, "ProgressBar").$$render($$result, { progress: datum.vote_average }, {}, {})}</div></div>
		<a class="${"w-full backface-hidden text-skin-base top-0 right-0 bg-skin-bg rounded-lg absolute bottom-0 text-decoration-none rotate-y-180 p-2 h-full ease-in-out movie-back text-sm overflow-auto duration-300 z-10"}"${add_attribute("href", `/${$media_type}/${datum.id}`, 0)}><h6 class="${"mt-1 xl:text-xl uppercase text-skin-base bg-secondary rounded"}">Overview</h6>
			<p class="${"md:text-base mt-1"}">${escape(datum.overview)}</p></a></div></section>`;
});
const Skeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${each(Array(20), (_) => `<section id="${"movie-card"}" class="${"w-44 xl:h-108 xl:w-60 my-0.5 xl:my-2 xl:rounded-lg"}"><div class="${"top-0 right-0 text-textDark bg-skin-bg xl:rounded-lg"}"><div class="${"w-44 h-64 xl:w-60 xl:h-90 xl:rounded-t-lg bg-skin-muted"}"></div>
			<div class="${"py-4 xl:ml-6 h-18 w-44 xl:w-60"}"><div class="${"w-28 xl:w-40 h-5 bg-skin-muted rounded"}"></div>
				<div class="${"mt-2 w-20 xl:w-26 h-5 bg-skin-muted rounded"}"></div>
			</div></div>
	</section>`)}`;
});
const MovieList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $data, $$unsubscribe_data;
  $$unsubscribe_data = subscribe(data, (value) => $data = value);
  $$unsubscribe_data();
  return `<section id="${"movie-list"}" class="${"bg-skin-tertiary flex flex-wrap justify-around max-w-7xl mx-auto xl:mt-2 xl:rounded-2xl"}">${$data ? `${each($data, (datum) => `${validate_component(MovieCard, "MovieCard").$$render($$result, { datum }, {}, {})}`)}` : `${validate_component(Skeleton, "Skeleton").$$render($$result, {}, {}, {})}`}</section>`;
});
const IMAGE_API$1 = "https://image.tmdb.org/t/p/w300";
const TvCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $show_name, $$unsubscribe_show_name;
  let $media_type, $$unsubscribe_media_type;
  $$unsubscribe_show_name = subscribe(show_name, (value) => $show_name = value);
  $$unsubscribe_media_type = subscribe(media_type, (value) => $media_type = value);
  let { datum } = $$props;
  set_store_value(show_name, $show_name = datum.name, $show_name);
  if ($$props.datum === void 0 && $$bindings.datum && datum !== void 0)
    $$bindings.datum(datum);
  $$unsubscribe_show_name();
  $$unsubscribe_media_type();
  return `<section id="${"tv-card"}" class="${"group perspective-1000 w-44 xl:w-60 my-0.5 xl:my-2 xl:rounded-lg"}"><div class="${"relative preserve-3d w-full duration-700 group-hover:rotate-y-180"}"><div class="${"backface-hidden top-0 right-0 text-skin-base bg-skin-bg xl:rounded-lg"}"><img class="${"oject-cover w-44 h-64 xl:w-60 xl:h-90 xl:rounded-t-lg text-skin-muted "}"${add_attribute("src", datum.poster_path ? IMAGE_API$1 + datum.poster_path : "/default.jpg", 0)}${add_attribute("alt", datum.name, 0)}>
			<div class="${"p-2 xl:ml-4"}"><h6 class="${"text-sm xl:text-lg text-skin-base w-40 xl:w-52 whitespace-nowrap overflow-hidden overflow-ellipsis"}">${escape(datum.name ? datum.name : " ")}</h6>
				<h6 class="${"xl:text-lg font-bold"}">${escape(datum.first_air_date ? datum.first_air_date.substring(0, 4) : "-")}</h6></div>
			<div class="${"transform scale-44 origin-top-left absolute left-1 top-56 xl:top-80"}">${validate_component(ProgressBar, "ProgressBar").$$render($$result, { progress: datum.vote_average }, {}, {})}</div></div>
		<a class="${"w-full backface-hidden text-skin-base top-0 right-0 bg-skin-bg rounded-lg absolute bottom-0 text-decoration-none rotate-y-180 p-2 h-full ease-in-out movie-back text-sm overflow-auto duration-300 z-10"}"${add_attribute("href", `/${$media_type}/${datum.id}`, 0)}><h6 class="${"mt-1 xl:text-xl uppercase text-skin-base bg-secondary rounded"}">Overview</h6>
			<p class="${"md:text-base mt-1"}">${escape(datum.overview)}</p></a></div></section>`;
});
const TvList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $data, $$unsubscribe_data;
  $$unsubscribe_data = subscribe(data, (value) => $data = value);
  $$unsubscribe_data();
  return `<section id="${"movie-list"}" class="${"bg-skin-tertiary flex flex-wrap justify-around max-w-7xl mx-auto xl:mt-2 xl:rounded-2xl"}">${$data ? `${each($data, (datum) => `${validate_component(TvCard, "TvCard").$$render($$result, { datum }, {}, {})}`)}` : `${validate_component(Skeleton, "Skeleton").$$render($$result, {}, {}, {})}`}</section>`;
});
const IMAGE_API = "https://image.tmdb.org/t/p/w500";
const PersonCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { datum } = $$props;
  if ($$props.datum === void 0 && $$bindings.datum && datum !== void 0)
    $$bindings.datum(datum);
  return `<section id="${"person-card"}" class="${"w-44 xl:h-108 xl:w-60 my-0.5 xl:my-2 bg-skin-bg xl:rounded-lg"}"><a${add_attribute("href", `/person/${datum.id}`, 0)} class="${"top-0 right-0 text-skin-base xl:rounded-lg"}"><img class="${"oject-cover w-44 h-64 xl:w-60 xl:h-90 xl:rounded-t-lg text-skin-base"}"${add_attribute("src", datum.profile_path === null ? "/person.svg" : IMAGE_API + datum.profile_path, 0)}${add_attribute("alt", datum.name, 0)}>
		<div class="${"p-2 h-18 w-44 xl:w-60 bg-skin-bg"}"><h6 class="${"text-sm xl:text-lg text-textDark w-40 xl:w-52 whitespace-nowrap overflow-hidden overflow-ellipsis"}">${escape(datum.name)}</h6></div></a></section>`;
});
const PersonList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $data, $$unsubscribe_data;
  $$unsubscribe_data = subscribe(data, (value) => $data = value);
  $$unsubscribe_data();
  return `<section id="${"person-list"}" class="${"bg-skin-tertiary flex flex-wrap justify-around max-w-7xl xl:mt-2 mx-auto xl:rounded-2xl"}">${$data ? `${each($data, (datum) => `${validate_component(PersonCard, "PersonCard").$$render($$result, { datum }, {}, {})}`)}` : `${validate_component(Skeleton, "Skeleton").$$render($$result, {}, {}, {})}`}</section>`;
});
const InfiniteScroll = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let component;
  onDestroy(() => {
  });
  return `<div id="${"svelte-infinite-scroll"}" class="${"w-0"}"${add_attribute("this", component, 0)}></div>`;
});
const MainSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $current_page, $$unsubscribe_current_page;
  let $$unsubscribe_data;
  let $media_type, $$unsubscribe_media_type;
  $$unsubscribe_current_page = subscribe(current_page, (value) => $current_page = value);
  $$unsubscribe_data = subscribe(data, (value) => value);
  $$unsubscribe_media_type = subscribe(media_type, (value) => $media_type = value);
  let { total_pages = 1 } = $$props;
  let { genres = void 0 } = $$props;
  if ($$props.total_pages === void 0 && $$bindings.total_pages && total_pages !== void 0)
    $$bindings.total_pages(total_pages);
  if ($$props.genres === void 0 && $$bindings.genres && genres !== void 0)
    $$bindings.genres(genres);
  $$unsubscribe_current_page();
  $$unsubscribe_data();
  $$unsubscribe_media_type();
  return `<section id="${"main"}" class="${"h-full"}">

	${$media_type === "person" ? `${validate_component(PersonList, "PersonList").$$render($$result, {}, {}, {})}` : `${$media_type === "movie" ? `${validate_component(MovieList, "MovieList").$$render($$result, {}, {}, {})}` : `${$media_type === "tv" ? `${validate_component(TvList, "TvList").$$render($$result, {}, {}, {})}` : ``}`}`}

	${$current_page < total_pages ? `${validate_component(InfiniteScroll, "InfiniteScroll").$$render($$result, {}, {}, {})}` : ``}</section>`;
});
export { MainSection as M };
