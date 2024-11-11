import { useTranslation } from "react-i18next"
import { useContext } from "react"
import { dataContext } from "../../../contexts/dataContext"

const Bio = () => {

  const { t } = useTranslation()
  const {bio, publicActivity} = useContext(dataContext)

  return (
    <div>
       {Object.entries(bio).map(([key, value]) => (
        <div key={key} className="mb-1 w-50">
          <strong>{t(`${key}`)}:</strong> {value}
        </div>
      ))}
      <h4>{t("publicActivity")}</h4>
      {publicActivity.map((item) => (
        <div key={item.id}>
          {item.timePeriod ? <b>yes</b> : <b>no</b>}
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  )
}
export default Bio