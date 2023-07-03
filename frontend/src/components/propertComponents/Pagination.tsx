import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface Props {
  handleNextPageClick: () => void;

  handlePreviousPageClick: () => void;
  totalPages: number;
  currentPage: number;
  handleCurrentPageClick: (page: number) => void;
}
const Pagination = ({
  handleNextPageClick,

  handlePreviousPageClick,
  totalPages,
  currentPage,
  handleCurrentPageClick,
}: Props) => {
  return (
    <div className="pagination__buttons_container">
      <button
        title="previous"
        type="button"
        className="pagination__navigation-btn"
        onClick={handlePreviousPageClick}
        disabled={currentPage === 1}
      >
        <BsChevronLeft />
      </button>

      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            type="button"
            onClick={() => handleCurrentPageClick(page)}
            disabled={currentPage === page}
            className={`pagination__navigation-btn ${currentPage === page ? "page-current": ""}`}
          >
            {page}
          </button>
        )
      )}
      <button
        title="next"
        type="button"
        className="pagination__navigation-btn"
        disabled={currentPage === totalPages}
        onClick={handleNextPageClick}
      >
        <BsChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
