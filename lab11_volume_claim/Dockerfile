FROM --platform=linux/amd64 node:18-alpine3.14

WORKDIR /usr
RUN mkdir -p /usr/container-volume

COPY package.json .
COPY server.js .

RUN yarn install

CMD ["yarn", "start"]
