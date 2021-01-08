# Figlet-Chalk-Express

👩🏻‍💻 Developer Ready. Make your console look groovy and colorful. This is a basic express project to demonstrate the sue of figlet and chalk npm packages.Figlet is used to create a fancy ascii-based banner and chalk is used for colorizing the output.
These packages are used for developing command line applications or styling console logs.

🏃🏽 Instant Value: All basic tools included and configured:

- [TypeScript][typescript] [4.1][typescript-4-1]
- Simple example of TypeScript Express code.


## Getting Started

This project is intended to be used with the latest Active LTS release of Node.js.

### Clone repository

To clone the repository use the following commands:

```sh
git clone https://github.com/robinprashanth/figlet-chalk-express.git
cd figlet-chalk-express
npm install
```

## Available Scripts

- `start` - starts the express project

## Available Endpoints
```json
[
    {
      "name": "signup",
      "path": "http://localhost:3000/api/users/signup",
      "method": "post",
      "postBodyExample": {
        "email": "test@gmail.com",
        "password": "Standarssd"
      }
    },
    {
      "name": "signin",
      "method": "post",
      "path": "http://localhost:3000/api/users/signin"
    },
    {
      "name": "signout",
      "method": "post",
      "path": "http://localhost:3000/api/users/signout"
    },
    {
      "name": "chalk - Terminal string styling using chalk package https://www.npmjs.com/package/chalk",
      "method": "get",
      "path": "http://localhost:3000/api/chalk"
    },
    {
      "name": "figlet - is a program for making large letters out of ordinary text.",
      "method": "post",
      "postBodyExample": {
        "name": "test",
        "font": "Standard || Row || 3-D || 3D Diagonal  || 3D-ASCII|| AMC Thin|| Banner|| Banner3-D",
        "horizontalLayout": "default || full|| fitted || controlled smushing || universal smushing'",
        "verticalLayout": "default || full|| fitted || controlled smushing || universal smushing'"
      },
      "path": "http://localhost:3000/api/figlet"
    },
    {
      "name": "console - The console object provides access to the browser's debugging console ",
      "method": "get",
      "path": "http://localhost:3000/api/console"
    }
  ]
```
or else open http://localhost:3000/ on your favorite browser to list available APIs

## Additional Informations
## License

Licensed under the MIT.

## TODO
- Adding Testcases