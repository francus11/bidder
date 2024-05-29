import PropTypes from "prop-types";

import "../styles/components/CommonButton.scss";

function CommonButton({children, onClick}) {
    return (
        <div className="common-button" onClick={onClick}>{children}</div>
    );
}

CommonButton.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
};

export default CommonButton;