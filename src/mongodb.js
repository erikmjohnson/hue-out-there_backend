'use strict';


const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
};

/** NODE PACKAGES
 * Dotenv
 * Mongoose
 */

require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, options);


/** Connects Mongoose to the Mongo DB */
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log("Connection Successful!");
});

/** Creates a new schema for the lights */
let lightsSchema = mongoose.Schema({
    group_name:{type: String, required: true},
    single_name:{type: String, required: true}
})

let lightSet = mongoose.model('lightSet', lightsSchema);

/** Establishes a group of lights */
let lightBulbs = new lightSet({group_name:'midterm', single_name:'larry'});

/** Save function with error handler */
lightBulbs.save(function (err, light) {
    if (err) return console.error(err);
    console.log(light.id + " saved to lights collection.");
});

