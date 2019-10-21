# bootcamp2019
Projeto para todo curso BootCamp2019

link pora ajusta o terminal 
https://blog.rocketseat.com.br/terminal-com-oh-my-zsh-spaceship-dracula-e-mais/

link para ajustar o VC Code
https://blog.rocketseat.com.br/ambiente-desenvolvimento-javascript/


https://gist.github.com/diego3g/b1b189063d21b96d6144ca896755be64


https://www.youtube.com/watch?v=c7P03kkrEG8


Para Back-End


yarn init -y //para iniciar a estrutura do projeto

yarn add express // adiciona o componente para trabalhar com protrocolo de cominicação http put,get e outros

yarn add nodemon -D (Develop)// para reiniciar o servidor quando o mesmo é salvo

yarn add sucrase nodemon -D (Ajustar sintax e alinhamentos )

yarn sucrase-node src/server.js (para rodar o programa)

* Adicionar no **"packege.json"** 
  "scripts": {
    "dev": "nodemon src/server.js"
  }

* criar arquivo nodemon.json e adicionar "execMap":{ 
  "js": "node -r sucrase/register"
}

Para usar o mode debug 
--
* Adicionar no **"packege.json"** 
  "scripts": {
    "dev": "nodemon src/server.js",
    **"dev:debug": "nodemon --inspect src/server.js"**
  },

Docker CE
=====
**Instalação no Debian**
* https://docs.docker.com/install/linux/docker-ce/debian/
* docker -v (mostra a versão)
* docker -help(lista Todos os comandos)
* docker ps(container que esta em execução) -a (mostra todos os criados)
* docker start database (database é o nome de imagem)
* docker logs database  (log de tudo que aconteceu no container)

Instalando a imagem do postgres no Docker
----
* docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres:11 (usar a versão 11, outra versão pode dar erro)

Postbird(insterface utilizada para gerenciar banco de dados)
---
* sudo apt update
* sudo apt install snapd
* sudo snap install postbird

Sequelize
---
Faz update select, sem a sintax do SQL

SQL
INSERT INTO users (name, email)
 VALUES (
 "Diego Fernandes"
,
 "diego@rocketseat.com.br"
 )

Sequelize

 User.create({
 name: 'Diego Fernandes'
,
 email: 'diego@rocketseat.com.br'
,
})

Migrations
===
 Controle de versão para base de dados;
 
* Cada arquivo contém instruções para criação, alteração ou remoção de
tabelas ou colunas;
* Mantém a base atualizada entre todos desenvolvedores do time e também
no ambiente de produção;
* Cada arquivo é uma migration e sua ordenação ocorre por data;
 existe a possibilidade defazer holback
* É possível desfazer uma migração se errarmos algo enquanto estivermos
desenvolvendo a feature;
* Depois que a migration foi enviada para outros devs ou para ambiente de
produção ela JAMAIS poderá ser alterada, uma nova deve ser criada;
* Cada migration deve realizar alterações em apenas uma tabela, você pode
criar várias migrations para alterações maiores;

Seeds
===

* População da base de dados para desenvolvimento;
* Muito utilizado para popular dados para testes;
* Executável apenas por código;
* Jamais será utilizado em produção;
* Caso sejam dados que precisam ir para produção, a própria migration
pode manipular dados das tabelas;

Arquitetura MVC
===

Model
--

O model armazena a abstração do banco, utilizado para manipular os dados contidos nas tabelas do banco.
Não possuem responsabilidade sobre a regra de negócio da nossa aplicação.

Controller
--

O controller é o ponto de entrada das requisições da nossa aplicação, uma rota geralmente está
associada diretamente com um método do controller. Podemos incluir a grande parte das regras
de negócio da aplicação nos controllers (conforme a aplicação cresce podemos isolar as regras).

View
--

A view é o retorno ao cliente, em aplicações que não utilizando o modelo de API REST isso pode ser
um HTML, mas no nosso caso a view é apenas nosso JSON que será retornado ao front-end e depois
manipulado pelo ReactJS ou React Native.


