import { c as create_ssr_component, e as each, a as add_attribute, b as escape, v as validate_component, s as subscribe, d as set_store_value } from "./app-3d85ebcf.js";
import { a as media_type } from "./store-f8b67767.js";
import { p as page } from "./stores-544eaed2.js";
const IMAGE_API$1 = "https://image.tmdb.org/t/p/w300";
function isMovie(x) {
  return x.media_type === "movie";
}
function isTv(x) {
  return x.media_type === "tv";
}
const KnownFor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { knownFor } = $$props;
  let films = [];
  let tv = [];
  films = knownFor.filter(isMovie);
  tv = knownFor.filter(isTv);
  films.sort((a, b) => a.release_date > b.release_date ? -1 : 1);
  tv.sort((a, b) => a.first_air_date > b.first_air_date ? -1 : 1);
  if ($$props.knownFor === void 0 && $$bindings.knownFor && knownFor !== void 0)
    $$bindings.knownFor(knownFor);
  return `<section id="${"known-for"}" class="${"grid mx-auto"}">${films ? `<h3 class="${"flex xl:inline-block justify-center xl:justify-start xl:my-5 text-2xl font-bold"}">Movies
			</h3>
			<div class="${"text-skin-base flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden relative"}">${each(films, (movie) => `<div class="${"w-28 h-56 flex-shrink-0 rounded mb-2 relative bg-secondary m-0.5 sm:mr-3 hover:bg-selected"}"><a class="${"rounded w-28"}"${add_attribute("href", `/movie/${movie.id}`, 0)}><img class="${"object-cover w-28 h-44 rounded-t"}"${add_attribute("src", movie.poster_path ? IMAGE_API$1 + movie.poster_path : "/default.jpg", 0)}${add_attribute("alt", movie.title, 0)}>
							<div class="${"w-28 h-12 p-0.5"}"><p class="${"text-xs text-center flex justify-center items-center line-clamp-2"}">${escape(movie.title)}</p>
								<p class="${"text-xs text-center flex justify-center items-center"}">${escape(movie.release_date ? movie.release_date.substring(0, 4) : "")}</p>
							</div></a>
					</div>`)}</div>` : ``}
		${tv ? `<h3 class="${"flex xl:inline-block justify-center xl:justify-start xl:my-5 text-2xl font-bold"}">TV
			</h3>
			<div class="${"flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden relative"}">${each(tv, (show) => `<div class="${"w-28 h-56 flex-shrink-0 rounded mb-2 relative bg-secondary m-0.5 sm:mr-3 hover:bg-selected"}"><a class="${"rounded w-28"}"${add_attribute("href", `/tv/${show.id}`, 0)}><img class="${"object-cover w-28 h-44 rounded-t"}"${add_attribute("src", show.poster_path ? IMAGE_API$1 + show.poster_path : "/default.jpg", 0)}${add_attribute("alt", show.name, 0)}>
							<div class="${"w-28 h-12 p-0.5"}"><p class="${"text-xs text-center flex justify-center items-center line-clamp-2"}">${escape(show.name)}</p>
								<p class="${"text-xs text-center flex justify-center items-center "}">${escape(show.first_air_date ? show.first_air_date.substring(0, 4) : "")}</p>
							</div></a>
					</div>`)}</div>` : ``}</section>`;
});
const IMAGE_API = "https://image.tmdb.org/t/p/w500/";
const Person = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { person } = $$props;
  let { knownFor } = $$props;
  if ($$props.person === void 0 && $$bindings.person && person !== void 0)
    $$bindings.person(person);
  if ($$props.knownFor === void 0 && $$bindings.knownFor && knownFor !== void 0)
    $$bindings.knownFor(knownFor);
  return `<section id="${"person"}" class="${"xl:rounded-2xl mx-auto max-w-7xl xl:pb-20 xl:mt-5"}"><div class="${"grid xl:grid-cols-5 xl:grid-rows-auto xl:auto-rows-fr"}"><div class="${"xl:rounded-2xl bg-skin-secondary w-full xl:p-2 xl:col-start-1 xl:col-end-2 xl:row-start-1 xl:row-end-3 mx-auto"}">${person.profile_path ? `<img class="${"mt-4 xl:mt-0 xl:pt-0 w-64 h-96 rounded-2xl mx-auto"}"${add_attribute("src", IMAGE_API + person.profile_path, 0)} alt="${"profile"}">` : `<img class="${"mt-4 xl:pt-0 flex justify-end w-64 h-96 rounded-2xl mx-auto"}" src="${"/person.svg"}" alt="${"profile"}">`}
			<h4 class="${"mt-2 w-full text-skin-base text-center mx-auto xl:hidden"}">${escape(person.name)}</h4>
			<div class="${"text-skin-base pl-8 w-full xl:p-3"}"><h4 class="${"xl:text-2xl mt-2"}">Personal Info</h4>
				<h6 class="${"xl:text-lg font-bold mt-4 mb-1"}">Known For</h6>
				<p class="${"text-skin-muted xl:text-base"}">${escape(person.known_for_department)}</p>
				<h6 class="${"xl:text-lg font-bold mt-4 mb-1"}">Gender</h6>
				${person.gender === 2 ? `<p class="${"text-skin-muted xl:text-base"}">Male</p>` : `<p class="${"text-skin-muted xl:text-base"}">Female</p>`}
				<h6 class="${"xl:text-lg font-bold mt-4 mb-1"}">Birthdate</h6>
				${person.birthday ? `<p class="${"text-skin-muted xl:text-base"}">${escape(person.birthday)}</p>` : `<p class="${"text-skin-muted xl:text-base"}">Unknown</p>`}
				<h6 class="${"xl:text-lg font-bold mt-4 mb-1"}">Place of Birth</h6>
				${person.place_of_birth ? `<p class="${"text-skin-muted xl:text-base"}">${escape(person.place_of_birth)}</p>` : `<p class="${"text-skin-muted xl:text-base"}">Unknown</p>`}
				${person.also_known_as && person.also_known_as.length ? `<h4 class="${"mt-4 mb-1"}">Also Known As</h4>
					${each(person.also_known_as, (alias) => `<p class="${"text-skin-muted xl:text-base"}">${escape(alias)}</p>`)}` : ``}</div></div>

		<div class="${"bg-skin-tertiary xl:rounded-2xl text-skin-base xl:col-start-2 xl:col-end-6 xl:row-start-1 xl:row-end-2 xl:ml-5 xl:mb-5"}"><div class="${"mb-2 xl:mb-4 relative bg-primary xl:ml-5 p-3.5 rounded-2xl"}"><h4 class="${"xl:text-2xl hidden xl:inline-block"}">${escape(person.name)}</h4>
				<h6 class="${"xl:text-lg font-bold mt-4 mb-1"}">Biography</h6>
				<p class="${"text-skin-muted xl:text-base"}">${escape(person.biography)}</p></div></div>
		<div class="${"bg-skin-tertiary rounded-2xl text-skin-base xl:col-start-2 xl:col-end-6 xl:row-start-2 xl:row-end-3 xl:bg-primary xl:ml-5 xl:p-3.5"}"><div class="${"pt-8"}"><h4 class="${"xl:text-2xl pl-3.5 xl:pl-0"}">Known For</h4>
				${validate_component(KnownFor, "KnownFor").$$render($$result, { knownFor }, {}, {})}</div></div></div></section>`;
});
const load = async ({ page: page2, fetch }) => {
  const res = await fetch("../api/getMovie", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ media: "person", id: page2.params.id })
  });
  const datas = await res.json();
  const person = await datas.res;
  const resp = await fetch("../api/getKnownFor", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ person: page2.params.id })
  });
  const data = await resp.json();
  const knownFor = data.res.cast;
  return { props: { person, knownFor } };
};
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $media_type, $$unsubscribe_media_type;
  let $$unsubscribe_page;
  $$unsubscribe_media_type = subscribe(media_type, (value) => $media_type = value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  set_store_value(media_type, $media_type = "person", $media_type);
  let { person } = $$props;
  let { knownFor } = $$props;
  if ($$props.person === void 0 && $$bindings.person && person !== void 0)
    $$bindings.person(person);
  if ($$props.knownFor === void 0 && $$bindings.knownFor && knownFor !== void 0)
    $$bindings.knownFor(knownFor);
  $$unsubscribe_media_type();
  $$unsubscribe_page();
  return `
	
	${validate_component(Person, "Person").$$render($$result, { person, knownFor }, {}, {})}`;
});
export { U5Bidu5D as default, load };
