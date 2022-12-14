FROM node:lts-alpine3.14
RUN mkdir /app
COPY package*.json /app
WORKDIR /app
RUN yarn install
COPY . .
EXPOSE 3000
CMD ["yarn", "dev"]