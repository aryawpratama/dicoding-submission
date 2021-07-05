import { openDB } from 'idb'
import CONFIG from '../Global/Config'
let db = null
const DBInit = () => {
  db = openDB(CONFIG.DB_NAME, CONFIG.DB_VERSION, {
    upgrade (database) {
      database.createObjectStore(CONFIG.OBJECT_STORE_NAME, { keyPath: 'id' })
    }
  })
}
const DBController = {
  async get (id) {
    // console.log(id)
    if (id !== null) {
      return (await db).get(CONFIG.OBJECT_STORE_NAME, id)
    } else {
      return false
    }
  },
  async getAll () {
    return (await db).getAll(CONFIG.OBJECT_STORE_NAME)
  },
  async add (params) {
    if (params !== null) {
      return (await db).add(CONFIG.OBJECT_STORE_NAME, params)
    } else {
      return false
    }
  },
  async put (params) {
    if (params !== null) {
      return (await db).put(CONFIG.OBJECT_STORE_NAME, params)
    } else {
      return false
    }
  },
  async delete (id) {
    if (id !== null) {
      return (await db).delete(CONFIG.OBJECT_STORE_NAME, id)
    } else {
      return false
    }
  }
}
export { DBController, DBInit }
