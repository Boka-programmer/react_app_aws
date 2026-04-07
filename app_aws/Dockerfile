# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies first to take advantage of Docker cache
COPY package.json package-lock.json ./
RUN npm ci

# Copy source files and build app
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port used by nginx
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
