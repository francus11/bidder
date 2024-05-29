import Layout from "../components/Layout";
import PatternTile from "../components/PatternTile";
import { useNavigate } from "react-router-dom";

import "../styles/pages/PatternsPage.scss";
import CommonButton from "../components/CommonButton";

function PatternsPage() {
    const navigate = useNavigate();

    const createNewPattern = () => {
        navigate('/new-pattern');

    }

    return (
        <Layout>
            <div id="patterns-header">
                <div id="title">Patterns</div>
                <CommonButton onClick={createNewPattern}>Create new patters</CommonButton>

            </div>

            <div id="patterns">
                <PatternTile></PatternTile>
            </div>
        </Layout>
    );
}

export default PatternsPage;
