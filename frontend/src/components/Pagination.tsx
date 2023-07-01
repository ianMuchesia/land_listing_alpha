import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface Props {
  handleNextPageClick: () => void;
  handlePageClick: (page: number) => void;
  handlePreviousPageClick: () => void;
  totalPages: number;
  currentPage: number;
}
const Pagination = ({
  handleNextPageClick,
  handlePageClick,
  handlePreviousPageClick,
  totalPages,
  currentPage
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


{Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
  <button
    key={page}
    type="button"
    onClick={() => handlePageClick(page)}
    disabled={currentPage === page}
  >
    {page}
  </button>
))}
      <button title="next" type="button" className="pagination__navigation-btn" disabled={currentPage === totalPages}>
        <BsChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
