import React from 'react';

export default function Alert({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }
  //alert("ayuda");
    return (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={onClose}>&times;</span>
            {children}
          </div>
        </div>
      );
 
}
