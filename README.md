# Microservice template for NodeJS

![Microservice](https://img.shields.io/badge/microservice-ready-brightgreen.svg?style=for-the-badge)
[![Build status](https://img.shields.io/travis/com/microservices/node/master.svg?style=for-the-badge)](https://travis-ci.com/microservices/node)

An OMS template for NodeJS + ExpressJS.

## Setup

MakLatest LTS version of Node.js 10.
[See Releases](https://nodejs.org/en/about/releases/).

```sh
npm i
```

First, install the [Commitizen cli](https://github.com/commitizen/cz-cli) tools:

```shell
npm install commitizen -g
```

Next, initialize your project to use the `cz-conventional-changelog` adapter by
typing

```sh
commitizen init cz-conventional-changelog --yarn --dev --exact
```

Use the following to replace `git commit`:

```sh
npm run commit
```

## Example Usage

Call the service from your terminal:

``` sh
oms run scrape \
  -a url=https://httpbin.org/html \
  -e SCRAPER_API_ORIGIN=http://api.scraperapi.com \
  -e SCRAPER_API_KEY=XXXXXXXXXXXXXXXXXXXXX
```

And you should see output that looks like the following:

```
ℹ Building Docker image
…
✔ Built Docker image with name: oms/matthewhudson/oms-scrape-url-html
✔ Started Docker container: 1c8a91688261
✔ Health check passed
✔ Ran action: `scrape` with output: ...
✔ Stopped Docker container: 1c8a91688261
```
