const API_KEY = 'e32efcd6efa0aea0b75cad376561766f'; 
const BASE_URL = 'https://api.themoviedb.org/3';

/**
 * Função para buscar filmes com base em um termo de busca.
 * @param {string} searchTerm O termo a ser buscado.
 * @returns {Promise<Array>} Uma promessa que resolve com um array de filmes.
 */
export const fetchMoviesBySearchTerm = async (searchTerm) => {  
  if (!searchTerm) {
    return []; // Retorna um array vazio se não houver termo de busca.
  }

  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=pt-BR`);
    
    // Verifica se a resposta foi bem-sucedida (status 200)
    if (!response.ok) {
      throw new Error('Erro ao buscar os filmes.');
    }

    const data = await response.json();
    return data.results; // Retorna o array de resultados.
  } catch (error) {
    console.error("Falha na busca:", error);
    return [];
  }
};