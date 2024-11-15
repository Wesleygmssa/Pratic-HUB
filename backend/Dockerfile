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

# Define o comando de início do container
CMD ["node", "server.js"]

# Expõe a porta que a aplicação Node.js usa
EXPOSE 3001
