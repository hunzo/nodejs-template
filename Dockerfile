FROM node:alpine
WORKDIR /usr/app
COPY . /usr/app
RUN npm install
RUN npm install pm2 -g
# COPY ./ ./ 

# start Program
# CMD ["npm","start"]
CMD ["pm2-runtime","app.js"]
