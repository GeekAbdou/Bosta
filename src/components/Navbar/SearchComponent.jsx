import { useState } from "react";
import Cookies from 'js-cookie';
import { ReactComponent as MagnifierIcon } from "../../assets/magnifier.svg";
import '../../views/Tracking.scss';

const SearchComponet = ({className}) => {
    const [trackingNumber, setTrackingNumber] = useState('');
    const currentLanguageCode = Cookies.get('i18next') || 'en';
    const handleInputChange = (event) => {
        setTrackingNumber(event.target.value);
    };
    const handleSearchClick = () => {
        // setQueryId(trackingNumber);
    };

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            // 13 key is Enter
            handleSearchClick();
        }
    };
    return (<div className={`tracker-input ${className || ''}`}>
        <div className={ `tracker-input__group ${currentLanguageCode === 'ar' ? 'ardir' : 'endir'}` }>
            <input
                placeholder="رقم التتبع"
                className="tracker-input__input"
                type="text"
                value={ trackingNumber }
                onChange={ handleInputChange }
                onKeyDown={ handleKeyDown }
            />

            <button
                type="button"
                className="tracker-input__button"
                onClick={ handleSearchClick }
            >
                <MagnifierIcon />
            </button>
        </div>
    </div>)
};

export default SearchComponet;