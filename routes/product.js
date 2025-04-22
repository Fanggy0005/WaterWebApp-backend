// Routes => กำหนดเส้นทางของแต่ละคำสั่งว่าเริ่มต้นและจบลงที่ไหน

const express = require('express')
const router = express.Router()
const { read, list, create, update, remove } = require('../controllers/product')

// middleware
const { auth } = require('../middleware/auth')

// http://localhost:5000/api/product
router.get('/product',auth, list)  //get
router.get('/product/:id', auth, read)  //getId
router.post('/product', auth, create)  //post
router.put('/product/:id', auth, update)  //put
router.delete('/product/:id', auth, remove)  //delete

module.exports = router