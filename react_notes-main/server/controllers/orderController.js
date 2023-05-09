const {OrderList} = require('../models/models')
const ApiError = require('../error/ApiError');

class OrderController {
    async createGive(req, res, next) {
        try {
            const {basketId, userName, orderType = false} = req.body
            const order = await OrderList.create({userName, orderType, basketId});

            return res.json(order)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async createTake(req, res, next) {
        try {
            const {userName, orderType = true} = req.body
            const order = await OrderList.create({userName, orderType});

            return res.json(order)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let order;
        order = await OrderList.findAndCountAll({limit, offset})


        return res.json(order)
    }
}

module.exports = new OrderController()
