import React, { PropTypes } from 'react';


const Repo = (props) => {
    const {repo} = props;
    return (
        <li className="list-group-item">
            <a href={repo.html_url}>{repo.name}: </a><span> {repo.description}</span>
        </li>
    );
}

Repo.propTypes = {
    
}

Repo.defaultProps = {
    
}

export default Repo;