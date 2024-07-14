import { MovieData, MovieDetails } from "@/shared/types";

import { Environment } from "../../../environment";
import { Api } from "../axios-config";
import { TrailerType } from "@/shared/types/TrailerType";

const getAll = async (
  page = 1,
  filter = ""
): Promise<MovieData | Error> => {
  try {
    let relativeUrl = `movie/popular?language=pt-BR&page=${page}&filter=${filter}&limit=${Environment.LIMITE_DE_LINHAS}&api_key=${Environment.API_KEY}`;
    if (filter.trim() !== "") {
      relativeUrl = `search/movie?api_key=${Environment.API_KEY}&query=${filter}`
    }
    const { data } = await Api.get<MovieData>(relativeUrl);
    if (data)
      return {
        results: data.results,
        page: data.page,
        total_pages: data.total_pages,
        total_results: data.total_pages,
      };
    return new Error("Erro ao listar os registos");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Erro ao listar os registos"
    );
  }
};

const getById = async (id: number): Promise<MovieDetails | Error> => {
  try {
    const { data } = await Api.get(`movie/${id}?api_key=${Environment.API_KEY}&language=pt-BR`);
    if (data) return data;
    return new Error("Erro ao listar os dados do filme");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
      "Houve um erro interno, tente novamente"
    );
  }
};

const getTrailer = async (id: number): Promise<TrailerType[] | Error> => {
  try {
    const { data } = await Api.get<{id: number, results: TrailerType[]}>(`movie/${id}/videos?api_key=${Environment.API_KEY}&language=pt-BR`);
  
    if (data) return data.results;
    return new Error("Erro ao listar os dados do filme");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message ||
      "Houve um erro interno, tente novamente"
    );
  }
};


export const MovieService = {
  getAll,
  getById,
  getTrailer
};
