import { c as create_ssr_component, a as add_attribute, b as escape, e as each, s as subscribe, v as validate_component } from "./app-3d85ebcf.js";
import { p as page } from "./stores-544eaed2.js";
const IMAGE_API = "https://image.tmdb.org/t/p/original";
const Episode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { episode_details } = $$props;
  if ($$props.episode_details === void 0 && $$bindings.episode_details && episode_details !== void 0)
    $$bindings.episode_details(episode_details);
  return `

<section id="${"episode"}"><div class="${"max-w-7xl mx-auto text-skin-base xl:mt-5 xl:mb-10 bg-skin-secondary xl:pl-5 pt-1 xl:rounded-2xl"}">${episode_details.id ? `<h4 class="${"pb-8"}">Episode Information</h4>
			<div class="${"flex"}" pt-3><div class="${"flex flex-col xl:flex-row pb-4"}"><div class="${"flex mx-auto max-h-full max-w-full xl:m-0 xl:flex-none xl:w-80 xl:h-44 xl:items-start"}"><img class="${"flex xl:w-80 xl:h-44 items-start"}"${add_attribute("src", episode_details.still_path ? IMAGE_API + episode_details.still_path : "/default.jpg", 0)} alt="${"episode"}"></div>

					<div class="${"ml-2 block"}"><h4>Season: ${escape(episode_details.season_number)} Episode: ${escape(episode_details.episode_number)}</h4>
						<h4>Episode Name: ${escape(episode_details.name)}</h4>
						<hr>
						<h6>Air Date: ${escape(episode_details.air_date)}</h6>
						<h6>Overview:</h6>
						<h6 class="${"flex-1 pr-8 text-skin-muted mb-4"}">${escape(episode_details.overview)}</h6></div></div></div>

			${episode_details.guest_stars.length ? `<div><h3>Guest Stars</h3>
					<div class="${"text-skin-base flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden relative"}">${each(episode_details.guest_stars, (guest_star) => `<div class="${"w-40 h-72 flex-shrink-0 rounded mb-2 relative bg-secondary m-0.5 sm:mr-3 hover:bg-selected"}"><a class="${"rounded w-28"}"${add_attribute("href", `/person/${guest_star.id}`, 0)}><img class="${"flex xl:w-40 xl: h-60 items-start"}"${add_attribute("src", guest_star.profile_path ? IMAGE_API + guest_star.profile_path : "/default.jpg", 0)} alt="${"episode"}"></a>
								<p>Character ${escape(guest_star.character)}</p>
								<p>Name ${escape(guest_star.name)}</p>
							</div>`)}</div></div>` : ``}

			${episode_details.crew.length ? `<div><h3>Crew</h3>
					<div class="${"text-skin-base flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden relative"}">${each(episode_details.crew, (crew_member) => `<div class="${"w-40 h-72 flex-shrink-0 rounded mb-2 relative bg-secondary m-0.5 sm:mr-3 hover:bg-selected"}"><a class="${"rounded w-28"}"${add_attribute("href", `/person/${crew_member.id}`, 0)}><img class="${"flex xl:w-40 xl: h-60 items-start"}"${add_attribute("src", crew_member.profile_path ? IMAGE_API + crew_member.profile_path : "/default.jpg", 0)} alt="${"episode"}"></a>
								<p>${escape(crew_member.job)}</p>
								<p>${escape(crew_member.name)}</p>
							</div>`)}</div></div>` : ``}` : ``}</div></section>




`;
});
async function load({ fetch, page: page2 }) {
  const res = await fetch("../../../api/getEpisode", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      id: page2.params.id,
      season_number: page2.params.season_number,
      episode_number: page2.params.episode_number
    })
  });
  const datas = await res.json();
  const episode_details = await datas.res;
  return { props: { episode_details } };
}
const U5Bepisode_numberu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { episode_details } = $$props;
  if ($$props.episode_details === void 0 && $$bindings.episode_details && episode_details !== void 0)
    $$bindings.episode_details(episode_details);
  $$unsubscribe_page();
  return `${validate_component(Episode, "Episode").$$render($$result, { episode_details }, {}, {})}`;
});
export { U5Bepisode_numberu5D as default, load };
