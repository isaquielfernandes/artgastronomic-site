import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='container pagination justify-content-center'>
        {pageNumbers.map(number => (
          <li className="page-item ml-1">
             <a onClick={() => paginate(number)} className="page-link bg-light text-dark" href="!#">
               {number}
             </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
