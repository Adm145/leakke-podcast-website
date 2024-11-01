import './HomePage.css'
import {useContext} from 'react';
import {dataContext} from '../../contexts/dataContext';

const HomePage = () => {
  const {handleGetData} = useContext(dataContext);

  return (
    <main>
      <button onClick={handleGetData}>Get Data</button>
    </main>
  )
}
export default HomePage