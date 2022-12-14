FROM node:16-alpine AS builder
ENV NODE_ENV production
# Add a work directory
WORKDIR /
# Cache and Install dependencies
COPY package.json .
COPY yarn.lock .
RUN npm install
# Copy app files
COPY . .
# Build the app
RUN npm build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
# Copy built assets from builder
COPY --from=builder /dist /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 3000
# Start nginx
CMD ["nginx", "-g", "daemon off;"]