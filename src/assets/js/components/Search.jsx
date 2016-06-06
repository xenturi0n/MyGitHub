import React, { PropTypes } from 'react';

function handleSubmit(e, onSubmit){
    e.preventDefault();
    const searchQuery = e.target.elements["search-input"].value;
    onSubmit(searchQuery);
}

const Search = (props) => {
    const {onSubmit} = props;
    return (
        <form className="navbar-form navbar-right" role="search" onSubmit={(e)=>handleSubmit(e,onSubmit)}>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" name="search-input"/>
            </div>
            <button type="submit" className="btn btn-default">Buscar</button>
        </form>
    );
}

Search.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

Search.defaultProps = {
    
}

export default Search;