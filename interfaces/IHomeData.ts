import {MoviePopularResponseDTO} from "@/DTOs/Responses/MoviePopularResponseDTO";
import {TVShowPopularResponseDTO} from "@/DTOs/Responses/TVShowPopularResponseDTO";

export interface IHomeData {
    movie: MoviePopularResponseDTO | null,
    series: TVShowPopularResponseDTO | null,
}