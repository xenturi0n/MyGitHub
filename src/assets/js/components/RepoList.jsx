import React, { PropTypes } from 'react';

import Repo from './Repo.jsx';

const renderRepos = (props) => {
    const {repos}=props;
    return repos.map((repo)=>{
        return(
            <Repo repo={repo}
                  key={repo.id}
                  />
        );
    });
}

const RepoList = (props) => {
    const {repos} = props;
    return (
        <div className="list-group">
            {renderRepos(props)}
        </div>
    );
}

// RepoList.propTypes = {
//     userRepos: PropTypes.arrayOf(PropTypes.object)
// }

// RepoList.defaultProps = {

// }

export default RepoList;