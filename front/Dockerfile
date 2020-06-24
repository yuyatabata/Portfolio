FROM node:10.7.0

WORKDIR /app
RUN npm uninstall -g @vue/cli
RUN npm install -g @vue/cli
ADD ./package.json /app/package.json
RUN npm install
ADD ./start.sh /app/start.sh

