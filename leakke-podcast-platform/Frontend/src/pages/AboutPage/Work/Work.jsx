import { useTranslation } from "react-i18next"
import { useContext } from "react"
import { dataContext } from "../../../contexts/dataContext"

const Work = () => {

  const { t } = useTranslation()
  const {workExp, socialWork} = useContext(dataContext)
  console.log()

  return (
    <div>
      <section className="mb-5">
        <h4>{t("work")}</h4>
        {workExp.map((item) => (
          <div 
          key={item.id}
          className="d-flex flex-row gap-1 mb-1 w-100"
          >
            <h6
            className="text-decoration-underline mb-1"
            >
              {
                item.timePeriod 
                ? 
                <b>{item.timePeriod} - </b> 
                : 
                <span></span>
              }
              <span>{item.desc}</span>
            </h6>
          </div>
        ))}
      </section>
     <section>
     <h4>{t("socialWork")}</h4>
        {socialWork.map((item) => (
          <div 
          key={item.id}
          className="d-flex flex-row"
          >
            <span
            className="text-decoration-underline mb-1"
            >
              {
                item.timePeriod 
                ? 
                <b>{item.timePeriod} - </b> 
                : 
                <span></span>
              }
              <span>{item.desc}</span>
            </span>
          </div>
        ))}
     </section>
    </div>
  )
}
export default Work