<img src="../.github/logo.jpg" alt="logo" align="right" width="140" />

# Studio Four with Strapi

## Introduction

A backend for Studio Four using [Strapi](https://docs.strapi.io/) with a couple plugins:

- [Config Sync](https://market.strapi.io/plugins/strapi-plugin-config-sync)
- [tiptap-editor.js](https://market.strapi.io/plugins/strapi-tiptap-editor)
- [Generate Data](https://market.strapi.io/plugins/strapi-plugin-generate-data) (dev only)

## Installation

```bash
$ yarn install
```

## Running the app

Create `.env` file from `.env.example` and set environment variables before you run the service.

```bash
# Develop Strapi
$ yarn dev

# Build Strapi
$ yarn build

# Start Strapi
$ yarn start
```

## Running using Docker

Create `.env` file from `.env.example` and set environment variables before you run the service.

```bash
# Build Docker service
$ docker compose build

# Run Docker service
$ docker compose up -d

# Logging Strapi in Docker
$ docker logs -f -strapi
```

### Deployment

For this project, we have a fixed blog categories so we have to manually create it:

- News
- Events
