FROM node:18-alpine

RUN mkdir /app
ADD . /app

WORKDIR /app

RUN npm ci

ARG NODE_ENV
ARG PORT

ENV NODE_ENV=$NODE_ENV \
    PORT=$PORT 

COPY . .

RUN npm run build

EXPOSE $PORT

CMD [ "npm", "start" ]