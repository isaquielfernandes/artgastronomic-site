import React, { FunctionComponent, Fragment, useState, useEffect } from 'react';


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
      paginate(page - 1);
      return setPageNumber(page - 1);
    }

    return null;
  };

  const moveToPreviousPage = () => {
    if (page < (pageNumbers.length - 1)) {
      paginate(page + 1);
      return setPageNumber(page + 1);
    }

    return null;
  };

  return (
    <nav>
      <ul className='container pagination justify-content-center'>
         {pageNumbers.length > 1 ? (
         <li className="page-item ml-1">
             <a onClick={() => moveToPreviousPage()} className="page-link bg-light text-dark" href="!#">
               Anterior
             </a>
         </li>
         ): null}
         {pageNumbers.map(number => (
          <li className="page-item ml-1">
             <a onClick={() => paginate(number)} className="page-link bg-light text-dark" href="!#">
               {number}
             </a>
          </li>
         ))}
         {pageNumbers.length > 1 ? (
         <li className="page-item ml-1">
             <a onClick={() => moveToNextPage()} className="page-link bg-light text-dark" href="!#">
               Próximo
             </a>
          </li>
         ): null}
      </ul>
    </nav>
  );
};

export default Pagination;
