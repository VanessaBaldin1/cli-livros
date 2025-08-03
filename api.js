// api.js

const API_URL = 'https://gutendex.com/books';

/**
 * Busca livros da API do Projeto Gutenberg filtrando por tema.
 * @param {string} tema 
 * @returns {Promise<Array>}
 */
async function buscarLivrosPorTema(tema) {
  const url = `${API_URL}?topic=${encodeURIComponent(tema)}`;
  
  const resposta = await fetch(url);
  if (!resposta.ok) throw new Error("Erro ao buscar dados da API");

  const dados = await resposta.json();
  return dados.results || [];
}

module.exports = { buscarLivrosPorTema };
// api.js

// Checagem para garantir que o fetch existe (caso esteja desativado)
if (typeof fetch !== "function") {
  globalThis.fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
}

async function buscarLivrosPorTema(tema) {
  const url = `https://gutendex.com/books?search=${tema}`;

  try {
    const resposta = await fetch(url);
    if (!resposta.ok) {
      throw new Error(`Erro ${resposta.status}: ${resposta.statusText}`);
    }

    const dados = await resposta.json();
    return dados.results;
  } catch (erro) {
    throw new Error("Erro ao buscar livros na API: " + erro.message);
  }
}

module.exports = { buscarLivrosPorTema };

