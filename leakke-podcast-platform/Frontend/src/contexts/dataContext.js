import {createContext, useState, useEffect} from "react";
import {dataApi} from '../helpers/dataHelper';

export const dataContext = createContext({});

const Provider = dataContext.Provider;

export const DataProvider = ({children}) => {
  const [bio, setBio] = useState({})
  const [education, setEducation] = useState([])
  const [certifications, setCertifications] = useState([])
  const [workExp, setWorkExp] = useState([])
  const [socialWork, setSocialWork] = useState([])
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [currLang, setCurrLang] = useState('he')

  const handleGetData = async () => {
    setLoading(true);
    try {
      const res = await dataApi.get(currLang)
      setBio(res.bio);
      setEducation(res.education);
      setCertifications(res.certifications);
      setWorkExp(res.workExp);
      setSocialWork(res.socialWork);
      console.log(res);
    } catch (err) {
      console.log(err.response.data)
    } finally {
      setLoading(false);
    }
  }

  const handleAddData = () => {
    dataApi.add(currLang)
      .then(res => { })
      .catch(err => {
        console.log(err.response.data)
      })
  }

  const handleUpdateData = () => {
    dataApi.update(currLang)
      .then(res => { })
      .catch(err => {
        console.log(err.response.data)
      })
  }

  const handleDeleteData = () => {
    dataApi.remove(currLang)
      .then(res => { })
      .catch(err => {
        console.log(err.response.data)
      })
  }


  const value = {
    //states
    bio, setBio,
    education, setEducation,
    certifications, setCertifications,
    workExp, setWorkExp,
    socialWork, setSocialWork,
    currLang, setCurrLang,
    loading, setLoading,
    images, setImages,

    //functions
    handleGetData,
    handleAddData,
    handleUpdateData,
    handleDeleteData
  }

  return (
    <Provider value={value}>
      {children}
    </Provider>
  )
}