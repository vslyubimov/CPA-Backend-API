FROM node:16.13.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm run build

COPY dist .

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}


CMD ["node", "./main.js"]

EXPOSE 5000
