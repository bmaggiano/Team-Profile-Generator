const index = require('../index')

class Manager {
    constructor(name, id, email, number) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.number = number;
}

getName() {
    return this.name
}

}
module.exports = Manager;