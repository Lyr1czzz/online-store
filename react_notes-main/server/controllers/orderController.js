const {OrderList} = require('../models/models')
const ApiError = require('../error/ApiError');

class OrderController {
    async create(req, res, next) {
        try {
            let {basketId} = req.body
            const order = await OrderList.create({basketId});

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
