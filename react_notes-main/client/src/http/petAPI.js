import {$authHost, $host} from "./index";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createRarity = async (rarity) => {
    const {data} = await $authHost.post('api/rarity', rarity)
    return data
}

export const fetchRarities = async () => {
    const {data} = await $host.get('api/rarity', )
    return data
}

export const createPet = async (pet) => {
    const {data} = await $authHost.post('api/pet', pet)
    return data
}

export const fetchPets = async (typeId, rarityId, page, limit= 5) => {
    const {data} = await $host.get('api/pet', {params: {
            typeId, rarityId, page, limit
        }})
    return data
}

export const fetchOnePet = async (id) => {
    const {data} = await $host.get('api/pet/' + id)
    return data
}
