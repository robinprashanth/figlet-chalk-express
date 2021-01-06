import express from 'express';
import * as logger from '../util/logger'

const router = express.Router();

router.post('/api/users/signin', (req, res) => {
  logger.debug("Inside signin");
  res.send('Signin Success');
});

export { router as signinRouter };
