import i18n from "i18next"
import axios from 'axios';
import { ESupportedLanguages } from "../constants/translation"

// get the current website language
export const getWebsiteLanguage = (): ESupportedLanguages | string => {
    return i18n.language;
}

// change the language of whole website
export const setWebsiteLanguage = (language: ESupportedLanguages | string) => {
    i18n.changeLanguage(language);
}

// set language based on the IP address
export const changeWebsiteLanguageUsingIP = async () => {
    const countryData = await axios.get('https://ipapi.co/json'); // 잚못 요청 되는 경우 data가 Json이 아님 -> data.country 찾아서 없으면 에러 처리
    const countryCode = countryData.data.country || ESupportedLanguages.US
    const language = countryCode in ESupportedLanguages ? countryCode : ESupportedLanguages.US;
    setWebsiteLanguage(language);
}