const i18next = require('i18next')
const Backend = require('i18next-fs-backend')
const middleware = require('i18next-http-middleware')

const transformArrayToObject = (data) => {
  return data.reduce((acc, item) => {
    const key = Object.keys(item)[0];
    acc[key] = item[key];
    return acc;
  }, {});
};

const i18nextInit = () => {
  i18next.use(Backend).use(middleware.LanguageDetector)
    .init({
      fallbackLng: 'he',
      backend: {
        loadPath: 'locales/{{lng}}/translation.json',
        parse: (data) => {
          return transformArrayToObject(JSON.parse(data));
        }
      },
      returnObjects: true,
    })
}
module.exports = { i18nextInit }
