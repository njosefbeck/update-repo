const shell = require('shelljs');
const chalk = require('chalk');

class Repo {
  constructor(name) {
    this.name = name;
    this.dirPath = `${process.env.BASE_DIRECTORY}/${name}`;
  }

  cdToDir() {
    shell.cd(this.dirPath);
    console.log(`${chalk.green('Changed to dir:')} ${chalk.yellow(process.cwd())}`);
  }

  gitPull() {
    console.log(chalk.green(`Starting git pull for ${this.name} repo...`));
    const pull = shell.exec('git pull');
    console.log(chalk.green(`Done with git pull`));
  }

  npmUpdate() {
    console.log(chalk.green(`Starting npm update for ${this.name} repo...`));
    const npmUpdate = shell.exec('npm update');
    console.log(chalk.green(`Done with npm update`));
  }
};

module.exports = Repo;