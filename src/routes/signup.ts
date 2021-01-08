import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validation-error';
import { BadRequestError } from '../errors/bad-request-error';
import * as logger from '../util/logger'

const router = express.Router();

const users: string[] = [];

router.post(
  '/api/users/signup',
  [
    body('email')
      .isEmail()
      .withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters')
  ],
  async (req: Request, res: Response) => {
    logger.info("inside singup");
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      logger.debug("singup errors");
      throw new RequestValidationError(errors.array());
    }

    const { email } = req.body;

    const existingUser = users.find((user) => user === email);

    if (existingUser) {
      logger.warn("User already exists");
      throw new BadRequestError('Email in use');
    } else {
      users.push(email);
      logger.debug("User added successfully");
    }

    res.status(201).send({user: email});
  }
);

export { router as signupRouter };
