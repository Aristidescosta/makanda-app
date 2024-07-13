import { MovieData } from "@/shared/types";

import { Environment } from "../../../environment";
import { Api } from "../axios-config";

const getAll = async (
  page = 1,
  filter = ""
): Promise<MovieData | Error> => {
  try {
    const relativeUrl = `movie/popular?language=pt-BR&page=${page}&filter=${filter}&limit=${Environment.LIMITE_DE_LINHAS}&api_key=${Environment.API_KEY}`;
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


export const MovieService = {
  getAll,
};
