import "./HamburgerIcon.scss";

const HamburgerIcon = ({ isOpen, onClick, onKeyDown }) => {
    return (<div
        className={ `navbar__hamburger ${isOpen ? 'navbar__hamburger--open' : ''}` }
        role="button"
        tabIndex={ 0 }
        onClick={ onClick }
        onKeyDown={ onKeyDown }
        aria-label="Toggle menu"
    >
        <span></span>
        <span></span>
        <span></span>
    </div>)
}
export default HamburgerIcon;