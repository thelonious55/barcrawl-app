const mongoose = require('mongoose')

const Schema = mongoose.Schema

const barSchema = new Schema({
    name: String,
    address: String,
})



const crawlSchema = new Schema ({
    name: String, 
    bars: [barSchema],
    date: Date,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

})

module.exports = mongoose.model('Crawl', crawlSchema)