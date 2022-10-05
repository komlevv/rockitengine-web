FROM node:16 as build

WORKDIR /build

COPY tools  ./tools/
COPY .babelrc package.json webpack.config.js ./
COPY src ./src/

RUN mkdir ./dist \
    && npm install \
    && npm run build-all

FROM node:16-slim
WORKDIR /app

COPY --from=build /build/dist/* .
RUN npm install

EXPOSE 8080
ENV NODE_ENV=production
CMD [ "node", "server.js" ]
