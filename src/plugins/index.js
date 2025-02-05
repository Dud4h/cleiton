import vuetify from './vuetify'
import router from '@/router'
import store from "@/store/store.js";

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(store)
    .use(router)
}
