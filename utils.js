// utils.js

function formatarLivro(livro, index) {
  const titulo = livro.title || "Título desconhecido";
  const autores = livro.authors?.map(a => a.name).join(", ") || "Autor desconhecido";
  const idiomas = livro.languages?.join(", ") || "Idioma não informado";

  return `📚 ${index + 1}. ${titulo}\n   Autor(es): ${autores}\n   Idioma(s): ${idiomas}`;
}

function tratarListaLivros(livros, limite) {
  return livros.slice(0, limite).map(formatarLivro);
}

module.exports = { tratarListaLivros };
