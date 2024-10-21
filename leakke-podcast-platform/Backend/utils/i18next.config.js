const i18next = require('i18next')
const Backend = require('i18next-fs-backend')
const middleware = require('i18next-http-middleware')

const i18nextInit = () => {
  i18next.use(Backend).use(middleware.LanguageDetector)
    .init({
      fallbackLng: 'he',
      backend: {
        loadPath: 'locales/{{lng}}/translation.json',
      },
      returnObjects: true,
    })
}
module.exports = { i18nextInit }
