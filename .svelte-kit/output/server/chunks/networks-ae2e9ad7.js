import { c as create_ssr_component, s as subscribe, e as each, a as add_attribute, b as escape } from "./app-3d85ebcf.js";
import { b as tv_network } from "./store-f8b67767.js";
const Networks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $tv_network, $$unsubscribe_tv_network;
  $$unsubscribe_tv_network = subscribe(tv_network, (value) => $tv_network = value);
  $$unsubscribe_tv_network();
  return `<div class="${"flex flex-wrap"}">${each($tv_network, (network) => `<a class="${"bg-secondary justify-center border-border rounded-full border-2 no-underline font-semibold px-1 py-0.5 m-0.5 whitespace-nowrap hover:bg-selected hover:cursor-pointer"}"${add_attribute("href", `/network/${network.provider_id}`, 0)}>${escape(network.provider_name)}
		</a>`)}</div>`;
});
export { Networks as default };
