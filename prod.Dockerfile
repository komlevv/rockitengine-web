FROM node:16 as build

WORKDIR /build

COPY tools  ./tools/
COPY .babelrc package.json webpack.config.babel.js ./
RUN npm install
COPY src ./src/

RUN mkdir ./dist \
    && npm run build-all

FROM node:16-slim
WORKDIR /app

COPY --from=build /build/dist/favicon.ico \
                  /build/dist/robots.txt \
                  /build/dist/bundle.js \
                  /build/dist/server.js \
                  /build/dist/main.css \
                  /build/dist/package.json \
                  ./
RUN npm install

EXPOSE 8080
ENV NODE_ENV=production
CMD [ "node", "server.js" ]
