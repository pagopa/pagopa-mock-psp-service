FROM node:14-alpine
RUN cd /home/vsts/work/1/s

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