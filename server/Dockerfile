# Stage 1: Build
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npx prisma generate

RUN npm run build


# Stage 2: Production
FROM node:22-alpine AS production

WORKDIR /server

ENV NODE_ENV=production

COPY package*.json ./

RUN npm ci --omit=dev

COPY --from=build /app/dist ./dist
COPY --from=build /app/prisma ./prisma

RUN npx prisma generate

EXPOSE 5000

CMD ["node", "dist/server.js"]