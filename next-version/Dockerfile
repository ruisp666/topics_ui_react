FROM node:lts-alpine
WORKDIR /app
RUN apk add --no-cache python3 g++ make

COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run build

EXPOSE 3000
RUN chown -R node /app
USER node
CMD ["npm", "start"]
