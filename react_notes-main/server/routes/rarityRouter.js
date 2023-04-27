const Router = require('express')
const router = new Router()
const rarityController = require('../controllers/rarityController')

router.post('/', rarityController.create)
router.get('/', rarityController.getAll)

module.exports = router
