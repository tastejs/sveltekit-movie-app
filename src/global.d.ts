/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

type Media = {
    genres: [Genre]
}

type MediaPlatform = "movie" | "tv";
type MediaType = "movie" | "tv" | "person"

type Genre = {
    id: number;
    name: string;
}

type Genres = {
    [Key in MediaPlatform]: Genre[];
}

type PersonType = {
    id: number;
    profile_path: string;
    character: string;
    name: string;
    known_for_department:string;
    gender: 1|2;
    birthday: string;
    place_of_birth: string;
    also_known_as: Array<string>;
    biography: string;  
    popularity: number;
    adult: boolean; 
    imdb_id: string;
    homepage: null | string;
};

type MovieType = {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: null | Array<string>;
    budget: number;
    genres: Array<Genre>;
    homepage: string | null
    id: number
    imdb_id: string |  null
    original_language: string
    original_title: string
    overview: string | null
    popularity: number
    poster_path: string | null
    production_companies: Array<ProductionCompanies>
    production_countries: Array<ProductionCountries>
    release_date: string
    revenue: number
    runtime: number | null
    spoken_languages: Array<SpokenLanguages>
    status: 'Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled'
    tagline: string | null
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

type Data = {
    cast: [Person];
};
 type ProductionCompanies = {
    name: string
    id: number
    logo_path: string | null
    origin_country: string
 }

 type ProductionCountries = {
    iso_3166_1: string;
    name: string
 }

 type SpokenLanguages = {
    iso_639_1: string
    name: string
 }