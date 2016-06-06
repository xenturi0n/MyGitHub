import React, { PropTypes } from 'react';

import RepoList from './RepoList.jsx';
import Pagination from './Pagination.jsx';

const Profile = (props) => {
    const {userData, repos, onPaginationClick, perPage, pageNum} = props;
    const numRepos = userData.public_repos;
    
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h2 className="panel-title"><strong>{ userData.name }</strong></h2>
            </div>
            <div className="panel-body">
                <div className="row">
                    <div className="col-xs-4">
                        <img src={userData.avatar_url} alt="" className="thumbnail" style={{width: '100%'}}/>
                    </div>
                    <div className="col-xs-8">
                        <div className="row">
                            <div className="col-xs-12">
                                <span className="label label-primary">
                                    {userData.public_repos} Repos
                                </span>
                                <span className="label label-success">
                                    {userData.public_gists} Gists
                                </span>
                                <span className="label label-info">
                                    {userData.followers} Followers
                                </span>
                                <span className="label label-danger">
                                    {userData.following} Following
                                </span>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-xs-12">
                                <ul className="list-group">
                                    <li className="list-group-item"><strong>Username: </strong>{userData.login}</li>
                                    <li className="list-group-item"><strong>Location: </strong>{userData.location}</li>
                                    <li className="list-group-item"><strong>Email: </strong>{userData.email}</li>
                                </ul>
                            </div>
                        </div>
                        <br/>
                        <a href={userData.html_url} className="btn btn-primary">Visit Profile</a>
                    </div>
                </div>
                <hr/>
                <h3>User Repositories</h3>
                <RepoList repos={repos}/>
                <Pagination onPaginationClick={onPaginationClick} numRepos={numRepos} perPage={perPage} pageNum={pageNum}/>
            </div>
        </div>
    );
}

Profile.propTypes = {
    userData: PropTypes.object,
    repos: PropTypes.arrayOf(PropTypes.object),
    onPaginationClick: PropTypes.func.isRequired,
    perPage: PropTypes.number.isRequired,
    pageNum: PropTypes.number.isRequired
}

Profile.defaultProps = {
    numRepos: 0
}


export default Profile;