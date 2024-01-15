![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white)

# Redlock Example

Este é um projeto de exemplo que demonstra o uso da biblioteca Redlock para implementar bloqueios distribuídos em um ambiente de múltiplos servidores.

## Visão Geral

O Redlock é um algoritmo de bloqueio distribuído que permite coordenar a execução de processos distribuídos em um ambiente de vários servidores. Este projeto utiliza o Redlock para garantir a exclusividade na execução de determinadas operações, prevenindo condições de corrida e garantindo consistência em sistemas distribuídos.

## Como Usar

Siga as etapas abaixo para começar a utilizar o projeto:

1. **Pré-requisitos:**
   - Certifique-se de ter o Node.js e Docker instalados em seu ambiente.

2. **Instalação de Dependências:**
   - Navegue até o diretório do projeto e execute o seguinte comando para instalar as dependências:
     ```
     npm install
     ```

2. **Instalação de Dependências:**
   - Ainda no diretório do projeto, execute o seguinte comando para iniciar o redis com o docker:
     ```
     docker compose up -d
     ```

3. **Execução:**
   - Execute a aplicação com o seguinte comando:
     ```
     npm start
     ```
   - Isso iniciará demonstração do uso do Redlock para bloqueio distribuído.

## Contribuição

Sinta-se à vontade para contribuir para o aprimoramento deste projeto. Se você encontrar problemas, sugira melhorias ou correções, abra uma "issue" ou envie uma "pull request".

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).
