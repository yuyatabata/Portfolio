FROM node:12.7.0-alpine

WORKDIR /app
RUN npm install -g @vue/cli
ADD ./package.json /app/package.json
RUN npm install
ADD ./start.sh /app/start.sh

