import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validation-error';
import { BadRequestError } from '../errors/bad-request-error';
import * as logger from '../util/logger'
import chalk  from 'chalk';
import figlet from 'figlet';

const router = express.Router();

router.post(
  '/api/figlet',
  [
    body('name')
      .exists()
  ],
  async (req: Request, res: Response) => {
    logger.info("inside figlet");
    const errors = validationResult(req);
    const { name, font, horizontalLayout, verticalLayout } = req.body;

    if (!errors.isEmpty()) {
      logger.debug("figlet errors");
      throw new RequestValidationError(errors.array());
    }
    figlet(name, {
      font: font || "Standard",
      horizontalLayout: horizontalLayout || "default",
      verticalLayout: verticalLayout || "default"
    } ,async (error: any, data: any) => {
      if (error) {
          return process.exit(1);
      }
      console.log(chalk.blue(data));
    });

    res.send("check your server console");
  }
);

export { router as figletRouter };
