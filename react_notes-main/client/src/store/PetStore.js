import {makeAutoObservable} from "mobx";

export default class PetStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Golden'}
        ]
        this._rarities = [
            {id: 1, name: 'Basic'}
        ]
        this._pets = [
            {id: 1, name: 'Cat'}
        ]
        this._selectedType = {}
        this._selectedRarity = {}
        this._page = 1
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setRarities(rarities) {
        this._rarities = rarities
    }
    setPets(pets) {
        this._pets = pets
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedRarity(rarity) {
        this.setPage(1)
        this._selectedRarity = rarity
    }
    setPage(page) {
        this._page = page
    }

    get types() {
        return this._types
    }
    get rarities() {
        return this._rarities
    }
    get pets() {
        return this._pets
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedRarity() {
        return this._selectedRarity
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}
