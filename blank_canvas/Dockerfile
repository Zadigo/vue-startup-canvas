# FROM node:lts-alpine
FROM ubuntu

# Explicitly install node/npm
RUN apt-get update && apt-get install curl

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -

RUN apt-get update && apt-get install nodejs

# install simple http server for serving static content
RUN npm install -g http-server

WORKDIR /app

# Copy both package.json 
# and package-lock.json
COPY package*.json ./


# Install dependencies
RUN npm install

COPY . .

# Build app for production
# with minification
RUN npm run build

EXPOSE 8080

CMD [ "http-server", "dist" ]