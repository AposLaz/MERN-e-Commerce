FROM node:18
RUN mkdir -p /usr/src/react
WORKDIR /usr/src/react
COPY package*.json ./
RUN apt-get update
RUN npm install 
# COPY . /usr/src/react
COPY . .
EXPOSE 3000
CMD ["npm","start"]