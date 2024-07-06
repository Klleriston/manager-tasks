# Manager Tasks

## Descrição

Manager Tasks é um serviço backend desenvolvido em NestJS que oferece uma API RESTful para automatizar a gestão de tarefas dos usuários. A aplicação permite que os usuários cadastrem seus e-mails e recebam lembretes automáticos, integrando-se com o Google Calendar e o Google Gmail.

## Funcionalidades

- Criação e gerenciamento de tarefas.
- Envio automático de lembretes por e-mail.
- Sincronização de tarefas com o Google Calendar.

## Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [Docker](https://www.docker.com/) com PostgreSQL
- [Google APIs](https://developers.google.com/apis-explorer)
- [Nodemailer](https://nodemailer.com/)

## Requisitos

Para executar este projeto, você precisará de:

- Node.js v14 ou superior
- Docker
- Conta no Google com acesso ao Gmail e Calendar APIs

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/Klleriston/manager-tasks.git
    cd manager-tasks
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure as variáveis de ambiente:
    - Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
    ```env
    DATABASE_URL=postgresql://user:password@localhost:5432/mydatabase
    GOOGLE_CLIENT_ID=your-google-client-id
    GOOGLE_CLIENT_SECRET=your-google-client-secret
    GOOGLE_REDIRECT_URI=your-google-redirect-uri
    AUTH_EMAIL="seu-email"
    AUTH_PASSWORD_EMAIL="sua-senha"
    ```

4. Execute as migrações do Prisma para configurar o banco de dados:
    ```bash
    npx prisma migrate dev
    ```

5. Inicie o servidor:
    ```bash
    npm run start:dev
    ```

## Uso

Para ver a documentação da API e testar as rotas, acesse o Swagger na rota `/api`.

![Swagger](assets/swagger.png)

