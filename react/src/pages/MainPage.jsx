import Layout from "../components/Layout";
import logosmall from "../assets/logo_white.png";

import "../styles/pages/MainPage.scss";

function MainPage() {
    return (
        <Layout>
            <div className="tile">
                <div className="text-box">
                    <h1>Buy items cheaper and easier with Bidder</h1>
                    <p>
                        Now you don&apos;t have to search through multiple of
                        products pages to find your ideal offer with ideal
                        price. Bidder will help you filter through offers from
                        many popular platforms.
                    </p>
                </div>
                <div className="logo-img">
                    <img src={logosmall} alt="" />
                </div>
            </div>
            <div className="tile">
                <div className="button-box">
                    <a href="/patterns" className="button-redirect">
                        Try now!
                    </a>
                </div>
                <div className="text-box right-justify bigger">
                    <p>
                        Create patterns to search easily <br /> Apply custom
                        filters to pick best offers <br /> Merge patterns to
                        keep similar queries together
                    </p>
                </div>
            </div>
        </Layout>
    );
}

export default MainPage;
