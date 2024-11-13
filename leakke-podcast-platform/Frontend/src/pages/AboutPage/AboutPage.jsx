import './AboutPage.css'
import { useState } from 'react';
import { useTranslation } from "react-i18next"
import Bio from './Bio/Bio';
import Education from './Education/Education';
import Work from './Work/Work';
import useDirection from '../../utils/direction'

const AboutPage = () => {
  const direction = useDirection();
  const { t } = useTranslation()
  const [tab, setTab] = useState('bio')

  const handleClick = (e) => {
    setTab(e.target.value);
  }

  const tabButtons = [
    {label: t("bio"), value: "bio"},
    {label: t("work"), value: "work"},
    {label: t("education"), value: "education"}
  ]

  return (
    <main  
    dir={direction} 
    className="d-flex flex-row gap-5 p-3 w-auto rounded-3"
    >
      <section 
      className="d-flex flex-column align-items-start p-2 rounded-3"
      style={{height: '120px'}}
      >
        {tabButtons.map((item) => (
          <button
          className="btn btn-outline-dark border-0 text-truncate"
          style={{}}
          key={item.value} 
          value={item.value} 
          onClick={(e) => {handleClick(e)}}
          >
            {item.label}
          </button>
        ))}
      </section>

      <section
      className="w-auto rounded-3 px-3 py-1"
      >
        {tab === 'bio' && <Bio />}
        {tab === 'work' && <Work />}
        {tab === 'education' && <Education />}
      </section>
    </main>
  )
}
export default AboutPage