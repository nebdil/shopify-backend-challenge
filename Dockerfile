FROM node:latest

ADD . /store

WORKDIR /store

RUN npm i -g nodemon
RUN npm install

CMD ["nodemon", "server.js"]

