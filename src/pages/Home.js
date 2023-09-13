import React from 'react'
import './Home.css';
import {Link} from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Search from './Search'
function Home() {
    return (
        <div className='home'>
            <div className='home_header'>
                <div className='home_headerLeft'>
                   <Link to='/about'>About</Link> 
                   <Link to='/store'>Store</Link>         
                   </div>
                <div class="home_headerRight"></div>
                <Link to='/gmail'>Gmail</Link>
                <Link to='/images'>Images</Link>
            <AppsIcon/>
                <AccountCircleOutlinedIcon />
            </div>
            <div className='home_body'>
                <img src="https://cdn.vox-cdn.com/thumbor/2ECtQus43_-tjqtlxy0WE8peSEQ=/0x0:2012x1341/1400x1050/filters:focal(1006x670:1007x671)/cdn.vox-cdn.com/uploads/chorus_asset/file/15483559/google2.0.0.1441125613.jpg" alt="reload"/>

                <div className="home_inputContainer">
                    <Search hideButtons/> 
                </div>


            </div>


        </div>
    )
}

export default Home