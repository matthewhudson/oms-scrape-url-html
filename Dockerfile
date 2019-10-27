FROM        node:10-alpine

RUN         mkdir /app
COPY        package.json package-lock.json /app/
COPY        src /app/src
RUN         npm install --prefix /app

ENTRYPOINT  ["node", "/app/src/index.js"]
