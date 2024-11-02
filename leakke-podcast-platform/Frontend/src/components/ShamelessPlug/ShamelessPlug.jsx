import { useTranslation } from "react-i18next"

const ShamelessPlug = () => {

  const {t} = useTranslation('translation')

  return (
    <section className=" container-fluid d-flex justify-content-center align-items-center text-light" style={{backgroundColor: 'var(--black'}}>
      {t("creditText")}
      <b className="text-decoration-underline mx-1">{t("creditName")}</b>
      {t("creditEmail")} 
      {/* This website was designed and developed by
      <b className="text-decoration-underline mx-1">  Adam Solomon Eyassu</b> 
       - adamyaso@gmail.com */}
      </section>
  )
}
export default ShamelessPlug