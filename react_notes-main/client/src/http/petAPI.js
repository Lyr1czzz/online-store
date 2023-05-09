import {$authHost, $host} from "./index";

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const fetchRarities = async () => {
    const {data} = await $host.get('api/rarity', )
    return data
}

export const fetchPets = async (typeId, rarityId, page, limit= 5) => {
    const {data} = await $host.get('api/pet', {params: {
            typeId, rarityId, page, limit
        }})
    return data
}

export const createTake = async (pet) => {
    const {data} = await  $authHost.post('api/order/take', pet)
    return data
}

export const createGive = async (basketId, userName, orderType = false) => {
    const {data} = await  $authHost.post('api/order/give', {params: {
            basketId,
            userName,
            orderType
        }})
    return data
}