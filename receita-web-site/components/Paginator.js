import React, { FunctionComponent, Fragment, useState, useEffect } from 'react';

const Paginator = ( { skip, range, handlePaginationChange }) => {
  skip = !!skip ? skip : 0;

  const [page, setPageNumber] = useState(1);

  useEffect(() => {
    return setPageNumber(skip);
  }, [skip]);

  const moveToNextPage = () => {
    if (page > 1) {
      handlePaginationChange(page - 1);
      return setPageNumber(page - 1);
    }

    return null;
  };

  const moveToPreviousPage = () => {
    if (page < range[range.length - 1]) {
      handlePaginationChange(page + 1);
      return setPageNumber(page + 1);
    }

    return null;
  };

  const moveToPage = (pageNumber) => {
    handlePaginationChange(pageNumber);
    return setPageNumber(pageNumber);
  };

  const renderPageIndicators = (num, index) => (
    <li className="page-item ml-1">
      <button
        className={`page-link ${
          num === page ? 'paginator__page-number--selected' : ''
        }`}
        key={index}
        onClick={() => moveToPage(num)}
      >
        {num}
      </button>
    </li>
  );

  return (
    <Fragment>
      <div className="container pagination justify-content-center">
        {range.length > 1 ? (
          <li className="page-item ml-1">
            <button className="page-link" onClick={moveToNextPage}>
              <span className="paginator__button__label"> Anterior </span>
            </button>
          </li>
        ) : null}

        {range.map(renderPageIndicators)}

        {range.length > 1 ? (
          <li className="page-item ml-1">
            <button className="page-link" onClick={moveToPreviousPage}>
              <span className="paginator__button__label"> Proximo</span>
            </button>
          </li>
        ) : null}
      </div>
    </Fragment>
  );
};

export default Paginator;