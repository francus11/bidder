import CommonButton from "../components/CommonButton";
import Layout from "../components/Layout";
import ResultItem from "../components/ResultItem";

import "../styles/pages/ResultsPage.scss";

function ResultsPage() {
    return (
        <Layout mainClass={"results-page"}>
            <div id="results-header">
                <div id="result-counter">Results: 34</div>
                <CommonButton>Edit</CommonButton>
            </div>
            <div id="results-list">
                <ResultItem />
                <ResultItem />
                <ResultItem />
            </div>
        </Layout>
    );
}

export default ResultsPage;
