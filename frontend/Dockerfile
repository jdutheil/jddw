FROM node:alpine

RUN mkdir /app
WORKDIR /app

COPY package*.json ./

RUN npm config set unsafe-perm true
RUN chown -R node:node .
RUN npm install

COPY . ./

CMD [ "npm", "start" ]