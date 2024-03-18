
const chatBot = require('./chatbot')


function route(app) {

    app.use('/', chatBot);

}

module.exports = route;
