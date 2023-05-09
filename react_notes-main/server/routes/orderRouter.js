const Router = require('express')
const router = new Router()
const orderController = require('../controllers/orderController')

router.post('/give', orderController.createGive)
router.post('/take', orderController.createTake)
router.get('/', orderController.getAll)

module.exports = router
