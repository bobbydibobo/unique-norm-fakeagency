/*---------------------
DEPENDENCIES
---------------------*/
const mongoose = require('mongoose');

/*---------------------
MONGOOSE SCHEMA
---------------------*/
const projectSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    teaser: {
        type: String,
        required: true
    },
    details: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    },
    img: {
        data: Buffer,
        contentType: String
    }

});

/*---------------------
PROJECT OBJECT
---------------------*/
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;