const mongoose = require('mongoose');

/* To fix all deprecation warnings : https://mongoosejs.com/docs/deprecations.html */
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const mongoDB = 'mongodb://localhost:3333/MEAN_web_dev';

mongoose.connect(mongoDB, (err) => {
    if(err) {console.log(err)}
});

mongoose.connection.on('open', () => {
    console.log('mongoose conneted')
});
