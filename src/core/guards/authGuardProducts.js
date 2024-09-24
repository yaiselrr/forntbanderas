import SimpleCrypto from "simple-crypto-js"
import { extract_user_data } from "~h/utils/utils"

const simpleCrypto = new SimpleCrypto(import.meta.env.VITE_TOKEN_KEY)

const authGuardProducts = (to, from, next) => {
  let isAuth = localStorage.getItem(import.meta.env.VITE_APP_HASH) !== undefined ?? localStorage.getItem(import.meta.env.VITE_APP_HASH)
  let user = localStorage.getItem(import.meta.env.VITE_APP_HASH) ? Object.freeze(extract_user_data("user", simpleCrypto.decrypt(localStorage.getItem(import.meta.env.VITE_APP_HASH)))) : null
    

  if (isAuth) {
    if (user) {
      let permissions = user.array_permission.map(item => item.name).filter((element) => {
        return element.includes('products.crud')
      })
      let permissionsRead = user.array_permission.map(item => item.name).filter((element) => {
        return element.includes('products.read')
      })
      if (permissions.length > 0 || permissionsRead.length > 0) {
        next()
      } else {
        next('/')
      }
    } else {
      next('/')
    }
  } else {
    next('/')
  }
}
export default authGuardProducts
