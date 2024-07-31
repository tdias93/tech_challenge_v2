# Projeto de Blogging

## Requisitos Pendentes

O projeto ainda precisa incluir:

- **Containerização**: Implementar a configuração de container para o ambiente de desenvolvimento e produção.
- **Automação com GitHub Actions**: Configurar pipelines de CI/CD para integração contínua e entrega contínua.

## Execução do Projeto

Para executar o projeto localmente, siga os passos abaixo:

### Banco de Dados

Este projeto utiliza o PostgreSQL. Utilize o script fornecido para criar as tabelas necessárias no banco de dados.

#### Configuração do Docker

1. **Link Oficial do Docker PostgreSQL:**
   [PostgreSQL Docker Hub](https://hub.docker.com/_/postgres)

2. **Comando para Puxar a Imagem:**
   ```bash
   docker pull postgres
   
3. **Comando para Executar o Container:**
    ```bash
    docker run --name postgres -e POSTGRES_USER=user -e POSTGRES_PASSWORD=1234 -d -p 5432:5432 postgres:latest
