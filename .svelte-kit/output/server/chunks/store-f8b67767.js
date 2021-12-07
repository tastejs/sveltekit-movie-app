import { n as noop, f as safe_not_equal } from "./app-3d85ebcf.js";
const subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe };
}
const current_page = writable(1);
const media_type = writable("movie");
const tv_genres = writable({});
const tv_network = writable({});
const movie_genres = writable({});
const selected = writable(null);
const show_name = writable("");
const season_count = writable(0);
const show_id = writable(0);
readable("61e588d14c9ac42a437e560cc3d65659", () => {
});
export { media_type as a, tv_network as b, current_page as c, show_name as d, show_id as e, season_count as f, movie_genres as m, selected as s, tv_genres as t, writable as w };
