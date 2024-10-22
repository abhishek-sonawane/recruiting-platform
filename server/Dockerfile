FROM node:20-alpine AS base

WORKDIR /usr/src/app

COPY package* .

RUN npm install


EXPOSE 5000

FROM base AS development
COPY . .
CMD ["npm","run","dev"]

FROM base AS production
COPY . .
CMD ["npm","run","start"]