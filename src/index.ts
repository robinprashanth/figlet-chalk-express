import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import mongoose from 'mongoose';
import figlet from 'figlet';
import chalk  from 'chalk';
import inquirer  from 'inquirer';
import * as logger from './util/logger'

import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { chalkRouter } from './routes/chalkroute';
import { figletRouter } from './routes/figletroute';
import { consoleRouter } from './routes/consoleroute';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();
app.use(json());

app.get('/', (req, res) => {
  res.send([
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
  ]);
});

app.use(chalkRouter);
app.use(figletRouter);
app.use(consoleRouter);

app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

const start = () => {
  logger.debug("Inside start");
  figlet("LOGGER", async (error: any, data: any) => {
    if (error) {
        return process.exit(1);
    }
    console.log(chalk.blue(data));
    
    try {
      logger.info("connecting to db");
      await mongoose.connect('mongodb://auth-mongo-srv:27017/auth', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      });
      logger.info('Connected to MongoDb');
    } catch (err) {
      logger.warn('Failed to connect to MongoDb');
      logger.warn(err);
    }
  
    app.listen(3000, () => {
      logger.info('Start success and listening on port 3000!');
      console.log(chalk.blue('Check APIs available by clicking http://localhost:3000/'));
    });
  });
  
};

start();

process.on ('SIGINT', () => {
  logger.warn('Enter "Y" to shut down');
});

process.on('SIGTERM', () => {
  logger.info('ending SIGTERM');
  let questions = [
    {
      type : "input",
      name : "sender.email",
      message : "Sender's email address - "
    },
    {
      type : "input",
      name : "sender.name",
      message : "Sender's name - "
    },
    {
      type : "input",
      name : "subject",
      message : "Subject - "
    }
  ];
  inquirer.prompt(questions)
  .then(answers => {
    logger.info('ending2 SIGTERM');
    if(answers && answers === "Y") {
      process.exit(1);
    }
  })
  .catch(error => {
    logger.info('ending3 SIGTERM');
    if(error.isTtyError) {
      process.exit(1);
    } else {
      process.exit(1);
    }
  });
})
