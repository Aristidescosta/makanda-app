/* Por algum motivo o vercel não está adicionando o API_KEY, vou deixar essa só de teste após identificar gero uma nova

*/

//const VITE_API_KEY = import.meta.env.VITE_API_KEY
const VITE_API_KEY = "c9d611ec2c034352f25f91263e0a90c9"


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
