FROM node:18
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN apt-get update
RUN npm install -g nodemon
RUN npm install 
COPY . .
EXPOSE 4000
CMD ["npm","start"]