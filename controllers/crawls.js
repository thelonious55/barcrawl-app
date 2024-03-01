const CrawlsModel = require('../models/crawls')


module.exports = {
    index,
    new: newCrawl,
    create,
    show,
    edit,
    update
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
        // const stringDate = crawlDocumentsFromTheDB[0].date.toDateString()
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

async function edit(req, res) {
    const crawl = await CrawlsModel.findOne({_id: req.params.id})
    if (!crawl) return res.redirect('/crawls')
    res.render('crawls/edit', {crawl})
}


async function update(req, res) {
    try {
        console.log(req.body)
        const updatedCrawl = await CrawlsModel.findOneAndUpdate(
            {_id: req.params.id}, req.body, {new: true}
        )



        console.log(updatedCrawl)
        
        
        
        return res.redirect(`/crawls/${updatedCrawl._id}`)
    } catch(err) {
        console.log(err)
        res.redirect('crawls/edit', {errorMsg: err.message})
    }
}