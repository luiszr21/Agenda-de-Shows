# Agenda de Shows

Este projeto foi desenvolvido como parte das atividades da faculdade, com o objetivo de criar uma aplicação para gerenciar uma agenda de shows. O sistema permite o cadastro, visualização e pesquisa de shows, além de oferecer busca e filtragem por artista e gênero musical.

## ✨ Funcionalidades

- Cadastro de novos shows
- Visualização dos shows cadastrados em formato de agenda
- Busca e filtragem de shows por artista e gênero musical
- Armazenamento dos dados dos shows

## 🚀 Tecnologias Utilizadas

- **Linguagem principal:** JavaScript
- **Framework/Biblioteca:** React
- **Estilização:** CSS

## 💻 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/luiszr21/Agenda-de-Shows.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd Agenda-de-Shows
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. No terminal (cmd), rode a API fake utilizando o [JSON Server](https://github.com/typicode/json-server):
   ```bash
   npx json-server db.json
   ```
   > Certifique-se de que o arquivo `db.json` está na raiz do projeto.
5. Em outro terminal, inicie a aplicação React:
   ```bash
   npm run dev
   ```

Assim, tanto a API quanto o front-end estarão funcionando localmente!

## 📄 Estrutura do Projeto

```
Agenda-de-Shows/
│
├── public/
│   ├── favicon.svg                # Ícone da aplicação
│   ├── index.html                 # HTML base da aplicação
│   └── vite.svg                   # (caso utilize Vite, ícone padrão)
│
├── src/
│   ├── components/                # Componentes reutilizáveis da interface
│   │   ├── NavBar.jsx             # Componente da barra de navegação
│   │   ├── Navbar.css             # Estilos do NavBar
│   │   ├── Shows.jsx              # Componente de listagem e exibição de shows
│   │   └── Shows.css              # Estilos do Shows
│   │
│   ├── App.css                    # Estilos gerais da aplicação
│   ├── App.js                     # Componente principal da aplicação
│   └── main.jsx                   # Ponto de entrada da aplicação React (Vite)
│
├── db.json                        # Banco de dados utilizado pelo JSON Server
├── package.json                   # Gerenciador de dependências e scripts do projeto
├── vite.config.js                 # Configuração do Vite (caso utilize Vite)
├── README.md                      # Este arquivo de documentação
└── .gitignore                     # Arquivos e pastas ignorados pelo Git
```

## 📁 Pasta `src/components`

A pasta `src/components` contém os componentes reutilizáveis da interface e seus respectivos arquivos de estilo:

```
src/components/
├── NavBar.jsx        # Componente da barra de navegação
├── Navbar.css        # Estilos do NavBar
├── Shows.jsx         # Componente de listagem e exibição de shows
└── Shows.css         # Estilos do Shows
```

---

**Autor:** [luiszr21](https://github.com/luiszr21)
