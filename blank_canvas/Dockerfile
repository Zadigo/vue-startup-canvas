# build stage
FROM node:lts-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm audit fix && npm audit fix --force

COPY . .

RUN npm run build
