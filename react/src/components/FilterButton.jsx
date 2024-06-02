import CommonButton from "./CommonButton";
import "../styles/components/FilterButton.scss";

function FilterButton() {
    return (
        <CommonButton className={"filter-button"}>
            <div className="filter-type">Kolor</div>
            <div className="separator">:</div>
            <div className="filter-value">Biały</div>
            <i className="icon-minus"></i>
        </CommonButton>
    );
}

export default FilterButton;
