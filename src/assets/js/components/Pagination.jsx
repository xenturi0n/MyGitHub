import React, { PropTypes } from 'react';


function handlePaginationClick(e, onPaginationClick, numPages){
    e.preventDefault();
    const pageNumber =e.target.dataset.page || e.target.parentElement.dataset.page;
    onPaginationClick(pageNumber, numPages);
    
}


const paginationNumbers = (numRepos, perPage, onPaginationClick, pageNum) =>{
    const numPages = Math.ceil(numRepos / perPage);
    const pageNumberItems=[];
    for(let i=1; i<=numPages; i++){
        pageNumberItems.push(<li key={i} className={pageNum===i ? "active" : null}><a href="#" data-page={i} onClick={(e)=>{handlePaginationClick(e,onPaginationClick, numPages)}}>{i}</a></li>);
    }
    return pageNumberItems;
}

const Pagination = (props) => {
    const {repo, onPaginationClick, numRepos, perPage, pageNum} = props;
    const pageNumberItems = paginationNumbers(numRepos, perPage, onPaginationClick, pageNum);
    const numPages = Math.ceil(numRepos / perPage);
    return (
        <nav>
            <ul className="pagination">
                <li>
                    <a href="#" aria-label="Previous" data-page="previous" onClick={(e)=>{handlePaginationClick(e,onPaginationClick, numPages)}}>
                        <span aria-hidden="true">&laquo; </span>
                    </a>
                </li>
                {pageNumberItems}
                <li>
                    <a href="#" aria-label="Next" data-page="next" onClick={(e)=>{handlePaginationClick(e,onPaginationClick, numPages)}}>
                        <span aria-hidden="true">&raquo; </span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

Pagination.propTypes = {
    onPaginationClick: PropTypes.func.isRequired,
    numRepos: PropTypes.number.isRequired,
    perPage: PropTypes.number.isRequired
}

Pagination.defaultProps = {
    numRepos: 0
}

        // <nav>
        //     <ul className="pagination">
        //         <li>
        //             <a href="#" aria-label="Previous">
        //                 <span aria-hidden="true">&laquo; </span>
        //             </a>
        //         </li>
        //         <li className = "active"><a href="#">1</a></li>
        //         <li><a href="#">2</a></li>
        //         <li><a href="#">3</a></li>
        //         <li><a href="#">4</a></li>
        //         <li><a href="#">5</a></li>
        //         <li>
        //             <a href="#" aria-label="Next">
        //                 <span aria-hidden="true">&raquo; </span>
        //             </a>
        //         </li>
        //     </ul>
        // </nav>

export default Pagination;