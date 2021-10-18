# Stack Overflow Searcher - Frontend

[![forthebadge made-with-python](https://forthebadge.com/images/badges/works-on-my-machine.svg)](#)

VueJS app desenvolvido para atender ao desafio da IBM Brasil.

## Stack

- [x] [VueJS 2](https://vuejs.org/)
- [x] [Yarn](https://www.npmjs.com/package/yarn)
- [x] [Carbon Design System](https://www.carbondesignsystem.com/)
- [x] [IBM Cloud Foundry](https://www.ibm.com/br-pt/cloud/cloud-foundry)
- [x] [Axios](https://github.com/axios/axios)

## App

Este app foi desenvolvido como avaliação da IBM Brasil. Ele está integrado com a IBM cloud. Seu objetivo é receber uma requisição com um texto que reporta um erro e tentar consultar uma solução no Stack Overflow.

### Instalação

É necessário ter o [VueJS 2](https://vuejs.org/) e o [Yarn](https://www.npmjs.com/package/yarn) instalado.

Após clonar o repositório, é necessário executar o comando:

```sh
$ cd challenge-ibm-frontend
$ cp .env.example .env
```

Dessa forma as variáveis de ambiente ficarão disponíveis. Basta preencher com as informações necessárias.

### Compilação e execução

Para rodar o app (versão utilizada em produção):

```sh
$ cd challenge-ibm-frontend
$ yarn build
```

Para rodar o app em desenvolvimento:

```sh
$ cd challenge-ibm-frontend
$ yarn serve
```

#### Autor

_Leonardo Machado_<br>
_Rio de Janeiro, Brasil - 2021_
