const { Schema, model } = require('mongoose');

const noteSchema = new Schema(
    {
        title: String,
        content: { type: String, required: true},
        author: { type: String },
        levels:{type:String, possibleValues:['low', 'middle', 'high']},
        date: Date
    }, {
        timestamps: true
    });

module.exports = model('Note', noteSchema);