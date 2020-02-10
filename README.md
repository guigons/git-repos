Teste criado pela empresa Matrix Cargo.

O código foi desenvolvido utilizando a linguagem Typescript (backend e frontend) e arquitetura Flux/Redux para gerenciamento de estado centralizado. Esse tipo de arquitetura além de manter um código enxuto e escalável, garante um alto grau de desacoplamento, permitindo por exemplo que varios desenvolvedores trabalhem no códico simultamente gerando baixo número de conflitos durante o merge e um crescimento sustentável da solução como um todo.

Obs.: Não haveria necessidade de backend para essa demanda, já que as soliticações à API do Github poderiam ser executadas diretamente pelo frontend (Browser), porem para demostrar uma solução completa utilizando NodeJS crei um backend para responder as requisições e manter esse trabalho de processamento do lado do servidor, como normalmente são construidas aplicações maiores.

| PRÉ-REQUISITOS
|---------------

  * REQUISITOS FUNCIONAIS
    - Desenvolva uma rotina que mostre todos os repositórios do Github agrupando por linguagem.

  * REQUISITOS NÃO FUNCIONAIS
    - Utilizar NodeJS (Backend)
    - Utilizar ReactJS (Frontend)

  * REGRAS DE NEGÓCIO
    - Ao selecionar uma linguagem deve mostrar os repositórios relativos a ela.


| RUN TESTES
|---------------

  Necessário Node 10 ou superior com NPN ou YARN instalados.

  * Instalar dependencias backend
    - Executar: yarn ou npm install dentro da pasta '/backend'

  * Iniciar backend
    - Executar: yarn dev ou npm dev

  * Instalar dependencias frontend
    - Executar: yarn ou npm install dentro da pasta '/frontend'

  * Iniciar frontend
    - Executar: yarn start ou npm start


| BUILD PRODUÇÃO
|---------------

  Necessário Node 10 ou superior com NPN ou YARN instalados.

  * Criar build backend
    - Executar: yarn build ou npm build dentro da pasta '/backend'
    - Output: /backend/dist

  * Criar build frontend
    - Executar: yarn build ou npm build dentro da pasta '/frontend'
    - Output: /frontend/build
