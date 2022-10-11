const index = require('../index')

function Engineer(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
}

module.exports = Engineer;