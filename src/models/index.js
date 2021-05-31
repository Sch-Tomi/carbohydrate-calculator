import { Database } from '@vuex-orm/core'
import Item from './mealCalculator/Item'

const database = new Database()

database.register(Item)

export {
    database as default,
    Item,
}
