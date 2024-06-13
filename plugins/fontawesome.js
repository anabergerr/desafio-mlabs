import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram, faLinkedin, faYoutube, faPinterest, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons'

library.add(
  faInstagram,
  faLinkedin,
  faYoutube,
  faPinterest,
  faTwitter,
  faFacebook,
  faThumbsUp,
  faComment,
  faShare
)

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})