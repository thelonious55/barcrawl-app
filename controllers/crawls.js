const CrawlsModel = require('../models/crawls')

module.exports = {
    index,
    new: newCrawl
}

async function index(req, res) {
    try {
        // const crawlDocumentFromTheDB = await CrawlsModel.find({})
        // console.log(crawlDocumentFromTheDB)
        // , {crawlsDocs: crawlDocumentFromTheDB}
        res.render('crawls/index')
    } catch(err) {
        console.log(err)
        res.redirect('/')
    }
}

function newCrawl(req, res) {
    res.render('crawls/new')
}