import Vue from 'vue'
import VueI18n from 'vue-i18n'

import store from '@/store/store'

import messages from '@/locales'

Vue.use(VueI18n)

export default new VueI18n({
  locale: store.getters.language,
  fallbackLocale: 'el',
  messages
})
