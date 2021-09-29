<script lang="ts">
	import { media_type, movie_genres, tv_genres } from '$lib/stores/store';
	import { page } from '$app/stores';
	let page_title: string;
	let media_option: string;
	let genre: string;

	if ($media_type === 'tv') {
		media_option = 'TV';
	} else if ($media_type === 'person') {
		media_option = 'People';
	} else {
		media_option = 'Movies';
	}
	if ($page.path.startsWith('/search/')) {
		page_title = media_option + ' > Search > ' + $page.path.substring(8);
	} else if ($page.path !== '/') {
		if ($media_type === 'tv') {
			genre = $tv_genres.find((item) => (item.id as unknown) == $page.params.id).name;
		} else {
			genre = $movie_genres.find((item) => (item.id as unknown) == $page.params.id).name;
		}

		page_title = media_option + ' > ' + genre;
	} else {
		page_title = 'Popular ' + media_option;
	}
</script>

<div class=" bg-skin-primary text-skin-base max-w-7xl xl:rounded-2xl xl:mt-2">
	<h4 class="py-2 ml-4">{page_title}</h4>
</div>
