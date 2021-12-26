import { c as create_ssr_component, e as each, a as add_attribute, b as escape, s as subscribe, f as set_store_value, v as validate_component } from "./app-14a936dc.js";
import { e as show_id, f as season_count, b as show_name, a as media_type } from "./store-cc224516.js";
import { P as ProgressBar } from "./ProgressBar-607c37c9.js";
import { C as Cast, M as Modal, S as Spinner } from "./Cast-31f4e4f3.js";
import { p as page } from "./stores-bd543f9c.js";
const IMAGE_API$1 = "https://www.themoviedb.org/t/p/original";
const Seasons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tv_details } = $$props;
  let { movie_id } = $$props;
  if ($$props.tv_details === void 0 && $$bindings.tv_details && tv_details !== void 0)
    $$bindings.tv_details(tv_details);
  if ($$props.movie_id === void 0 && $$bindings.movie_id && movie_id !== void 0)
    $$bindings.movie_id(movie_id);
  return `<section id="${"Seasons"}"><div class="${"max-w-7xl mx-auto text-skin-base xl:mt-5 xl:mb-10 bg-skin-secondary xl:pl-5 pt-1 pb-1 xl:rounded-2xl"}"><h4 class="${"pb-2"}">Season Information</h4>
		${each(tv_details.seasons, (episode) => `<div class="${"bg-skin-primary flex flex-col xl:flex-row m-4 p-2 rounded-lg"}"><a${add_attribute("href", `/seasons/${movie_id}/${episode.season_number}`, 0)} class="${"flex flex-col xl:flex-row text-skin-base xl:rounded-lg"}"><div class="${"flex mx-auto max-h-full max-w-full xl:m-0 xl:flex-none xl:w-40 xl:h-60 xl:items-start"}"><img class="${"flex xl:w-40 xl: h-60 items-start"}"${add_attribute("src", episode.poster_path ? IMAGE_API$1 + episode.poster_path : "/default.jpg", 0)} alt="${"episode"}"></div>
					<div class="${"justify-self-center ml-2 block xl:justify-start"}"><h4>${escape(episode.name)}</h4>
						<h6>Air Date: ${escape(episode.air_date)}</h6>
						<h6>Overview:</h6>
						<h6 class="${"flex-1 pr-8 text-skin-muted mb-4"}">${escape(episode.overview)}</h6>
					</div></a>
			</div>`)}</div>

	
	</section>`;
});
const IMAGE_API = "https://image.tmdb.org/t/p/";
const TvMedia = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $show_id, $$unsubscribe_show_id;
  let $season_count, $$unsubscribe_season_count;
  let $show_name, $$unsubscribe_show_name;
  let $media_type, $$unsubscribe_media_type;
  $$unsubscribe_show_id = subscribe(show_id, (value) => $show_id = value);
  $$unsubscribe_season_count = subscribe(season_count, (value) => $season_count = value);
  $$unsubscribe_show_name = subscribe(show_name, (value) => $show_name = value);
  $$unsubscribe_media_type = subscribe(media_type, (value) => $media_type = value);
  let { tv_details } = $$props;
  let { trailer_id } = $$props;
  let { movie_id } = $$props;
  let { cast } = $$props;
  set_store_value(show_name, $show_name = tv_details.name, $show_name);
  set_store_value(season_count, $season_count = tv_details.number_of_seasons, $season_count);
  set_store_value(show_id, $show_id = tv_details.id, $show_id);
  let modal;
  window.scrollTo({ top: -1e3, behavior: "smooth" });
  if ($$props.tv_details === void 0 && $$bindings.tv_details && tv_details !== void 0)
    $$bindings.tv_details(tv_details);
  if ($$props.trailer_id === void 0 && $$bindings.trailer_id && trailer_id !== void 0)
    $$bindings.trailer_id(trailer_id);
  if ($$props.movie_id === void 0 && $$bindings.movie_id && movie_id !== void 0)
    $$bindings.movie_id(movie_id);
  if ($$props.cast === void 0 && $$bindings.cast && cast !== void 0)
    $$bindings.cast(cast);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${tv_details.id && trailer_id ? `<section id="${"media"}" class="${"text-skin-inverted xl:mt-5 bg-no-repeat bg-right-top bg-contain xl:bg-cover xl:rounded-2xl"}" style="${"background-image: url(" + escape(IMAGE_API) + "original/" + escape(tv_details.backdrop_path) + ")"}"><div class="${"bg-gradient-to-r xl:rounded-2xl"}" style="${"background-image: linear-gradient(to right, rgb(5, 69, 112) 150px, rgba(37, 137, 204, 0.84) 100%)"}"><div class="${"grid max-w-7xl xl:grid-cols-4 px-10 py-8 mx-auto xl:rounded-2xl"}"><div class="${"col-start-1 col-end-2 "}"><img class="${"h-96 w-64 xl:h-120 xl:w-80 overflow-hidden rounded-2xl mx-auto"}"${add_attribute("src", tv_details.poster_path ? IMAGE_API + "w500" + tv_details.poster_path : "/default.jpg", 0)} alt="${"movie poster"}"></div>
				<div class="${"xl:col-start-2 xl:col-end-5 flex flex-wrap content-start xl:pl-10"}"><div class="${"mt-6 xl:mt-0 w-full mb-6 flex flex-wrap"}"><h4 class="${"w-full xl:text-4xl"}">${escape(tv_details.name)}
							<span class="${"text-lg xl:text-4xl text-skin-inverted"}">${escape(tv_details ? tv_details.first_air_date.substring(0, 4) : "")}</span></h4>
						<div class="${"xl:flex"}"><div class="${"pl-0"}">${escape("first_air_date" in tv_details ? tv_details.first_air_date : "No Date Available")}
								<span class="${"hidden xl:px-2 xl:inline"}">\u2022</span></div>
							<div>${each(tv_details.genres, ({ id, name }, i) => `<a class="${"hover:text-skin-selected"}" href="${"/genre/" + escape($media_type) + "/" + escape(id)}">${escape(name)}</a>
									${i !== tv_details.genres.length - 1 ? `<span class="${"mx-2"}">|</span>` : ``}`)}</div></div></div>
					<div class="${"mb-5 w-full h-16 flex items-center justify-start"}">${tv_details.vote_average ? `<div class="${"bg-transparent inline-flex align-center justify-center transform -translate-x-5 scale-60"}">${validate_component(ProgressBar, "ProgressBar").$$render($$result, { progress: tv_details.vote_average }, {}, {})}</div>` : ``}
						${trailer_id !== 999 ? `<div class="${"transform -translate-x-10 flex pl-5 cursor-pointer hover:opacity-80"}"><i class="${"flex items-center fa fa-play fa-2x"}" aria-hidden="${"true"}"></i>
								<p class="${"flex justify-center ml-4 text-2xl items-center"}">Play Trailer</p></div>` : `<div class="${"flex pl-5"}"><p class="${"flex justify-center ml-4"}">No Trailer Available</p></div>`}</div>
					<div class="${"w-full"}"><div class="${"text-lg italic opacity-70"}">${escape(tv_details.tagline)}</div>
						<h4 class="${"my-2 w-full font-semibold"}">Overview</h4>
						<div class="${"overview-details"}">${escape(tv_details.overview)}</div></div></div></div></div></section>

	${validate_component(Cast, "Cast").$$render($$result, { cast }, {}, {})}

	${trailer_id !== 999 ? `${validate_component(Modal, "Modal").$$render($$result, { trailer_id, this: modal }, {
      this: ($$value) => {
        modal = $$value;
        $$settled = false;
      }
    }, {})}` : ``}

	${$media_type === "tv" ? `${validate_component(Seasons, "Seasons").$$render($$result, { tv_details, movie_id }, {}, {})}` : ``}` : `${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}`}`;
  } while (!$$settled);
  $$unsubscribe_show_id();
  $$unsubscribe_season_count();
  $$unsubscribe_show_name();
  $$unsubscribe_media_type();
  return $$rendered;
});
async function load({ fetch, page: page2 }) {
  const res = await fetch("../api/getMovie", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ media: "tv", id: page2.params.id })
  });
  const datas = await res.json();
  const tv_details = await datas.res;
  const trailer = await fetch("../api/getTrailer", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ media: "tv", id: page2.params.id })
  });
  const trailer_details = await trailer.json();
  const trailer_id = await trailer_details.res.results.length ? trailer_details.res.results[0].key : 999;
  const resp = await fetch("../../api/getCast", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ media: "tv", id: page2.params.id })
  });
  const casts = await resp.json();
  const cast = await casts.res.cast;
  return { props: { tv_details, trailer_id, cast } };
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $media_type, $$unsubscribe_media_type;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_media_type = subscribe(media_type, (value) => $media_type = value);
  let { tv_details } = $$props;
  let { trailer_id } = $$props;
  let { cast } = $$props;
  set_store_value(media_type, $media_type = "tv", $media_type);
  let movie_id = $page.params.id;
  if ($$props.tv_details === void 0 && $$bindings.tv_details && tv_details !== void 0)
    $$bindings.tv_details(tv_details);
  if ($$props.trailer_id === void 0 && $$bindings.trailer_id && trailer_id !== void 0)
    $$bindings.trailer_id(trailer_id);
  if ($$props.cast === void 0 && $$bindings.cast && cast !== void 0)
    $$bindings.cast(cast);
  $$unsubscribe_page();
  $$unsubscribe_media_type();
  return `${validate_component(TvMedia, "TvMedia").$$render($$result, { tv_details, trailer_id, cast, movie_id }, {}, {})}`;
});
export { U5Bidu5D as default, load };
