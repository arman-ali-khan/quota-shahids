import React from 'react';
import ReactPaginate from 'react-paginate';
import usePagination from '../hooks/usePagination'; // Adjust the path as necessary

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item}>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage }) {
  const { currentItems, pageCount, handlePageClick } = usePagination(items, itemsPerPage);

  return (
    <>
      <ReactPaginate
      className='!flex justify-center gap-1 select-none font-[CharuChandan]'
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< Prev"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems;
