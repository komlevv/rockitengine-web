FROM node:16

WORKDIR /app

# set user for node_modules, otherwise volume from docker-compose will be mounted as root
RUN mkdir /app/node_modules && chown node:node /app/node_modules

COPY package*.json ./

RUN npm install
#COPY . .

EXPOSE 8080

CMD [ "npm", "run", "express" ]
