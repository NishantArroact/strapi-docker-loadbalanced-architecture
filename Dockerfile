FROM node:20-alpine

WORKDIR /app

# Install system tools some Strapi plugins need
RUN apk add --no-cache python3 make g++ libc6-compat

# Copy dependency files and install
COPY package.json package-lock.json* yarn.lock* ./

RUN if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    else npm install; fi

# Copy the rest of the project
COPY . .

# Build Strapi for production
RUN npm run build

EXPOSE 1337

CMD ["npm", "run", "start"]
