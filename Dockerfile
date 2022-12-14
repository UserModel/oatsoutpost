FROM node:lts-alpine3.14
WORKDIR /app
RUN yarn install
COPY . .
EXPOSE 3000
CMD ["yarn", "dev"]