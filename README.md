# 📚 CLI de Livros – Buscador via Terminal com a API Gutendex

> Uma ferramenta de linha de comando desenvolvida em Node.js para buscar livros por tema, diretamente no terminal, usando a API pública [Gutendex](https://gutendex.com). Ideal para quem deseja explorar obras de domínio público, praticar consumo de APIs REST e desenvolver habilidades com projetos CLI.

---

## 🎯 Objetivo do Projeto

Criar um CLI funcional e modularizado, que permite buscar livros por tema usando uma API aberta.  
Além disso, o projeto é dividido em etapas conforme boas práticas de desenvolvimento:

- **api.js** → Requisição e tratamento de dados  
- **utils.js** → Formatação dos livros  
- **cli.js** → Entrada principal do CLI  
- Estrutura pensada para ser usada com **GitHub Desktop e VS Code**

---


## Como usar

1. Clone o repositório e instale as dependências:

```bash
git clone <URL-do-repositório>
cd cli-livros
npm install

---

2- Execute o CLI com o tema desejado e quantidade de livros (opcional):

node cli.js --theme="javascript" --n=5

--theme (obrigatório): tema para busca na API

--n (opcional): quantidade de livros a mostrar (padrão 10)

---

3- Para ajuda:

node cli.js --help

Estrutura do projeto
cli.js — arquivo principal que lê os argumentos e exibe os livros

api.js — módulo para buscar livros na API externa

utils.js — funções auxiliares para formatar os dados

.gitignore — arquivos e pastas ignorados pelo Git

---
Requisitos
Node.js v18 ou superior (para suporte nativo ao fetch)

---

Observações
A API usada é pública e gratuita: Projeto Gutenberg API

Não há necessidade de instalar pacotes extras para requisições HTTP, pois o Node.js já suporta fetch.



