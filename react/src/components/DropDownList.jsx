import { useState, useEffect, useRef } from "react";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/components/DropDownList.scss";
import PropTypes from "prop-types";

const DropDownList = ({ items, onSelect }) => {
    const [isActive, setIsActive] = useState(false);
    const [selected, setIsSelected] = useState("Choose one");
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
            return items.map((item) => {
                return (
                    <>
                        <div
                            key={item.id}
                            onClick={() => {
                                setIsSelected(item.name);
                                setIsActive(false);
                                onSelect(item);
                            }}
                            className="item"
                        >
                            {`${'\u00A0'.repeat(count * 4)}${item.name}`}
                        </div>
                        {item.children && generateItems(item.children, count + 1)}
                    </>
                );
            });
        };
        setOptions(generateItems(items, 0));
    }, []);

    return (
        <div className="drop-down-list" ref={dropDownRef}>
            <div
                onClick={() => {
                    setIsActive(!isActive);
                }}
                className={"drop-down-list-btn" + (isActive ? " active" : "")}
            >
                {selected}
                <FontAwesomeIcon icon={isActive ? faCaretUp : faCaretDown} />
            </div>
            <div
                className={
                    "drop-down-list-content" + (isActive ? " active" : "")
                }
            >
                {options}
            </div>
        </div>
    );
};

DropDownList.propTypes = {
    items: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default DropDownList;

