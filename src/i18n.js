import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import I18NextHttpBackend from "i18next-http-backend";
import {PRODUCTION_FE_URI} from "@/core/config";

const getCurrentHost =
    process.env.NODE_ENV === "development" ? "http://localhost:3000" : PRODUCTION_FE_URI;
i18n
    .use(I18NextHttpBackend)
    .use(initReactI18next)
    .init({
        backend: {
            loadPath: `${getCurrentHost}/locals/{{lng}}.json`
        },
        lng: "sr", // Podrazumevani jezik
        fallbackLng: "sr",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;