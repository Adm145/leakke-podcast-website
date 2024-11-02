import './AboutPage.css'
import Bio from './Bio/Bio';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import { useTranslation } from "react-i18next"
import { useState, useEffect } from 'react';

const AboutPage = () => {
  const { t } = useTranslation()
  const [tab, setTab] = useState('bio')

  const handleClick = (e) => {
    setTab(e.target.value);
  }

  return (
    <main className="d-flex flex-row gap-5" style={{border: '1px red solid'}}>

      <section className="d-flex flex-column">
        <button value="bio" onClick={(e) => {handleClick(e)}}>Bio</button>
        <button value="exp" onClick={(e) => {handleClick(e)}}>Experience</button>
        <button value="education" onClick={(e) => {handleClick(e)}}>Education</button>
      </section>

      {/* divider */}
      <div className="h-100 py-5" style={{border: '1px var(--brown-light) solid'}}></div>

      <section>
        {tab === 'bio' && <Bio />}
        {tab === 'exp' && <Experience />}
        {tab === 'education' && <Education />}
      </section>
    </main>
  )

}
export default AboutPage