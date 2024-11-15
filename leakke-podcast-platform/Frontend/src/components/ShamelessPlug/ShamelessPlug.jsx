import { useTranslation } from "react-i18next"
import useDirection from '../../utils/direction'

const ShamelessPlug = () => {
  
  const direction = useDirection()
  const {t} = useTranslation('translation')

  return (
    <section 
    dir={direction} 
    className="container-fluid d-flex justify-content-center align-items-center text-light"
    style={{backgroundColor: 'var(--black)'}}>
      {t("creditText")}
      <b className="text-decoration-underline mx-1">{t("creditName")}</b>
       - {t("creditEmail")}
      </section>
  )
}
export default ShamelessPlug