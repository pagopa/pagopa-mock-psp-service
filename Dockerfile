FROM node:14-alpine@sha256:434215b487a329c9e867202ff89e704d3a75e554822e07f3e0c0f9e606121b33

RUN pwd
RUN ls -lrt

COPY dist dist
COPY node_modules node_modules

WORKDIR /src
COPY ["package.json", "package-lock.json*", "./"]
COPY . .
EXPOSE 8090
RUN ls -lrt
CMD ["node", "dist/index.js"]