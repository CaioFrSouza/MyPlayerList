import axios from 'axios';
import {API_AUTH, BASE_URL, LANGUAGE, REGION} from "@/constants/Env";
import {MoviePopularResponseDTO} from "@/DTOs/Responses/MoviePopularResponseDTO";

const MovieService = axios.create({
    baseURL: `${BASE_URL}/`,
    headers: {
        Authorization: `Bearer ${API_AUTH}`
    }
});

export const MovieListService = {
    popular: (page: number = 1) => MovieService.get<MoviePopularResponseDTO>("trending/movie/day", {
        params: {
            page,
            language: LANGUAGE,
            region: REGION
        }
    }),
}