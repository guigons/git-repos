Teste criado pela empresa Matrix Cargo.

O código foi desenvolvido utilizando a linguagem Typescript (backend e frontend) e arquitetura Flux/Redux para gerenciamento de estado centralizado. Esse tipo de arquitetura além de manter um código enxuto e escalável, garante um alto grau de desacoplamento, permitindo por exemplo que varios desenvolvedores trabalhem no códico simultamente gerando baixo número de conflitos durante o merge e um crescimento sustentável da solução como um todo.



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

  * Criar build backend
    - Executar: yarn build ou npm build dentro da pasta '/backend'
    - Output: /backend/dist

  * Criar build frontend
    - Executar: yarn build ou npm build dentro da pasta '/frontend'
    - Output: /frontend/build
