#!/usr/bin/env node

// cli.js

const { buscarLivrosPorTema } = require("./api");
const { tratarListaLivros } = require("./utils");

const argumentos = process.argv.slice(2);
const temaArg = argumentos.find(arg => arg.startsWith("--theme="));
const nArg = argumentos.find(arg => arg.startsWith("--n="));

const tema = temaArg ? temaArg.split("=")[1].replace(/["']/g, "") : null;
const quantidade = nArg ? parseInt(nArg.split("=")[1]) : 10;

// Mensagem de ajuda
if (!tema || tema === "--help") {
  console.log(`
🔎 COMO USAR O CLI DE LIVROS:

  node cli.js --theme="css" --n=5

  --theme: tema obrigatório
  --n:     número de livros a exibir (opcional, padrão: 10)
`);
  process.exit(0);
}

// Execução principal
(async () => {
  try {
    const livros = await buscarLivrosPorTema(tema);

    if (!livros.length) {
      console.log("❗ Nenhum livro encontrado para esse tema.");
      return;
    }

    const lista = tratarListaLivros(livros, quantidade);
    lista.forEach(livro => console.log("\n" + livro));

  } catch (erro) {
    console.error("❌ Erro:", erro.message);
  }
})();
