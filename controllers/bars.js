const CrawlsModel = require('../models/crawls')

module.exports = {
    create,
    delete: deleteBar
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

async function deleteBar(req, res) {
    try {
        const crawlDoc = await CrawlsModel.findOne({'bars._id': req.params.id})

        console.log(crawlDoc)

        crawlDoc.bars.remove(req.params.id)

        await crawlDoc.save()

        res.redirect(`/crawls/${crawlDoc._id}`)
    } catch(err) {
        console.log(err)
        res.send(err)
    }
}