import { deleteDB, openDB } from 'idb'
import CONFIG from '../Global/Config'
let db = null
const DBInit = () => {
  db = openDB(CONFIG.DB_NAME, CONFIG.DB_VERSION, {
    upgrade (database) {
      database.createObjectStore(CONFIG.OBJECT_STORE_NAME, { keyPath: 'id' })
    }
  })
}
const DBDrop = () => {
  db = deleteDB(CONFIG.DB_NAME)
}
const DBController = {
  async get (id) {
    return (await db).get(CONFIG.OBJECT_STORE_NAME, id)
  },
  async getAll () {
    return (await db).getAll(CONFIG.OBJECT_STORE_NAME)
  },
  async add (params) {
    return (await db).add(CONFIG.OBJECT_STORE_NAME, params)
  },
  async put (params) {
    return (await db).put(CONFIG.OBJECT_STORE_NAME, params)
  },
  async delete (id) {
    return (await db).delete(CONFIG.OBJECT_STORE_NAME, id)
  }
}
export { DBController, DBInit, DBDrop }
