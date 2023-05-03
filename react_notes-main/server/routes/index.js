const Router = require('express')
const router = new Router()
const petRouter = require('./petRouter')
const userRouter = require('./userRouter')
const rarityRouter = require('./rarityRouter')
const typeRouter = require('./typeRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/rarity', rarityRouter)
router.use('/pet', petRouter)

module.exports = router