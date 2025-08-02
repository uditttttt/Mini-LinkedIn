import React from 'react';

const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, message }) => {
  // Don't render the modal if it's not open
  if (!isOpen) {
    return null;
  }

  return (
    // Main overlay with padding to prevent touching screen edges
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      {/* Modal content with responsive width */}
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600">{message}</p>
        
        {/* Responsive button container */}
        <div className="mt-6 flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-4">
          <button
            onClick={onConfirm}
            className="w-full sm:w-auto px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 mb-2 sm:mb-0"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;