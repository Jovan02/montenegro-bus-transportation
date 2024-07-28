import React from "react";
import "../styles/modal.css";

export const Modal = ({ show, handleClose, title, content }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>{title}</h2>
                    <button onClick={handleClose} className="close-button">
                        ×
                    </button>
                </div>
                <div className="modal-body">
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
};
