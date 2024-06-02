import CommonButton from "../components/CommonButton";
import FilterButton from "../components/FilterButton";
import Layout from "../components/Layout";
import "../styles/pages/NewPatternPage.scss";

function NewPatternPage() {
    return (
        <Layout mainClass={"new-pattern-page"}>
            <div id="filters-header">
                <div id="pattern-name">
                    <div>Name: </div>
                    <input
                        type="text"
                        name="title"
                        autoFocus
                        value="New search pattern"
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
                <i
                    onClick="searchIconClicked()"
                    type="button"
                    className="icon-search"
                ></i>
            </div>
            <div id="filters">
                <FilterButton></FilterButton>
                <FilterButton></FilterButton>
                <FilterButton></FilterButton>
                <FilterButton></FilterButton>
            </div>
            <CommonButton className={"filter-button"}>
                <div>Add new filter</div>
                <i className="icon-plus-1"></i>
            </CommonButton>
            {/* <div onclick="test()" id="save-button" class="common-button">Save and search</div> */}
            <CommonButton className={"save-button"}>
                Save and search
            </CommonButton>
        </Layout>
    );
}

export default NewPatternPage;
