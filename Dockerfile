FROM node:alpine 
WORKDIR /src
COPY package.json /src/
RUN npm install
EXPOSE 3001
CMD ["npm", "start"]