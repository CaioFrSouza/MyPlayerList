import axios from 'axios';
import {API_AUTH, BASE_URL, LANGUAGE, REGION} from "@/constants/Env";
import {MovieDetailsResponseDTO} from "@/DTOs/Responses/MovieDetailsResponseDTO";

const MovieService = axios.create({
    baseURL: `${BASE_URL}/`,
    headers: {
        Authorization: `Bearer ${API_AUTH}`
    }
});

export const MovieInfoService = {
    details: (movie: string) => MovieService.get<MovieDetailsResponseDTO>("movie/"+movie, {
        params: {
            language: LANGUAGE,
            region: REGION
        }
    }),
}