import {useTranslation} from 'react-i18next';
import {DropDownMenu} from 'Uikit';
import {useTranslate} from 'Hooks';
import { languages } from 'Utils';

export const LanguageChangeButton = () => {
  const {handleLanguageChange} = useTranslate();
  const {t} = useTranslation("translation")

  return (
    <DropDownMenu
    options={languages} 
    onSelect={handleLanguageChange} 
    lable={t("language")} 
    />
  )
}