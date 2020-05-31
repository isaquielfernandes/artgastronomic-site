import React, { useState, useEffect } from 'react';


const Pagination = ({ skip, postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  skip = !!skip ? skip : 0;

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  
  const [page, setPageNumber] = useState(1);

  useEffect(() => {
    return setPageNumber(skip);
  }, [skip]);

  const moveToNextPage = () => {
    if (page > 1) {
      paginate(page + 1);
      return setPageNumber(page + 1);
    }
    return null;
  };

  const moveToPreviousPage = () => {
    if (page < (pageNumbers.length - 1)) {
      paginate(page - 1);
      return setPageNumber(page - 1);
    }
    return null;
  };

  return (
    <nav>
      <ul className='container pagination justify-content-center'>
         {pageNumbers.length > 1 ? (
         <li className="page-item ml-1">
             <button onClick={() => moveToPreviousPage()} className="page-link">
               Anterior
             </button>
         </li>
         ): null}
         {pageNumbers.map(number => (
          <li key={number} className="page-item ml-1">
             <button onClick={() => paginate(number)} className="page-link">
               {number}
             </button>
          </li>
         ))}
         {pageNumbers.length > 1 ? (
         <li className="page-item ml-1">
             <button onClick={() => moveToNextPage()} className="page-link">
               Próximo
             </button>
          </li>
         ): null}
      </ul>
    </nav>
  );
};

export default Pagination;
