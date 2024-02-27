const CrawlsModel = require('../models/crawls')


module.exports = {
    index,
    new: newCrawl,
    create,
    show
}

async function show(req, res) {
    try{
        const crawlFromTheDatabase= await CrawlsModel.findById(req.params.id)
                                            
        res.render('crawls/show', {
            crawl: crawlFromTheDatabase
        })
        
    } catch(err) {
        console.log(err)
        res.send(err)
    }
}

async function index(req, res) {
    try {
        const crawlDocumentsFromTheDB = await CrawlsModel.find({})
        console.log(crawlDocumentsFromTheDB)
        res.render('crawls', {crawlDocs: crawlDocumentsFromTheDB})
    } catch(err) {
        console.log(err)
        res.redirect('/')
    }
}

async function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key]
    }
    try {
        const crawlFromTheDatabase = await CrawlsModel.create(req.body)

        res.redirect('/crawls')
        //^ add ._id after route is set up
    } catch(err) {
        console.log(err)
        res.render('crawls/new', {errorMsg: err.message})
    }
}

function newCrawl(req, res) {
    res.render('crawls/new')
}