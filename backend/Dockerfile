FROM node:16.15.0-alpine as build-stage

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn

COPY . .

RUN yarn build

CMD ["yarn", "start"]
