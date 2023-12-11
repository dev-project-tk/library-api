# Use uma imagem base Node.js
FROM node:latest

# Crie e defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie os arquivos necessários para o diretório de trabalho do contêiner
COPY package*.json ./

# Copie todo o restante dos arquivos para o diretório de trabalho do contêiner
COPY . .

# Instale as dependências do projeto
RUN npm install
RUN npm run build

# Exponha a porta em que o servidor do NestJS está ouvindo (se definido no código)
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start:dev"]
