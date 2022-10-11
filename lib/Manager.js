const index = require('../index')

function Manager(name, id, email, number) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.number = number;
}

module.exports = Manager;