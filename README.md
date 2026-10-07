# 🎓 Desafio 3 — Trilha React 2026

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![styled-components](https://img.shields.io/badge/styled--components-5-DB7093?logo=styled-components&logoColor=white)
![react--hook--form](https://img.shields.io/badge/react--hook--form-7-EC5990?logo=reacthookform&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

Plataforma de aprendizado em tecnologia inspirada na **DIO (Digital Innovation One)** — um desafio da
trilha de React onde o usuário pode navegar entre uma landing page, autenticar-se e acessar um feed
de conteúdo com ranking da comunidade.

> Repositório do desafio: `digitalinnovationone/trilha-react-desafio-3`

## 📑 Sumário

- [Sobre o projeto](#-sobre-o-projeto)
- [Telas e funcionalidades](#-telas-e-funcionalidades)
- [Stack tecnológica](#-stack-tecnológica)
- [Como rodar o projeto](#-como-rodar-o-projeto)
- [Usuários de teste](#-usuários-de-teste)
- [Estrutura de pastas](#-estrutura-de-pastas)
- [Padrões do projeto](#-padrões-do-projeto)
- [Roadmap / Pendências](#-roadmap--pendências)
- [Licença](#-licença)

## 📖 Sobre o projeto

O projeto é uma aplicação **Single Page Application (SPA)** construída com Create React App e
roteamento client-side (`react-router-dom` v6). Ela simula uma rede social de aprendizado:

- **API mock** com `json-server` servindo o arquivo `db.json` na porta `8001`.
- **Autenticação simples** por consulta de e-mail/senha contra a base mockada.
- **Estilização 100% com `styled-components`** (sem CSS global puro, exceto o reset em
  `src/styles/global.js`).
- **Formulários com `react-hook-form`** usando o padrão `Controller` para integrar inputs.

## 📱 Telas e funcionalidades

| Rota        | Tela         | Descrição resumida                                    |
| ----------- | ------------ | ----------------------------------------------------- |
| `/`         | **Home**     | Landing page institucional com CTA para o login       |
| `/login`    | **Login**    | Formulário de autenticação (e-mail + senha)           |
| `/cadastro` | **Cadastro** | Formulário de criação de conta (nome, e-mail e senha) |
| `/feed`     | **Feed**     | Área logada com cards de posts e ranking da semana    |

> O rodapé `@ 2026 - Pedro Zeferino da Silva` aparece em todas as páginas.

### 🏠 Home (`/`)

- `Header` público com logo, link **Home** e botões **Entrar** / **Cadastrar**.
- Hero com título em destaque ("**Implemente** o seu futuro global agora!") e texto institucional.
- Botão **"Começar agora"** que navega para a rota `/login`.
- Imagem de banner ilustrativa (`src/assets/banner.png`).

### 🔐 Login (`/login`)

- Formulário com **react-hook-form** (`mode: 'onChange'`) e campos controlados via componente
  `Input` + `Controller`:
    - **E-mail** (ícone `MdEmail`)
    - **Senha** (ícone `MdLock`, `type="password"`)
- Ao enviar, consulta a API mock: `GET /users?email=...&senha=...`.
- **Sucesso** → redireciona para `/feed`; **falha** → exibe `alert("Usuário ou senha inválido")`.
- Links "Esqueci minha senha" e "Criar Conta" (ainda sem ação implementada).
- Mensagens de erro dos campos (`errors.email` / `errors.senha`) já possuem espaço reservado na UI.

### 📝 Cadastro (`/cadastro`)

- Formulário com **react-hook-form** e campos **Nome completo**, **E-mail** e **Senha**
  (mínimo de 6 caracteres), com mensagens de erro por campo.
- Ao enviar, cria o usuário na API mock: `POST /users` → redireciona para `/login`.
- Estados de **carregamento** no botão e mensagem de erro da API exibida na UI.
- Termos de uso e link "Faça login" conforme o layout do desafio.

### 📰 Feed (`/feed`) — área logada

- `Header` em modo **autenticado**: campo de busca, itens de menu (Live Code, Global) e foto do
  usuário.
- Coluna principal com a lista de **cards de post** (imagem, autor, tempo, título, hashtags e
  curtidas).
- Coluna lateral com o bloco **"# RANKING 5 TOP DA SEMANA"**: cada `UserInfo` exibe avatar, nome e
  barra de progresso (`percentual`) do desempenho semanal.
- Layout em duas colunas com proporção `flex: 3` (feed) e `flex: 1` (ranking).

> Os cards e o ranking estão com **dados mockados no componente** — a integração com a API para
> listar posts/usuários está prevista no [roadmap](#-roadmap--pendências).

## 🛠 Stack tecnológica

| Categoria   | Tecnologia                          |
| ----------- | ----------------------------------- |
| Framework   | React 18                            |
| Roteamento  | react-router-dom v6                 |
| Estilização | styled-components v5                |
| Formulários | react-hook-form v7                  |
| HTTP        | axios                               |
| API mock    | json-server (`db.json`, porta 8001) |
| Ícones      | react-icons                         |
| Formatação  | Prettier + EditorConfig             |
| Testes      | Jest + Testing Library (CRA)        |

## ▶️ Como rodar o projeto

**Pré-requisitos:** [Node.js](https://nodejs.org) 16+ e [Yarn](https://yarnpkg.com).

```bash
# 1. Instalar dependências (o yarn.lock é a fonte de verdade)
yarn install

# 2. Subir a API mock (em outro terminal, porta 8001)
yarn api

# 3. Subir a aplicação (porta 3000)
yarn start
```

| Comando             | Descrição                                        |
| ------------------- | ------------------------------------------------ |
| `yarn start`        | Sobe o dev server (CRA) em `localhost:3000`      |
| `yarn api`          | Sobe o `json-server` com `db.json` na porta 8001 |
| `yarn build`        | Gera o build de produção em `build/`             |
| `yarn test`         | Roda os testes em modo watch                     |
| `yarn format`       | Formata todo o código com Prettier               |
| `yarn format:check` | Verifica a formatação sem alterar arquivos       |

> ⚠️ O login só funciona com `yarn api` rodando, pois `src/services/api.js` aponta para
> `http://localhost:8001`.

## 👤 Usuários de teste

Cadastrados em `db.json`:

| Nome  | E-mail                        | Senha    |
| ----- | ----------------------------- | -------- |
| Pedro | `zeferino4851pedro@email.com` | `123456` |
| José  | `jose@email.com`              | `678901` |

## 📂 Estrutura de pastas

```
src/
├── assets/            # Imagens (banner, logos)
├── components/        # Componentes reutilizáveis
│   ├── Button/        #   index.jsx + styles.js
│   ├── Card/          #   card de post do feed
│   ├── Footer/        #   rodapé com assinatura
│   ├── Header/        #   cabeçalho (público/autenticado)
│   ├── Input/         #   input integrado ao react-hook-form
│   └── UserInfo/      #   item do ranking
├── pages/             # Telas da aplicação
│   ├── home/          #   landing page (/)
│   ├── login/         #   autenticação (/login)
│   ├── cadastro/      #   criação de conta (/cadastro)
│   └── feed/          #   área logada (/feed)
├── services/
│   └── api.js         # instância axios (baseURL localhost:8001)
├── styles/
│   └── global.js      # GlobalStyle (reset + fundo #1E192C)
├── App.js             # rotas (react-router-dom v6)
└── index.js           # entry point (ReactDOM.createRoot)
```

## 📏 Padrões do projeto

- **Um componente por pasta** com `index.jsx` (comportamento) + `styles.js` (styled-components).
- Componentes exportados **nomeados** (`export { Button }`), não default.
- Formulários: a página cria o `control` com `useForm` e repassa para o `Input`
  (wrapper de `Controller`).
- `Header` alterna visual por prop: `autenticado` (boolean).
- Formatação automática com **Prettier** (`yarn format`) e `eslint-config-prettier` desativando
  regras de estilo do ESLint.

## 🗺 Roadmap / Pendências

- [x] Página **Cadastro** (`/cadastro`) conforme layout em `docs/Projeto_React.png`.
- [x] **Footer** obrigatório com `@ 2026 - Pedro Zeferino da Silva`.
- [x] Navegação dos botões **Entrar/Cadastrar** do Header.
- [x] Validação de formulários com estados de erro/carregamento na UI (sem `alert`/`console.log`).
- [x] Feed e ranking renderizados com `.map()` + `key` (5 posições no ranking).
- [x] Responsividade (`@media` até 768px nas páginas e no Header).
- [ ] Integração do Feed com a API (posts e ranking dinâmicos).
- [ ] Guard de rotas: bloquear `/feed` sem autenticação.
- [ ] Testes unitários (Jest + Testing Library).

## 📄 Licença

Distribuído sob a licença **MIT** — veja [LICENSE](LICENSE) para detalhes.

Feito por **Pedro Zeferino da Silva** — Trilha React 2026 🚀
