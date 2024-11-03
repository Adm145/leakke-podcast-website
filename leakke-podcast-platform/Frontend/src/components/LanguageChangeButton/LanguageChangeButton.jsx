import {useTranslation} from 'react-i18next';
import DropDownInput from '../../uikit/DropDownInput';
import useTranslate from '../../hooks/useTranslate';
import {languages} from '../../utils/languages';

const LanguageChangeButton = () => {
  const {handleLanguageChange} = useTranslate();
  const {t} = useTranslation("translation")

  return (
    <DropDownInput 
    options={languages} 
    onSelect={handleLanguageChange} 
    lable={t("language")} 
    />
  )
}
export default LanguageChangeButton;