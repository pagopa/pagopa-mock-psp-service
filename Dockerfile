FROM node:14-alpine
COPY dist dist
COPY node_modules node_modules
RUN ls -lrt
WORKDIR /src
COPY ["package.json", "package-lock.json*", "./"]
COPY . .
EXPOSE 8090
RUN ls -lrt
CMD ["node", "dist/index.js"]