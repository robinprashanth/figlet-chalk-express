import express from 'express';
import * as logger from '../util/logger'

const router = express.Router();

router.get('/api/console', (req, res) => {
  const name = {firstName: "John", lastName: "Smith"}

  console.error("error msg");
  console.warn("warn msg");
  console.debug("debug msg");

  // Prints value in table
  console.table(["apples", "oranges", "bananas"]);
  console.table(name);

  // The Console method dir() displays an interactive list of the properties of the specified JavaScript object.
  console.dir(logger);

  console.time("timer");
  for(let i = 0; i < 100 ; i++) {
    // nothing here
  }
  console.timeEnd("timer");
  // Beautify log. This does not work on terminals but works on browsers.
  console.log("%c Beautify log. This does not work on terminals but works on browsers.",
  "background-color: fuchsia ; color: white ; font-weight: bold ; " +
  "font-size: 20px ; font-style: italic ; text-decoration: underline ; " +
  "font-family: 'american typewriter' ; text-shadow: 1px 1px 3px black ;");

  res.send("check your server console");
});

export { router as consoleRouter };
