FROM node

WORKDIR /home/src/

COPY package.json ./
COPY . .

RUN npm install

EXPOSE 5555

CMD ["node", "index.js"]