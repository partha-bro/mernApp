# mernApp
MERN App : Mongo + Express + React + Node

## Requirements
- Install node:v16+
- Install nodemon
    $ npm i -g nodemon
- package install
    - $ npm install
- start project
    - $ npm start

## Packages
```
- Project
    └── concurrently@7.6.0
- Client
    ├── @types/react-dom@18.0.10
    ├── @types/react@18.0.26
    ├── @vitejs/plugin-react@2.2.0
    ├── react-dom@18.2.0
    ├── react@18.2.0
    └── vite@3.2.5
- Server
    ├── cors@2.8.5
    ├── dotenv@16.0.3
    ├── express-async-errors@3.1.1
    ├── express@4.18.2
    ├── jsonwebtoken@9.0.0
    ├── mongoose@6.8.3
    └── morgan@1.10.0
```

## Project Timeline [ Git Branches ]

- 01-Init
    - Initial Setup of client and server

- 02-MVC
    - MVC architecture style codding 
        - models
        - views
        - controllers
        - routers
        - middlewares
        - errors

- 03-Router
    - Setup Router and controller

- 04-Mid_Err
    - not found route
    - error class
    - custom error class
    - express-async-errors package

- 05-Db
    - Database setup and connect

- 06-REST
    - Make REST API of CURD opration

- 07-login/signup
    - Complete login and signup with proper validation with error throw

- 08-Auth
    - Authentication and authorization
    - jwt token
    - bcrypt
    - APIs [routes]
        - localhost:5000 [endPoint]
            - getHome: /
            - getError: /error
            - login: /login
            - register: /api/v1/users
            - allUsers: /api/v1/users       [auth provide]
            - oneUsers: /api/v1/user/id     [auth provide]
            - patch: /api/v1/user/id        [auth provide]
            - delete: /api/v1/user/id       [auth provide]