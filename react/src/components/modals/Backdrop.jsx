import "../../styles/components/modals/Backdrop.scss";

function Backdrop({children, onClick}) {
    return (
        <div className="backdrop" onClick={onClick}>
        {children}
    </div>
    )
    
}

export default Backdrop;
