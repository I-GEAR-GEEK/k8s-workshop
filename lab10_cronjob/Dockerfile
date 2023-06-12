FROM --platform=linux/amd64 node:18-alpine3.14

WORKDIR /usr

COPY package.json .
COPY server.js .
COPY export-report.js .

RUN yarn install

CMD ["yarn", "start"]
