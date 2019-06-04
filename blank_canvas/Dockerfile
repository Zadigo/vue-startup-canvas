FROM node:lts-alpine

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