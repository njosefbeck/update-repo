require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const chalk = require('chalk');
const app = express();
const routes = require('./routes');

app.use(helmet({
  referrerPolicy: {
    policy: 'no-referrer'
  },
  permittedCrossDomainPolicies: {
    permittedPolicies: 'none'
  },
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      frameAncestors: ["'none'"]
    }
  }
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(process.env.PORT, () => {
  return console.log(`${chalk.green('update-repo listening on port:')} ${chalk.yellow(process.env.PORT)}`);
});