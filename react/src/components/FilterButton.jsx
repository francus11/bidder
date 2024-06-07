import CommonButton from "./CommonButton";
import "../styles/components/FilterButton.scss";
import PropTypes from 'prop-types';

function FilterButton({ name, values }) {
    return (
        <CommonButton className={"filter-button"}>
            <div className="filter-type">{name}</div>
            <div className="separator">:</div>
            <div className="filter-value">{Array.isArray(values) ? values.join(", ") : values}</div>
            <i className="icon-minus"></i>
        </CommonButton>
    );
}

FilterButton.propTypes = {
    name: PropTypes.string.isRequired,
    values: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
    ]).isRequired,
};

export default FilterButton;
