import React, {PropTypes} from 'react';
import Search from './Search.jsx';

const NavBar = (props)=>{
    const {onSubmit}=props;
    return(
        <nav className="navbar navbar-inverse">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">My GitHub</a>                    
                </div>
                <div id="navbar" className="collapse navbar-collapse">
                    <Search onSubmit={onSubmit}/>
                </div>
                
            </div>
        </nav>
    );
}

NavBar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}


export default NavBar;