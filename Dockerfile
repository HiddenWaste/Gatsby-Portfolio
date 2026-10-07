# Multi-stage Dockerfile for Gatsby Portfolio

# --- STAGE 1: Build static site ---
FROM node:20-alpine AS builder

WORKDIR /app

# Install build dependencies if needed
RUN apk add --no-cache python3 make g++

# Copy dependency manifests
COPY package.json package-lock.json ./

# Install npm dependencies
RUN npm ci --legacy-peer-deps

# Copy site source code and content
COPY . .

# Build production static bundles
RUN npm run build

# --- STAGE 2: High-efficiency Static Web Server ---
FROM nginx:alpine AS runner

# Remove default nginx HTML files
RUN rm -rf /usr/share/nginx/html/*

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled Gatsby static assets from builder stage
COPY --from=builder /app/public /usr/share/nginx/html

EXPOSE 80

# Health check endpoint
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
