import SimpleCrypto from "simple-crypto-js"
import { extract_user_data } from "~h/utils/utils"

const simpleCrypto = new SimpleCrypto(import.meta.env.VITE_TOKEN_KEY)

const accessSystemGuard = (to, from, next) => {
  let isAuth = localStorage.getItem(import.meta.env.VITE_APP_HASH) !== undefined ?? localStorage.getItem(import.meta.env.VITE_APP_HASH)
  let user = localStorage.getItem(import.meta.env.VITE_APP_HASH) ? Object.freeze(extract_user_data("user", simpleCrypto.decrypt(localStorage.getItem(import.meta.env.VITE_APP_HASH)))) : null

  if (isAuth) {
    console.log(isAuth);
    if (user) {
      if (user.array_role[0].name != 'Colaborador') {
        console.log(user);
        next()
      }else{
        next('/')
      }
    } else {
      next('/')
    }
  } else {
    next('/')
  }
}
export default accessSystemGuard
