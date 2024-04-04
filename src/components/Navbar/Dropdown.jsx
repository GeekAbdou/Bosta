import React, { Fragment } from "react";
import { ReactComponent as ChivronIcon } from "../../assets/chivron.svg";
import "./Dropdown.scss";

const Dropdown = ({ parentElement, children }) => {
    const DropdownItem = ({ className, children }) => {
        return React.Children.map(children, (child) => {
            return React.cloneElement(child, {
                className: `${child.props.className || ''} ${className}`
            });
        });
    }
    return (
        <>
            <DropdownItem className="dropdown-menu--parent">{ [parentElement]}</DropdownItem>
            { children.length > 0 && (
                <>
                    <span className="dropdown-menu--icon"><ChivronIcon /></span>
                    <ul className="dropdown-menu">
                        <DropdownItem className="dropdown-menu__item">{ children }</DropdownItem>
                    </ul>
                </>
            ) }
        </>
    );
}
export default Dropdown;