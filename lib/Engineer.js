const index = require('../index')

function Engineers(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
}

module.exports = Engineers;