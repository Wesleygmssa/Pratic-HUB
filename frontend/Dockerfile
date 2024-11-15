# Use a imagem Node.js como base
FROM node:alpine

# Define o diretório de trabalho na imagem
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Compila a aplicação para produção
RUN npm run build

# Define o comando de início do container
CMD ["npm", "start"]

# Expõe a porta que o React usa
EXPOSE 3000
