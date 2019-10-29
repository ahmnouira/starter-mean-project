let mongoose = require('mongoose');
let Shema = mongoose.Schema;

let userShema = new Shema({
    firstName : {type: String},
    lastName : {type: String},
    password : {type: String, validate: [function(psd){    // validate: create a custom validator
        return psd.length >= 6;
    },
    'Password Should be longer than 5 characters'
    ]},
    email :    {type: String, index: true, unique:true, match:/.+\@.+\..+/},   //match: input format, pattern
    username : {type:String, trim: true, unique: true, required: true},
    created : {type: Date, default: Date.now},
    role: {type: String, enum: ['Admin', 'User']}   // enum: allow the insertion of only these 2 possible strings
     
});

userShema.virtual('fullName').get(function(){
    return this.firstName + ' ' + this.lastName;
}).set(function(fullName){
    const splitName = fullName.split(' ');
    this.firstName = splitName[0] || '';
    this.lastName = splitName[1] || '';
});

// statics methods give you the ability to perform model level operations, such as extra 'find' methods
userShema.statics.findOneByUsername = function(username,
    callback) {
    this.findOne({ username: new RegExp(username, 'i') },
    callback);
};

// instance methods
userShema.methods.authenticate = function(psd) {
    return this.password === psd;
};

userShema.post('save', function(next){
    console.log('The User "' + this.username + '" details were saved.');
});


let User = mongoose.model('User', userShema)

module.exports = User;


