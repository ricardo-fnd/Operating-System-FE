FROM node:23-alpine

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* ./
RUN yarn install

# Copy source code to container
COPY src ./src
COPY public ./public
COPY next.config.mjs .
COPY tsconfig.json .
COPY postcss.config.mjs .
COPY tailwind.config.ts .

# Disabled next telemtry
ENV NEXT_TELEMETRY_DISABLED 1

# Start Next.js in development mode based on the preferred package manager
CMD yarn dev;