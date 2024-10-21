import axios from 'axios';
import {API_AUTH, BASE_URL, LANGUAGE, REGION} from "@/constants/Env";
import {MoviePopularResponseDTO} from "@/DTOs/Responses/MoviePopularResponseDTO";
import {TVShowPopularResponseDTO} from "@/DTOs/Responses/TVShowPopularResponseDTO";

const SeriesService = axios.create({
    baseURL: `${BASE_URL}/`,
    headers: {
        Authorization: `Bearer ${API_AUTH}`
    }
});

export const TvListService = {
    popular: (page: number = 1) => SeriesService.get<TVShowPopularResponseDTO>("trending/tv/day", {params: {page, language: LANGUAGE, region: REGION}}),
}

// popular: (page: number = 1) => MovieService.get<MoviePopularResponseDTO>("movie/now_playing", {params: {page, language: LANGUAGE, region: REGION}}),
