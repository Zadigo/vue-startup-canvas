# build stage
FROM node:lts-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm audit fix && npm audit fix --force

RUN npm install webpack@^4.0.0 && npm install ajv@^6.9.1

COPY . .

RUN npm run build
