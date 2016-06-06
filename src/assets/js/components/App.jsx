import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';
import 'whatwg-fetch';
import update from 'react-addons-update';

import NavBar from './NavBar.jsx';
import Profile from './Profile.jsx';
import RepoList from './RepoList.jsx';
import Search from './Search.jsx';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            username: 'xenturi0n',
            userData: {},
            repos: [],
            perPage: 5,
            pageNum: 1
        };
    }
    
    //Get user data from github
    _getUserData(){
        const { clientId, clientSecret } = this.props;
        const { username } = this.state
        fetch(`https://api.github.com/users/${username}?client_id=${clientId}&client_secret=${clientSecret}`)        
        .then((response)=>{
            if(!response.ok){
                throw Error(response.statusText);
            }
            return response.json();
        })                
        .then((responseData)=>{
            this.setState({userData: responseData});
        })
        .catch((err)=>{
            this.setState({username: null});
            alert(err);
        });
    }
    
    //Get user repos from github
    _getUserRepos(){
        const { clientId, clientSecret } = this.props;
        const { username, perPage, pageNum } = this.state
        fetch(`https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${pageNum}&sort=created&client_id=${clientId}&client_secret=${clientSecret}`)        
        .then((response)=>{
            if(!response.ok){
                throw Error(response.statusText);
            }
            return response.json();
        })                
        .then((responseData)=>{
            this.setState({repos: responseData});
        })
        .catch((err)=>{
            this.setState({username: null});
            alert(err);
        });
    }
    
    _handleSearchSubmit(searchQuery){      
        this.setState({username: searchQuery}, ()=>{
            this._getUserData();
            this._getUserRepos();
        });
    }
    
    _handlePaginationClick(pageNumber, numPages){
        let nextPage= null;
        if(!isNaN(pageNumber)){
            nextPage= Number(pageNumber);
        }else{
            nextPage= pageNumber === 'previous' ? this.state.pageNum-1 : this.state.pageNum+1;
            nextPage= nextPage <= 0 ? numPages: nextPage;
            nextPage= nextPage > numPages ? 1 : nextPage;
        }
        this.setState({pageNum: nextPage}, ()=>{
            this._getUserRepos();
        });
    }
    
    componentDidMount(){
        this._getUserData();
        this._getUserRepos();
    }
    
    render(){
        const{clientSecret, clientId, _handleSearchSubmit}=this.props;
        const{userData, repos, perPage, pageNum}=this.state;        
        return(
            <div>
                <NavBar onSubmit={this._handleSearchSubmit.bind(this)}/>
                
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <Profile userData = {userData} repos={repos} onPaginationClick={this._handlePaginationClick.bind(this)} perPage={perPage} pageNum={pageNum}/>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

App.propTypes = {
    clientId: PropTypes.string.isRequired,
    clientSecret: PropTypes.string.isRequired
}

App.defaultProps = {
    clientId: '9be31a0ff098bf65e84f',
    clientSecret: '22621f878b0b7cd12c2b384d8082ce3a72347445'
}

export default App;