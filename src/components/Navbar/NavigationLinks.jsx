import { useTranslation } from "react-i18next";
import navLinks from "../../utils/navLinks";
import Dropdown from "./Dropdown";
import "./NavigationLinks.scss";

const NavigationLinks = ({ className }) => {
    const { t } = useTranslation();
    return (
        <ul className={ className }>
            {
                navLinks.map((navLink) => (
                    <li key={ navLink.name } className="navbar__item">
                        <Dropdown parentElement={ <a key={ `${navLink.name}-link` } className="navbar__item--link" href={ navLink.to }>{ t(navLink.name) }</a> }>
                            { navLink.children.map(
                                (childNavLink) => <li key={ childNavLink.name }>
                                    <a href={ childNavLink.to }>{ t(childNavLink.name) }</a>
                                </li>
                            ) }
                        </Dropdown>
                    </li>
                )
                )
            }
        </ul>
    );
};

export default NavigationLinks;