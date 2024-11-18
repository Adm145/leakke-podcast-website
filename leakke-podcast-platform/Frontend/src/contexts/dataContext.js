import {createContext, useState} from "react";
import {
  dataApi,
  // youtubeDataApi
} from '../helpers/dataHelper';

export const dataContext = createContext({});

const Provider = dataContext.Provider;

export const DataProvider = ({children}) => {
  const [bio, setBio] = useState([])
  const [education, setEducation] = useState([])
  const [courses, setCourses] = useState([])
  const [workExp, setWorkExp] = useState([])
  const [socialWork, setSocialWork] = useState([])
  const [publicActivity, setPublicActivity] = useState([])

  const [images, setImages] = useState([])

  const [loading, setLoading] = useState(false)
  const [currLang, setCurrLang] = useState('he')

  // const [episodesList, setEpisodesList] = useState([])

  // useEffect(() => {
  //   handleGetEpisodesData();
  //   return;
  // }, [])

  const handleGetData = async () => {
    setLoading(true);
    try {
      const res = await dataApi.get(currLang)
      setBio(res.bio);
      setEducation(res.education);
      setCourses(res.courses);
      setWorkExp(res.workExp);
      setSocialWork(res.socialWork);
      setPublicActivity(res.publicActivity);
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

  // const handleGetEpisodesData = async () => {
  //   try {
  //     const res = await youtubeDataApi.get()
  //     setEpisodesList(res.items)
  //   } catch (err) {
  //     console.log(err.response.data)
  //   }
  // }


  const value = {
    //states
    bio, setBio,
    education, setEducation,
    courses, setCourses,
    workExp, setWorkExp,
    socialWork, setSocialWork,
    publicActivity, setPublicActivity,
    currLang, setCurrLang,
    loading, setLoading,
    images, setImages,
    // episodesList,

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