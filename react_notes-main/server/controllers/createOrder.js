const { Basket, BasketPet, OrderList } = require('../../../server/models/models'); // импорт моделей из файла models.js
const { Op } = require('sequelize');

async function createOrderFromBasket(basketId, userId) {
    try {
        // Найти корзину по basketId и userId
        const basket = await Basket.findOne({ where: { id: basketId, userId } });
        if (!basket) {
            throw new Error('Basket not found');
        }

        // Найти все покупаемые товары из таблицы basket_pet для данной корзины
        const basketPets = await BasketPet.findAll({ where: { basketId } });
        if (!basketPets.length) {
            throw new Error('No pets in the basket');
        }

        // Создать заказ, связанный с данной корзиной
        const order = await OrderList.create({ basketId });

        // Добавить каждый товар из корзины в заказ
        await Promise.all(
            basketPets.map(async (basketPet) => {
                const { id: petId } = basketPet;
                await order.addPet(petId); // добавить связь между заказом и товаром
            })
        );

        // Удалить все товары из таблицы basket_pet для данной корзины
        await BasketPet.destroy({ where: { basketId } });

        // Вернуть созданный заказ
        return order;
    } catch (error) {
        console.error(error);
    }
}
