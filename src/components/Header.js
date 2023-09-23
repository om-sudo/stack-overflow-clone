import React from "react"
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom';
import {Avatar} from "@mui/material";

const Header = (props) => {

    const {setIsLoggedIn} = props;

    const handleLogOut = () => {
        setIsLoggedIn(false);
        localStorage.setItem("loggedInUser",null);
    }

    return(<div className="header">
        <div className="headerContainer">
            <div className='stackOverflowLogo'>
                <Link to='/'>  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/220px-Stack_Overflow_logo.svg.png" alt = 'logo'/></Link> 
            </div> 
             <div className="searchContainer">
                <SearchIcon/>
                <input className="searchBar" type="text" placeholder="type here"/>
            </div>
            <div className="userLogo">
                <button onClick={handleLogOut }  style={{marginRight:"10px"}}>LogOut</button>
                <Avatar/>
            </div>
          
        </div>
    </div>
    );
}


export default Header;