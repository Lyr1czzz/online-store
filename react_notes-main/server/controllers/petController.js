const uuid = require('uuid')
const path = require('path');
const {Pet, PetInfo} = require('../models/models')
const ApiError = require('../error/ApiError');

class PetController {
    async create(req, res, next) {
        try {
            let {name, price, rarityId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const pet = await Pet.create({name, price, rarityId, typeId, img: fileName});

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    PetInfo.create({
                        title: i.title,
                        description: i.description,
                        petInfo: pet.id
                    })
                )
            }

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

    async getOne(req, res) {
        const {id} = req.params
        const pet = await Pet.findOne(
            {
                where: {id},
                include: [{model: PetInfo, as: 'info'}]
            },
        )
        return res.json(pet)
    }
}

module.exports = new PetController()
