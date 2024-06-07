import Backdrop from "./Backdrop";
import "../../styles/components/modals/AddFilterModal.scss";

import PropTypes from "prop-types";
import DropDownList from "../DropDownList";
import CommonButton from "../CommonButton";
import { useEffect, useState } from "react";
import axios from "axios";

import config from "../../config";
import DropDownMultiSelectList from "../DropDownMultiSelectList";

function AddFilterModal({ handleCloseModal, categoryID, addFilter }) {
    const allegroToken = localStorage.getItem("allegroToken");

    const [filters, setFilters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [filterParams, setFilterParams] = useState({});

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                let options = await getFilters(categoryID);
                setFilters(options.parameters);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching options:", error);
            }
        };

        fetchOptions();
    }, []);

    const getFilters = async (categoryID) => {
        try {
            let response = await axios({
                method: "get",
                url: `${config.apiUrl}/api/allegro/categories/${categoryID}/parameters`,
                headers: {
                    'Allegro-Authorization': `${allegroToken}`,
                },
            });

            return response.data;
        } catch (error) {
            console.error("Error fetching options:", error);
            throw error;
        }
    };

    const handleModalClick = (event) => {
        event.stopPropagation();
    };

    const handleAddFilter = () => {
        addFilter({ filter: selectedFilter, params: filterParams });
    };

    const handleOnSelectFilter = (filter) => {
        setSelectedFilter(filter);
        setFilterParams({}); // Reset filter parameters when a new filter is selected
    };

    const handleInputChange = (e, key) => {
        const value = e.target.value;
        setFilterParams((prevParams) => ({
            ...prevParams,
            [key]: value,
        }));
    };

    const handleMultiSelectChange = (selectedItems) => {
        setFilterParams({
            ...filterParams,
            dictionary: selectedItems,
        });
    };

    const renderFilterInput = () => {
        if (!selectedFilter) return null;

        switch (selectedFilter.type) {
            case "string":
                return <input type="text" value={filterParams.string || ""} onChange={(e) => handleInputChange(e, 'string')} />;
            case "integer":
                return (
                    <>
                        <input type="text" value={filterParams.min || ""} onChange={(e) => handleInputChange(e, 'min')} placeholder="Min" />
                        <input type="text" value={filterParams.max || ""} onChange={(e) => handleInputChange(e, 'max')} placeholder="Max" />
                    </>
                );
            case "dictionary":
                return (
                    <DropDownMultiSelectList items={selectedFilter.dictionary} onSelect={handleMultiSelectChange} />
                );
            case "float":
                return (
                    <>
                        <input type="text" value={filterParams.min || ""} onChange={(e) => handleInputChange(e, 'min')} placeholder="Min" />
                        <input type="text" value={filterParams.max || ""} onChange={(e) => handleInputChange(e, 'max')} placeholder="Max" />
                    </>
                );

            default:
                return null;
        }
    };

    return (
        <Backdrop onClick={handleCloseModal}>
            <div className="add-filter-modal" onClick={handleModalClick}>
                <div className="add-filter-modal-title">Add filter</div>
                <div className="add-filter-modal-content">
                    {!loading && <DropDownList items={filters} onSelect={handleOnSelectFilter} />}
                    <div className="add-filter-modal-content-filter">
                        {renderFilterInput()}
                    </div>
                </div>
                <div className="add-filter-modal-buttons">
                    <CommonButton onClick={handleCloseModal}>Cancel</CommonButton>
                    <CommonButton onClick={handleAddFilter}>Add</CommonButton>
                </div>
            </div>
        </Backdrop>
    );
}

AddFilterModal.propTypes = {
    handleCloseModal: PropTypes.func.isRequired,
    addFilter: PropTypes.func.isRequired,
    categoryID: PropTypes.string.isRequired,
};

export default AddFilterModal;
