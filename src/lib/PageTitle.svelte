<script lang='ts'>
    import { genres_list, media_type } from '$lib/store'
    import { page } from '$app/stores'
    let page_title = ''
    let media_option = ''
    let genre ={}
    
        if ($media_type === 'tv') {   
            media_option = 'TV' 
        } else if ($media_type === 'person') {   
            media_option = 'People' 
        } else {
            media_option = 'Movies' 
        }

        if ($page.path !== '/') {
            genre =$genres_list[$media_type].find(genre => genre.id == $page.params.id).name;

            page_title = media_option + ' > ' + genre
        }  else {
            page_title = 'Popular ' + media_option
        }
</script>

<div class=' bg-primary max-w-7xl xl:rounded-2xl xl:mt-2'>
    <h4 class=' py-2 ml-4'>{page_title}</h4>
</div>