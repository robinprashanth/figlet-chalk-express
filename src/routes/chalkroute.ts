import express from 'express';
import * as logger from '../util/logger'
import chalk  from 'chalk';

const router = express.Router();

router.get('/api/chalk', (req, res) => {
  logger.debug("Inside chalk");

  console.log(chalk.keyword('orange')('Yay for orange colored text!'));
  console.log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
  console.log(chalk.hex('#DEADED').bold('Bold gray!'));
  console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

  console.log(`
    CPU: ${chalk.red('90%')}
    RAM: ${chalk.green('40%')}
    DISK: ${chalk.yellow('70%')}`
  );

  res.send('Check your server console');
});

export { router as chalkRouter };
