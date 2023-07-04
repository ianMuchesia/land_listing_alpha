const express = require('express')
const { sms, phoneCall, whatsapp, getPhones } = require('../controllers/communicationController')

const router = express.Router()


router.post('/sms', sms)
router.post('/phone', phoneCall)
router.post('/whatsapp', whatsapp)
router.get('/phone', getPhones)


module.exports = router