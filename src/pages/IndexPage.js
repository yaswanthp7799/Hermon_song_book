import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const IndexPage = () => {
  const navigate = useNavigate();
  const totalButtons = 303; // Total number of songs
  const buttonsPerPage = 50; // Number of buttons per page (updated to 50)
  const totalPages = Math.ceil(totalButtons / buttonsPerPage); // Total pages based on 50 buttons per page

  // State to track the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Function to get the song IDs for the current page
  const getPageButtons = (page) => {
    const start = (page - 1) * buttonsPerPage + 1;
    const end = Math.min(page * buttonsPerPage, totalButtons);
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  // Function to handle button click
  const handleButtonClick = (id) => {
    navigate(`/lyrics/${id}`);
  };

  // Function to go to the next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to go to the previous page
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="index-container">
      <h1>Song Lyrics Index</h1>
      
      {/* Buttons for current page */}
      <div className="button-container">
        {getPageButtons(currentPage).map((button) => (
          <button key={button} onClick={() => handleButtonClick(button)}>
            {button}
          </button>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default IndexPage;
