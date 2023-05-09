const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    permissions: {type: DataTypes.JSON, default: null}
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketPet = sequelize.define('basket_pet', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const OrderList = sequelize.define('order_list', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Pet = sequelize.define('pet', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.FLOAT, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Rarity = sequelize.define('rarity', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const TypeRarity = sequelize.define('type_rarity', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketPet)
BasketPet.belongsTo(Basket)

Basket.hasMany(OrderList)
OrderList.belongsTo(Basket)

Type.hasMany(Pet)
Pet.belongsTo(Type)

Rarity.hasMany(Pet)
Pet.belongsTo(Rarity)

Pet.hasMany(BasketPet)
BasketPet.belongsTo(Pet)

Type.belongsToMany(Rarity, {through: TypeRarity})
Rarity.belongsToMany(Type, {through: TypeRarity})

module.exports = {
    User,
    Basket,
    BasketPet,
    OrderList,
    Pet,
    Type,
    Rarity,
    TypeRarity,
}
