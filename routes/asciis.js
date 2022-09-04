const express = require('express')
const router = express.Router()
const asciisController = require('../controllers/asciis') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, asciisController.getAsciis)

router.post('/createAscii', asciisController.createAsciiArt)

// router.put('/markComplete', todosController.markComplete)

// router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteAscii', asciisController.deleteAscii)

module.exports = router