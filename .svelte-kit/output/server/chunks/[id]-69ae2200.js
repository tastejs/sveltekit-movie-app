import { c as create_ssr_component, s as subscribe, b as escape, a as add_attribute, e as each, v as validate_component, d as set_store_value } from "./app-3d85ebcf.js";
import { a as media_type } from "./store-f8b67767.js";
import { P as ProgressBar, S as Spinner } from "./Spinner-d0149d04.js";
import { C as Cast, M as Modal } from "./Cast-f72476dd.js";
const IMAGE_API = "https://image.tmdb.org/t/p/";
const MovieMedia = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $media_type, $$unsubscribe_media_type;
  $$unsubscribe_media_type = subscribe(media_type, (value) => $media_type = value);
  let { movie_details } = $$props;
  let { trailer_id } = $$props;
  let { cast } = $$props;
  let modal;
  window.scrollTo({ top: -1e3, behavior: "smooth" });
  if ($$props.movie_details === void 0 && $$bindings.movie_details && movie_details !== void 0)
    $$bindings.movie_details(movie_details);
  if ($$props.trailer_id === void 0 && $$bindings.trailer_id && trailer_id !== void 0)
    $$bindings.trailer_id(trailer_id);
  if ($$props.cast === void 0 && $$bindings.cast && cast !== void 0)
    $$bindings.cast(cast);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${movie_details.id && trailer_id ? `<section id="${"media"}" class="${"text-skin-inverted xl:mt-5 bg-no-repeat bg-right-top bg-contain xl:bg-cover xl:rounded-2xl"}" style="${"background-image: url(" + escape(IMAGE_API) + "original/" + escape(movie_details.backdrop_path) + ")"}"><div class="${"bg-gradient-to-r xl:rounded-2xl"}" style="${"background-image: linear-gradient(to right, rgb(5, 69, 112) 150px, rgba(37, 137, 204, 0.84) 100%)"}"><div class="${"grid max-w-7xl xl:grid-cols-4 px-10 py-8 mx-auto xl:rounded-2xl"}"><div class="${"col-start-1 col-end-2 "}"><img class="${"h-96 w-64 xl:h-120 xl:w-80 overflow-hidden rounded-2xl mx-auto"}"${add_attribute("src", movie_details.poster_path ? IMAGE_API + "w500" + movie_details.poster_path : "/default.jpg", 0)} alt="${"movie poster"}"></div>
				<div class="${"xl:col-start-2 xl:col-end-5 flex flex-wrap content-start xl:pl-10"}"><div class="${"mt-6 xl:mt-0 w-full mb-6 flex flex-wrap"}"><h4 class="${"w-full xl:text-4xl"}">${escape(movie_details.title)}
							<span class="${"text-lg xl:text-4xl text-skin-inverted"}">${escape(movie_details.release_date ? movie_details.release_date.substring(0, 4) : "")}</span></h4>
						<div class="${"xl:flex"}"><div class="${"pl-0"}">${escape(movie_details.release_date ? movie_details.release_date : "No Date Available")}
								<span class="${"hidden xl:px-2 xl:inline"}">\u2022</span></div>
							<div>${each(movie_details.genres, ({ id, name }, i) => `<a class="${"hover:text-skin-selected"}" href="${"/genre/" + escape($media_type) + "/" + escape(id)}">${escape(name)}</a>
									${i !== movie_details.genres.length - 1 ? `<span class="${"mx-2"}">|</span>` : ``}`)}</div>
							${"runtime" in movie_details ? `<div class="${"duration"}"><span class="${"hidden xl:px-2 xl:inline"}">\u2022</span>${escape((movie_details.runtime - movie_details.runtime % 60) / 60)}h ${escape(movie_details.runtime % 60)}m
								</div>` : ``}</div></div>
					<div class="${"mb-5 w-full h-16 flex items-center justify-start"}">${movie_details.vote_average ? `<div class="${"bg-transparent inline-flex align-center justify-center transform -translate-x-5 scale-60"}">${validate_component(ProgressBar, "ProgressBar").$$render($$result, { progress: movie_details.vote_average }, {}, {})}</div>` : ``}
						${trailer_id !== 999 ? `<div class="${"transform -translate-x-10 flex pl-5 cursor-pointer hover:opacity-80"}"><i class="${"flex items-center fa fa-play fa-2x"}" aria-hidden="${"true"}"></i>
								<p class="${"flex justify-center ml-4 text-2xl items-center"}">Play Trailer</p></div>` : `<div class="${"flex pl-5"}"><p class="${"flex justify-center ml-4"}">No Trailer Available</p></div>`}</div>
					<div class="${"w-full"}"><div class="${"text-lg italic opacity-70"}">${escape(movie_details.tagline)}</div>
						<h4 class="${"my-2 w-full font-semibold"}">Overview</h4>
						<div class="${"overview-details"}">${escape(movie_details.overview)}</div></div></div></div></div></section>

	${validate_component(Cast, "Cast").$$render($$result, { cast }, {}, {})}

	${trailer_id !== 999 ? `${validate_component(Modal, "Modal").$$render($$result, { trailer_id, this: modal }, {
      this: ($$value) => {
        modal = $$value;
        $$settled = false;
      }
    }, {})}` : ``}` : `${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}`}`;
  } while (!$$settled);
  $$unsubscribe_media_type();
  return $$rendered;
});
const load = async ({ page, fetch }) => {
  const res = await fetch("../api/getMovie", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ media: "movie", id: page.params.id })
  });
  const datas = await res.json();
  const movie_details = await datas.res;
  const trailer = await fetch("../api/getTrailer", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ media: "movie", id: page.params.id })
  });
  const trailer_details = await trailer.json();
  const trailer_id = await trailer_details.res.results.length ? trailer_details.res.results[0].key : 999;
  const resp = await fetch("../../api/getCast", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ media: "movie", id: page.params.id })
  });
  const casts = await resp.json();
  const cast = await casts.res.cast;
  return {
    props: { movie_details, trailer_id, cast }
  };
};
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $media_type, $$unsubscribe_media_type;
  $$unsubscribe_media_type = subscribe(media_type, (value) => $media_type = value);
  let { movie_details } = $$props;
  let { trailer_id } = $$props;
  let { cast } = $$props;
  set_store_value(media_type, $media_type = "movie", $media_type);
  if ($$props.movie_details === void 0 && $$bindings.movie_details && movie_details !== void 0)
    $$bindings.movie_details(movie_details);
  if ($$props.trailer_id === void 0 && $$bindings.trailer_id && trailer_id !== void 0)
    $$bindings.trailer_id(trailer_id);
  if ($$props.cast === void 0 && $$bindings.cast && cast !== void 0)
    $$bindings.cast(cast);
  $$unsubscribe_media_type();
  return `${movie_details && trailer_id ? `${validate_component(MovieMedia, "MovieMedia").$$render($$result, { movie_details, trailer_id, cast }, {}, {})}` : `${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}`}`;
});
export { U5Bidu5D as default, load };
