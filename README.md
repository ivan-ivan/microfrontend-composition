# Microfrontend composition

This web application consists of several sub-applications (micro frontends or mfe) that are loaded into the main (container) application at runtime.

Each micro frontend application is placed in a separate project and has its package.json, dependencies, and build strategy.

- the app utilizes a custom-written runtime integration via JavaScript
- each section of the container app has its own scroll policy

##### Please use node version 18.X.X for seamless operation of the application

## To run container app

- `npm install`

- `npm run dev`

This will start the webpack dev server at 5005 port

## To run grid mfe

- `npm install`

- `npm run dev`

This will start the webpack dev server at 5001 port

## To run text mfe

- `npm install`

- `npm run dev`

This will start the webpack dev server at 5002 port

## To run image mfe

- `npm install`

- `npm run dev`

This will start the webpack dev server at 5003 port

## To run list mfe

- `npm install`

- `npm run dev`

This will start the webpack dev server at 5004 port
