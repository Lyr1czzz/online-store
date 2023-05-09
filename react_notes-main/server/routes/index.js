const Router = require('express')
const router = new Router()
const petRouter = require('./petRouter')
const userRouter = require('./userRouter')
const rarityRouter = require('./rarityRouter')
const typeRouter = require('./typeRouter')
const orderRouter = require('./orderRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/rarity', rarityRouter)
router.use('/pet', petRouter)
router.use('/order', orderRouter)

module.exports = router