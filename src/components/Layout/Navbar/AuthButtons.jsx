import { useTranslation } from "react-i18next";
import "./AuthButtons.scss";

const AuthButtons = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={ `navbar__item borderless signin-section ${className || ''}` }>
            <a className="navbar__item--link signin-btn" href="https://business.bosta.co/signin">
                { t('NAV_SIGNIN') }
            </a>
            <a className="navbar__item--link signup-btn" href="https://bosta.co/en-eg/signup">
                { t('NAV_SIGNUP') }
            </a>
        </div>
    )
};
export default AuthButtons;