import { c as create_ssr_component, e as each, a as add_attribute, b as escape, s as subscribe, v as validate_component } from "./app-14a936dc.js";
import { p as page } from "./stores-bd543f9c.js";
const IMAGE_API = "https://image.tmdb.org/t/p/w500/";
const Season = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { season_details } = $$props;
  let { tv_id } = $$props;
  if ($$props.season_details === void 0 && $$bindings.season_details && season_details !== void 0)
    $$bindings.season_details(season_details);
  if ($$props.tv_id === void 0 && $$bindings.tv_id && tv_id !== void 0)
    $$bindings.tv_id(tv_id);
  return `

<section id="${"season"}"><div class="${"max-w-7xl mx-auto text-skin-base xl:mt-5 xl:mb-10 bg-skin-secondary xl:pl-5 pt-1 pb-1 xl:rounded-2xl"}">${season_details.id ? `<h4 class="${"pb-2"}">Season Information</h4>
			${each(season_details.episodes, (episode) => `<div class="${"bg-skin-primary flex flex-col xl:flex-row m-4 p-2 rounded-lg"}"><a${add_attribute("href", `/episode/${tv_id}/${season_details.season_number}/${episode.episode_number}`, 0)} class="${"flex flex-col xl:flex-row text-skin-base xl:rounded-lg"}"><div class="${"flex mx-auto max-h-full max-w-full xl:m-0 xl:flex-none xl:w-80 xl:h-44 xl:items-start"}"><img class="${"flex xl:w-80 xl:h-44 items-start"}"${add_attribute("src", episode.still_path ? IMAGE_API + episode.still_path : "/default.jpg", 0)} alt="${"season"}"></div>
						<div class="${"ml-2 block"}"><h4>${escape(episode.name)}</h4>
							<h6>Air Date: ${escape(episode.air_date)}</h6>
							<h6>Overview:</h6>
							<h6 class="${"flex-1 pr-8 text-skin-muted mb-4"}">${escape(episode.overview)}</h6>
						</div></a>
				</div>`)}` : ``}</div>
	</section>`;
});
async function load({ fetch, page: page2 }) {
  const res = await fetch("../../api/getSeason", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      id: page2.params.id,
      season_number: page2.params.season_number
    })
  });
  const datas = await res.json();
  const season_details = await datas.res;
  return { props: { season_details } };
}
const U5Bseason_numberu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { season_details } = $$props;
  let tv_id = $page.params.id;
  if ($$props.season_details === void 0 && $$bindings.season_details && season_details !== void 0)
    $$bindings.season_details(season_details);
  $$unsubscribe_page();
  return `${validate_component(Season, "Season").$$render($$result, { season_details, tv_id }, {}, {})}`;
});
export { U5Bseason_numberu5D as default, load };
