import i18n from "i18next"
import { initReactI18next } from "react-i18next";
import { resources } from "../constants/translation"

// initialize the language with English first and then change it later on
i18n.use(initReactI18next).init({
    resources,
    lng: 'KR',
});

export default i18n;

