FROM node:alpine

WORKDIR /app

COPY . /app

RUN npm install
RUN npm install pm2 -g

CMD ["pm2-runtime","app.js"]
