const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    visibility: {
        type: String,
        enum: ['Public', 'Connections'],
        default: 'Public'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Query = mongoose.model('Query', querySchema);

module.exports = Query;
