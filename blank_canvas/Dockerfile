FROM node:lts-alpine

RUN apk add bash

# install simple http server for serving static content
RUN npm install -g http-server

WORKDIR /app

# Copy both package.json 
# and package-lock.json
COPY package*.json ./

# Explicitly install node/npm
RUN apk update && apk add curl

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -

RUN apk update && apk add nodejs


# Install dependencies
RUN npm install

COPY . .

# Build app for production
# with minification
RUN npm run build

EXPOSE 8080

CMD [ "http-server", "dist" ]