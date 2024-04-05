/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useTranslation } from "react-i18next";
import Dropdown from "./Dropdown";
import cookies from 'js-cookie';
import "./LangNavbarItem.scss";

const LangNavbarItem = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const currentLanguageCode = cookies.get('i18next') || 'en';

    return (<div className='navbar__item navbar__item--language'>
        <Dropdown parentElement={ <span key="navbar__item--lang" className='navbar__item--link'>{ t(currentLanguageCode) }</span> }>
            <li className="dropdown-menu-item"><div role='button' tabIndex={ 0 } onClick={ () => changeLanguage('ar') }>{ t('LANG_AR') }</div></li>
            <li className="dropdown-menu-item"><div role='button' tabIndex={ 0 } onClick={ () => changeLanguage('en') }>{ t('LANG_EN') }</div></li>
        </Dropdown>
    </div>)
};
export default LangNavbarItem;