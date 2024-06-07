import { useState, useEffect, useRef } from "react";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/components/DropDownList.scss";
import PropTypes from "prop-types";

const DropDownMultiSelectList = ({ items, onSelect }) => {
    const [isActive, setIsActive] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [options, setOptions] = useState([]);
    const dropDownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
                setIsActive(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const generateItems = (items, count) => {
            if (items == null || items.length === 0) {
                return null;
            }
            return items.map((item) => (
                <div key={item.id}>
                    <div
                        onClick={() => {
                            const isSelected = selectedItems.includes(item);
                            let newSelectedItems;
                            if (isSelected) {
                                newSelectedItems = selectedItems.filter(
                                    (selectedItem) => selectedItem.id !== item.id
                                );
                            } else {
                                newSelectedItems = [...selectedItems, item];
                            }
                            setSelectedItems(newSelectedItems);
                            onSelect(newSelectedItems);
                        }}
                        className="item"
                    >
                        <FontAwesomeIcon icon={selectedItems.includes(item) ? faSquareCheck : faSquare} />
                        {`${'\u00A0'.repeat(count * 4)}${item.value}`}
                    </div>
                    {item.children && generateItems(item.children, count + 1)}
                </div>
            ));
        };
        setOptions(generateItems(items, 0));
    }, [items, selectedItems]);

    return (
        <div className="drop-down-list" ref={dropDownRef}>
            <div
                onClick={() => {
                    setIsActive(!isActive);
                }}
                className={"drop-down-list-btn drop-down-multiselect-list-btn" + (isActive ? " active" : "")}
            >
                {selectedItems.length > 0 ? selectedItems.map(item => item.value).join(", ") : "Choose one"}
                <FontAwesomeIcon icon={isActive ? faCaretUp : faCaretDown} />
            </div>
            <div
                className={"drop-down-list-content" + (isActive ? " active" : "")}
            >
                {options}
            </div>
        </div>
    );
};

DropDownMultiSelectList.propTypes = {
    items: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default DropDownMultiSelectList;
