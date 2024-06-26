FROM node:20.11.0

WORKDIR /app/home/

COPY . .
RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["node","server.js"]