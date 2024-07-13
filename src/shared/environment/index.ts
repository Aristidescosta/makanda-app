
const VITE_API_KEY = import.meta.env.VITE_API_KEY


export const Environment = {
  /**
   * Define a quantidade de linhas a ser carregada por padrão nas listagens
   */
  LIMITE_DE_LINHAS: 5,

  /**
   * Placeholder exibido nas inputs
   */
  INPUT_DE_BUSCA: "Pesquisar...",

  /**
   * Texto exibido quando nenhum registo é encontrado no campo de busca
   */
  LISTAGEM_VAZIAS: "Nenhum registo encontrado",

  /**
   * Define a URL base do projeto
   */
  URL_BASE: `https://api.themoviedb.org/3/`,
  API_KEY: VITE_API_KEY
};
