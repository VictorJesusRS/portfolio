import ReactDOM from "react-dom";
import "./Modal.css";

function Modal( { children, closeModal }) {
  
    return ( ReactDOM.createPortal(
        <div 
        onClick={ ( e ) => {
            closeModal( e )
        }}
        className="modal-background d-flex align-items-center justify-content-center color-main">
            { children }
        </div>,
        document.getElementById('modal')
    ) );

}

export { Modal }

