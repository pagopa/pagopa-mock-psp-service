FROM node:14-alpine

WORKDIR /src

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 8090

RUN npm run generate build
CMD ["node", "dist/index.js"]

