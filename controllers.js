const Secret = require('./Secret');
const Repo = require('./Repo');

function isFromGitHub(req, res, next) {
  const githubSecret = req.get('X-Hub-Signature');
  const secret = new Secret(req.body);

  if (secret.compareToGitHubSecret(githubSecret)) {
    res.end();
  }

  next();
};

function isFromMe(req, res, next) {
  const sender = req.body.sender.login;
  if (sender !== 'njosefbeck') {
    res.end();
  }
  
  next();
};

function updateRepo(req, res) {
  const repoName = req.params.repo;
  const repo = new Repo(repoName);
  repo.cdToDir();
  repo.gitPull();
  repo.npmUpdate();
}

function send404(req, res) {
  res.status(404).send('404');
}

module.exports = {
  isFromGitHub,
  isFromMe,
  updateRepo,
  send404
};