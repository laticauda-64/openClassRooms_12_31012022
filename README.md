# OpenClassRooms Projet 12 - Développez un tableau de bord d'analytics avec React

This git repository contains all necessary code to run the React web app (Front).

## Let's get started !

This project was made with [Vite.js](https://vitejs.dev/). You don't know Vite ? Ok it's the same purpose than traditionnal "Create React App" but with huge enhancements, ([See here](https://medium.com/codex/you-should-choose-vite-over-cra-for-react-apps-heres-why-47e2e7381d13)), and it was made by [Evan You](https://evanyou.me/).

You will need some dependencies for running this project :

-   React (17.0.2)
-   Recharts (2.1.8)
-   React Router (6+)
-   Styled-components: (5.3.3)
-   Zustand (3.6.9)

Also, i assume that you will use NodeJS at version 16 or more.

## Installation :

Just run usual commands to get the needed dependecies
`npm install or yarn`

## Scripts :

Launch the app in developpement mode
`npm run dev or yarn dev`
Project is being served on port 3010 (cause backend is using 3000) but you can change that in vite.config.js file.

Make the final build for serve in production
`npm run build or yarn build``
Output files goes in the 'dist' folder with usual optimisations (js bundling, css minifying, etc...)

Locally preview production build
`npm run preview or yarn preview``

## External Api

You can run this project with mocked data by passing the correct option in the config/config.js file, but if you wish to test it real, you'll need a backend.
You can find one made by the OpenClassRooms team [here](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard).
Read their instructions to launch the script.
Also you should take a look at this [Pull Request](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard/pull/11) before launching it.

## A little more on available routes

At the moment, they are only 2 users available (num 12 & 18) in the mock & backend api.
Project route should looks like :

`http://localhost:3010/user/12`
`http://localhost:3010/user/18`
