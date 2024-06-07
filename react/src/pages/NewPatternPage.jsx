import CommonButton from "../components/CommonButton";
import FilterButton from "../components/FilterButton";
import Layout from "../components/Layout";
import "../styles/pages/NewPatternPage.scss";
import axios from "axios";
import config from "../config";
import { useEffect, useState } from "react";
import DropDownList from "../components/DropDownList";
import AddFilterModal from "../components/modals/AddFilterModal";

function NewPatternPage() {
    const allegroToken = localStorage.getItem("allegroToken");

    const [categories, setCategories] = useState([]);
    const [isOpenAddFilterModal, setIsOpenAddFilterModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filters, setFilters] = useState([]);

    useEffect(() => {
        const fetchOptions = async () => {
            const query = "kawa";
            try {
                const options = await getOptions(query);
                setCategories(options);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching options:", error);
            }
        };

        fetchOptions();
    }, []);

    const reverseTreeStructure = (node, child) => {
        const { id, name, parent } = node;
        const reversedNode = {
            id,
            name,
            children: child,
        };
        if (parent) {
            return reverseTreeStructure(parent, reversedNode);
        } else {
            return reversedNode;
        }
    };

    const groupById = (arr) => {
        const groups = {};

        arr.forEach((item) => {
            const id = item.id;

            if (!groups[id]) {
                groups[id] = { ...item, children: [] };
            }

            if (item.children) {
                groups[id].children.push(...[item.children]);
            }
        });

        Object.values(groups).forEach((item) => {
            item.children = groupById(item.children);
        });

        return Object.values(groups);
    };

    const getOptions = async (query) => {
        try {
            const response = await axios({
                url: `${config.apiUrl}/api/allegro/categories/by-query`,
                method: "GET",
                headers: {
                    "Allegro-Authorization": allegroToken,
                },
                params: {
                    query: query,
                },
            });

            let data = response.data;

            for (
                let i = 0;
                i < Object.keys(data.matchingCategories).length;
                i++
            ) {
                data.matchingCategories[i] = reverseTreeStructure(
                    data.matchingCategories[i],
                    null
                );
            }

            let reducedJson = groupById(data.matchingCategories);
            return reducedJson;
        } catch (error) {
            console.error("Error fetching options:", error);
            throw error;
        }
    };
    const handleOnSelectCategory = (event) => {
        setSelectedCategory(event);
    };

    const openModal = () => {
        setIsOpenAddFilterModal(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsOpenAddFilterModal(false);
        document.body.style.overflow = 'unset';
    };

    const handleAddFilter = (filter) => {
        setFilters((prevFilters) => [...prevFilters, filter]);
        closeModal();
    };

    return (
        <Layout mainClass={"new-pattern-page"}>
            <div id="filters-header">
                <div id="pattern-name">
                    <div>Name: </div>
                    <input
                        type="text"
                        name="title"
                        autoFocus
                        defaultValue="New search pattern"
                    />
                </div>
                <div id="buttons">
                    <CommonButton>Delete</CommonButton>
                    <CommonButton>Hidden offers</CommonButton>
                </div>
            </div>
            <div id="enter-query">
                <input
                    id="query-input"
                    type="text"
                    name="query"
                    placeholder="Enter query"
                />
                <i type="button" className="icon-search"></i>
            </div>
            {!loading && (
                <DropDownList
                    items={categories}
                    onSelect={handleOnSelectCategory}
                />
            )}
            <div id="filters">
                {filters.map((filter, index) => {
                    let values;
                    if (filter.params.dictionary) {
                        values = filter.params.dictionary.map(item => item.value);
                    } else if (filter.params.string) {
                        values = filter.params.string;
                    } else {
                        values = `${filter.params.min} - ${filter.params.max}`;
                    }
                    return (
                        <FilterButton
                            key={index}
                            name={filter.filter.name}
                            values={values}
                        />
                    );
                })}
            </div>
            <CommonButton className={"filter-button"} onClick={openModal}>
                <div>Add new filter</div>
                <i className="icon-plus-1"></i>
            </CommonButton>
            <CommonButton className={"save-button"}>
                Save and search
            </CommonButton>
            {isOpenAddFilterModal && (
                <AddFilterModal
                    handleCloseModal={closeModal}
                    categoryID={selectedCategory ? selectedCategory.id : null}
                    addFilter={handleAddFilter}
                />
            )}
        </Layout>
    );
}

export default NewPatternPage;
