import { useTranslation } from "react-i18next"
import { useContext } from "react"
import { dataContext } from "../../../contexts/dataContext"

const Education = () => {

  const { t } = useTranslation()
  const {education, courses} = useContext(dataContext)

  return (
    <div className="d-flex flex-row justify-content-center gap-5">
      <section>
        <h3>{t("education")}</h3>
        {education.map((item) => (
          <div key={item.id}>
            {item.timePeriod ? <b>yes</b> : <b>no</b>}
            <p>{item.desc}</p>
          </div>
        ))}
      </section>
      <section>
        <h3>{t("courses")}</h3>
        {courses.map((item) => (
          <div key={item.id}>
            {item.timePeriod ? <b>yes</b> : <b>no</b>}
            <p>{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
export default Education