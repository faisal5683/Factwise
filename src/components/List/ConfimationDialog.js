import React from 'react';

function ConfirmationDialog({ isOpen, onClose, onConfirm }) {
    const dialogStyle = {
        display: isOpen ? 'block' : 'none',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '20px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
        zIndex: 999,
    };

    const overlayStyle = {
        display: isOpen ? 'block' : 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 998,
    };

    if (!isOpen) return null;

    return (
        <div>
            <div style={overlayStyle} onClick={onClose}></div>
            <div style={dialogStyle}>
                <p>Are you sure you want to delete this item?</p>
                <button onClick={onConfirm}>Delete</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
}

export default ConfirmationDialog;