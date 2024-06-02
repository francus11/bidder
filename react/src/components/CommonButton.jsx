import PropTypes from "prop-types";

import "../styles/components/CommonButton.scss";

function CommonButton({ children, onClick, className }) {
    const buttonClassName = className ? `common-button ${className}` : 'common-button';

    return (
        <div className={buttonClassName} onClick={onClick}>
            {children}
        </div>
    );
}

CommonButton.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

export default CommonButton;