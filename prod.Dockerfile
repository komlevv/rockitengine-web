FROM node:16

WORKDIR /build

COPY tools  ./tools/
COPY .babelrc package.json webpack.config.js ./
COPY src ./src/
RUN mkdir ./dist

RUN npm install
RUN npm run build-all

WORKDIR /app
RUN mv /build/dist/* .
RUN rm -rf /build
RUN npm install

EXPOSE 8080
ENV NODE_ENV=production
CMD [ "node", "server.js" ]
