import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';
import * as logger from '../util/logger'

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    logger.warn(err.stack);
    logger.info(err.serializeErrors());
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  res.status(400).send({
    errors: [{ message: 'Something went wrong' }]
  });
};
