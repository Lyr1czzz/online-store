const uuid = require('uuid')
const {Pet} = require('../models/models')
const ApiError = require('../error/ApiError');
const path = require('path');

class PetController {
    async create(req, res, next) {
        try {
            let {name, price, rarityId, typeId} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const pet = await Pet.create({name, price, rarityId, typeId, img: fileName});

            return res.json(pet)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let {rarityId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let pets;
        if (!rarityId && !typeId) {
            pets = await Pet.findAndCountAll({limit, offset})
        }
        if (rarityId && !typeId) {
            pets = await Pet.findAndCountAll({where:{rarityId}, limit, offset})
        }
        if (!rarityId && typeId) {
            pets = await Pet.findAndCountAll({where:{typeId}, limit, offset})
        }
        if (rarityId && typeId) {
            pets = await Pet.findAndCountAll({where:{typeId, rarityId}, limit, offset})
        }
        return res.json(pets)
    }
}

module.exports = new PetController()
