import "../styles/components/PatternTile.scss"
import CommonButton from "./CommonButton";

function PatternTile() {
    return (
        <div className="pattern">
            <div className="upper">
                <div className="pattern-title">Refrigerator</div>
                <CommonButton><div>Edit</div></CommonButton>
            </div>
            <div className="lower">
                <div className="offers-count new">New: 3</div>
                <div className="offers-count">All: 22</div>
            </div>
        </div>
    );
}

export default PatternTile;
