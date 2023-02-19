import ReactDOM from "react-dom";
import "./Modal.css";

function Modal( { children }) {
  
    return ( ReactDOM.createPortal(
        <div 
        className="modal-background d-flex align-items-center justify-content-center color-main">
            { children }
        </div>,
        document.getElementById('modal')
    ) );

}

export { Modal }

