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
yarn sucrase-node src/server.js
adicionar nodemon.json e "execMap":{ 
  "js": "node -r sucrase/registe"
}

===Docker CE===
Instalação no Debian
https://docs.docker.com/install/linux/docker-ce/debian/
docker -v (mostra a versão)
docker -help(lista Todos os comandos)
docker ps(container que esta em execução) -a (mostra todos os criados)

==Instalando a imagem do postgres no Docker==
docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres:11 (usar a versão 11, outra versão pode dar erro)

===Postbird=== insterface utilizada para gerenciar banco de dados
sudo apt update
sudo apt install snapd
sudo snap install postbird










