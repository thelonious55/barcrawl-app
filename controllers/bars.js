const CrawlsModel = require('../models/crawls')

module.exports = {
    create
}

async function create(req, res) {
    try{
        const crawlDoc = await CrawlsModel.findById(req.params.id)

    

        crawlDoc.bars.push(req.body)

        await crawlDoc.save()

        console.log(req.params)

        res.redirect(`/crawls/${req.params.id}`)
    } catch(err) {
        console.log(err)
        res.send(err)
    }
}