const Router = require('express')
const router = new Router()
const petRouter = require('./petRouter')
const userRouter = require('./userRouter')
const rarityRouter = require('./rarityRouter')
const typeRouter = require('./typeRouter')
const noteRouter = require('./noteRouter')
const tagRouter = require('./tagRouter')
const filesRouter = require('./filesRouter')
const filterRouter = require('./filterRouter')

router.use('/user', userRouter)
router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', rarityRouter)
router.use('/device', petRouter)

router.use('/file', filesRouter)
router.use('/filter', filterRouter)
router.use('/note', noteRouter)
router.use('/tag', tagRouter)

module.exports = router