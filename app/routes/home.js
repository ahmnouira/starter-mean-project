const index = require('../controllers/home');

module.exports = (app) => {
    app.get('/', index.index);
}