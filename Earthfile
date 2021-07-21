
FROM node:16-alpine
WORKDIR /app

deps:
    COPY package.json package-lock.json ./
    RUN npm ci
    SAVE ARTIFACT package-lock.json AS LOCAL ./package-lock.json

test:
    FROM +deps
    COPY src src
    COPY tsconfig.json ./
    RUN CI=1 npm run test

build:
    FROM +deps
    COPY public public
    COPY src src
    COPY tsconfig.json ./
    RUN npm run build
    SAVE ARTIFACT build /build AS LOCAL build

ci:
    BUILD +test
    BUILD +build
