import "../styles/components/ResultItem.scss";

function ResultItem() {
    return (
        <div className="result-item">
            <div className="result-item-photo">
                <img src="/public/Lodowka-Bosch-KGN-33NLEB-176cm-282L-NO-FROST.jpg" alt="" />
            </div>
            <div className="result-item-texts">
                <div className="result-item-title">Name</div>
                <div className="result-item-price">123.45 zł</div>
            </div>
            <div className="result-item-buttons">
                <i className="icon-heart-empty"></i>
                <i className="icon-eye-off"></i>
            </div>
        </div>
    );
}

export default ResultItem;
