# Brain Agriculture

## Instalação

 1. Clonar este repositório
 2. Criar banco de dados
 3. Duplicar o arquivo `.env.example` para `.env`
 4. Configurar a conexão ao banco no arquivo `.env`
 5. Executar os comandos a seguir, na ordem

```
yarn // ou npm install
node ace migration:run && node ace db:seed
```

## Executar projeto

Rodar `yarn dev` ou `yarn start`.

Acessar url exibida no terminal (normalmente `http://localhost:3333`).

## Testar o projeto

Para este projeto, optei por usar o Postman para os testes (simplicidade), uma alternativa seria o Swagger, mas são poucos endpoints.

Para usar a collection importe no Postman (arquivo `postman-collection.json` na raiz do projeto) e substitua o endereço do servidor, assim como o Token de autorização em cada request.
