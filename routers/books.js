const express = require('express')
const Book = require('../model/book')

const router = express.Router()

router.get('/', async(req, res)=>{
   try {

    const books = await Book.find()
    res.json(books)
    
   } catch (error) {
     res.send('error'+error)
   }
})
router.get('/:id', async(req, res)=>{
    try {
 
     const books = await Book.findById(req.params)
     res.json(books)
     
    } catch (error) {
      res.send('error'+error)
    }
 })

router.post('/', async(req,res)=>{
    const book = new Book({
        Name: req.body.Name,
        Author: req.body.Author,
        Publisher: req.body.Publisher
    })
    try {
        const b = await book.save()
        res.json(b)
    } catch (error) {
        res.send('error'+error)
    }
})
module.exports = router