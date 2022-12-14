FROM node:alpine AS build
ENV NODE_ENV production
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install
# Copy app files
COPY . .
# Build the app
RUN yarn build

# Bundle static assets with nginx
FROM nginx:stable-alpine as production
# Copy built assets from build
COPY --from=build /app/dist /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 3000
# Start nginx
CMD ["nginx", "-g", "daemon off;"]