A face de um controller
===

Classes
--

* Sempre retorna um JSON;
* Não chama outro controller/

Método
--

* Quando criar um novo controller:
* Apenas 5 métodos;
* Estou falando da mesma entidade?

Padrão de código
===

yarn add eslint -D

yar eslint --init

selecione
to check sintax, find problems, and enforce doce style

em seguida
javascript modules(import-exports)

em seguida
Nome of these

em seguida
desmarca com barra de espaço o brouwser e marca Node

em seguida
User a popular style guide

em seguida
Airbnb

em seguida
JavaScript em seguida Y para instalar tudo
depois remover pakge-lock.json
e rodar yarn para reconhecer as novas dependencias

* instalar a extenção Eslint no vscode

* ajusta o settings.json no vscode adicionar as configurações do eslint

    "eslint.autoFixOnSave": true,    
    "eslint.validadte":[
        { "language": "javascript",
            "autoFix": true,
        },
        { "language": "javascriptreact",
            "autoFix": true,
        },
        { "language": "typecript",
            "autoFix": true,
        },
        { "language": "typecriptreact",
            "autoFix": true,
        },
    ]
    
    alterar arquivo .eslintrc.js
        rules: {
        "class-methods-use-this": "off",
        "no-param-reassingn": "off",
        "camelcase": "off",
        "no-unused-vars": ["error", {"argsinorePattern": "next"}]
    }
    
Prettier
===

* yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
* Remover o arquivo packege-lock.json
 * alterar arquivo .eslintrc.js

    extends: ['airbnb-base', 'prettier'],
    plugins: ['prettier'],
    
e no rules adicinar 
        "prettier/prettier": "error",
        
criar arquivo .prettierrc transformar o arquivo em json no canto inferior do vccode e adicionar a linha a seguir
{
  "singleQuote": true,
  "trailingComma": "es5"
}

fix automatico
===

Atualiza todos os documento com a nova identação e regras de ponto o virgula
yarn eslint --fix src --ext .js ("src" é o nome da pasta que vai ser corrigida e ".js" é o nome da extenção)

padronização para editores diferentes
---

se todos os desenvolvedores utilizam o VS Code nem precisa adicionar esse cara
Adicionar o plugin EditorConfig  no VS Code , após instalado clicar com o botão direito na raiz do projeto e selecionar "Generate.editorconfig" alterar o arquivo ".editorconfig" para :
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true


Configurando Sequelize
===

Criar pastas primeiro
* src> criar pasta config>criar arquivo database.js
* src> criar pasta database>criar pasta migrations
* src> criar pasta app> criar pasta controllers  e tambem a pasta models src> app> criar pasta models

* depois de criado as pastas adicionar a dependencia
* yarn add sequelize
* yarn add sequilize-cli -D

* criar aquivo ".sequelizerc" na raiz do projeto, transformar em javascript e adicionar o codigo a baixo

const { resolve } = require('path');

module.export = {
  config : resolve(__dirname, 'src', 'config', 'database.js'),
  'models-path': resolve(__dirname, 'src', 'app', 'models'),
  'migrations-path': resolve(__dirname, 'src', 'database', 'migrations'),
  'seeders-path': resolve(__dirname, 'src', 'database', 'seeds'),
};

* abrir a config>database.js e adicionar
* Adicionr as dependencias
* yarn add pg pg-hstore

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

Migration de usuário
====

* yarn sequelize migration:create --name=create-users (vai criar um arquivo dentro da pasta migrations)

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password_has: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      provider: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      create_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      update_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('users');
  },
};

* yarn sequelize db:migrate

* **(Travei aqui o arquide migrations não esta sendo gerado na pasta correta e se eu adionar manual da outro erro)**
* **Cannot find "/home/bruno/Documentos/bootvamp2019/GoBarber/bac-end/config/config.js". Have you run "sequelize init"?**



