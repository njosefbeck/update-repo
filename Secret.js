const crypto = require('crypto');

class Secret {
  constructor(body) {
    this.code = process.env.SECRET;
    this.body = JSON.stringify(body);
  }

  get hash() {
    const hashedSecret = crypto
      .createHmac('sha1', this.code)
      .update(this.body)
      .digest('hex');

    return `sha1=${hashedSecret}`;
  }

  compareToGitHubSecret(ghToken) {
    return ghToken !== this.hash; 
  }
};

module.exports = Secret;