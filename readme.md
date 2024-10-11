# API de Podcasts com Node.js e TypeScript 🎙️
Este projeto demonstra minhas habilidades no desenvolvimento backend e mostra como utilizo **Node.js**, **TypeScript**, **TSX** e **TSUP** para criar **APIs RESTful** eficientes, focadas em leitura e filtragem de dados, é uma API para gerenciar podcasts, que segue uma arquitetura organizada com pastas separadas para **controllers**, **models**, **repositories**, **services**, **routes** e **utils**.

## 📂 Estrutura de Pastas

```bash
├── docs/
├── node_modules/
├── src/
│   ├── controllers/
│   │   └── podcasts-controller.ts
│   ├── models/
│   │   ├── podcast-model.ts
│   │   └── podcast-transfer-model.ts
│   ├── repositories/
│   │   ├── podcasts-repository.ts
│   │   └── podcasts.json
│   ├── routes/
│   │   └── routes.ts
│   ├── services/
│   │   ├── filter-episodes.service.ts
│   │   └── list-episodes-service.ts
│   ├── utils/
│   │   ├── content-type.ts
│   │   ├── http-method.ts
│   │   └── status-code.ts
│   ├── app.ts
│   └── server.ts
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── readme.md
└── tsconfig.json
```

## 🛠️ Tecnologias Utilizadas

- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) **Node.js**: Plataforma para execução de código JavaScript no servidor.
- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) **TypeScript**: Superset de JavaScript que adiciona tipagem estática e outros recursos avançados.
- ![TSX](https://img.shields.io/badge/TSX-007ACC?style=for-the-badge&logo=typescript&logoColor=white) **TSX**: Facilita a execução direta de arquivos TypeScript sem a necessidade de compilar previamente.
- ![TSUP](https://img.shields.io/badge/TSUP-FF7B29?style=for-the-badge) **TSUP**: Ferramenta de build rápida e eficiente para TypeScript, que otimiza o tempo de build.

## 📂 Descrição dos Diretórios

- **controllers/**: Contém os controladores, que lidam com as requisições HTTP e orquestram a lógica entre os serviços e os repositórios.
- **models/**: Define as interfaces e modelos de dados, como o `podcast-model.ts` e o `podcast-transfer-model.ts`.
- **repositories/**: Gerencia o acesso aos dados, como a manipulação dos podcasts em `podcasts-repository.ts` e o armazenamento em `podcasts.json`.
- **services/**: Contém a lógica de negócios da aplicação, como a filtragem e listagem de episódios (`filter-episodes.service.ts` e `list-episodes-service.ts`).
- **routes/**: Define as rotas da API, incluindo o roteamento para os controladores.
- **utils/**: Utilidades e helpers como `content-type.ts`, `http-method.ts`, e `status-code.ts`, que auxiliam nas respostas da API.

## 🚀 Inicialização

1. **Instale as dependências:**
   ```bash
   npm install
   ```
2. **Crie um arquivo `.env` baseado no exemplo para configurar variáveis de ambiente.**

3. **Inicie o servidor:**
   ```bash
   npm run start
   ```

O servidor estará disponível em `http://localhost:3333`.

## 📋 Funcionalidades

- Metódo GET para listar e filtrar os podcasts.
- Filtros avançados para listagem de episódios.
- Organização modular seguindo boas práticas de arquitetura em Node.js.

## ⚙️ Configurações

Certifique-se de configurar o arquivo `tsconfig.json` corretamente para o uso de TypeScript, e ajuste as variáveis de ambiente necessárias no `.env`.

## 📝 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
