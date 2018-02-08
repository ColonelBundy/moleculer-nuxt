![Moleculer logo](https://raw.githubusercontent.com/ice-services/moleculer/HEAD/docs/assets/logo.png)

# Nuxt.js + Express + Moleculer
> This is a fork, You can find the original template [here](https://github.com/nuxt-community/express-template)

## Installation

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

```bash
vue init ColonelBundy/moleculer-nuxt <project-name>
cd <project-name> # move to your project
npm install # or yarn install
```

> Make sure to use a version of vue-cli >= 2.1 (vue -V).

## ExpressJS Changes

- There is a  `server` directory with the root of your `express` server.
- The `moleculer.js` contains your `moleculer-web` service & broker options.
- The `server/services` directory contains your services.

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start ExpressJS server in development with Nuxt.js in dev mode (hot reloading). Listen on [http://localhost:3000](http://localhost:3000). |
| `npm run build` | Build the nuxt.js web application for production. |
| `npm start` | Start ExpressJS server in production. |

## Backpack

We use [backpack](https://github.com/palmerhq/backpack) to watch and build the application, so you can use the latest ES6 features (module syntax, async/await, etc.).

## Documentation

- [Moleculer](http://moleculer.services/docs/)
- [ExpressJS](http://expressjs.com/en/guide/routing.html)
- [Nuxt.js](https://nuxtjs.org/guide/)
- [Vue.js](http://vuejs.org/guide/)

## Licenses
- [Moleculer license](https://github.com/ice-services/moleculer/blob/master/LICENSE)
- [ExpressJS license](https://github.com/expressjs/express/blob/master/LICENSE)
- [NuxtJS license](https://github.com/nuxt/nuxt.js/blob/master/LICENSE.md)
- [VueJS license](https://github.com/vuejs/vue/blob/master/LICENSE)
