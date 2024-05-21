import { Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import Patterns from "./pages/Patterns";
function App() {
    return (
        <div>
            <Route path="/">
                <MainPage />
            </Route>
            <Route path="/patterns">
                <Patterns />
            </Route>
        </div>
    );
}

export default App;
