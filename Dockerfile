FROM node:14-alpine

WORKDIR /src

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install 

COPY . .

EXPOSE 8090
RUN find . -name "index.d.ts" |grep node_modules/@types/express-serve-static-core
RUN node_modules/.bin/tsc -v
RUN npm run generate build
CMD ["node", "dist/index.js"]

