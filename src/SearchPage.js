import React from 'react'
import './SearchPage.css'
import { useStatevalue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import {Link} from "react-router-dom"
import Search from './pages/Search';
import SearchIcon from '@mui/icons-material/Search';

import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// https://developers.google.com/custom-search/v1/using_rest

//https://cse.google.com/cse/create/new

function SearchPage() {
const[{term='tesla'},dispatch] = useStatevalue();

// LIVE API CALL
// const {data} = useGoogleSearch(term);


const data=Response;

   console.log(data);


  return (
    <div className='searchPage'>
        <div className='searchPage_header'>
          <Link to ="/">
            <img className='searchPage_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png"alt=""></img> 
          </Link>

          <div className='searchPage_headerBody'>
            <Search hideButtons/>

            <div className='searchPage_options'>
              <div className='searchPage_optionsLeft'>
                <div className='searchPage_options'>
                   <SearchIcon/>
                  <Link to ="/all">All</Link>
                </div>

                <div className='searchPage_options'>
                   <DescriptionIcon/>
                  <Link to ="/all">News</Link>
                </div>
                <div className='searchPage_options'>
                   <ImageIcon/>
                  <Link to ="/all">Images</Link>
                </div>

                <div className='searchPage_options'>
                   <LocalOfferIcon/>
                  <Link to ="/all">Shopping</Link>
                </div>

                <div className='searchPage_options'>
                   <RoomIcon/>
                  <Link to ="/all">maps</Link>
                </div>

                <div className='searchPage_options'>
                   <MoreVertIcon/>
                  <Link to ="/all">more</Link>
                </div>                

              </div>

              <div className='searchPage_optionsRight'>
                <div className='searchPage_option'>
                  <Link to="/settings">Settings</Link>
                </div>
                <div className='searchPage_option'>
                  <Link to="/tools">Tools</Link>
                </div>
              </div>
            </div>
          </div>
         </div>  


           {/* {true && (
          <div 
          className='searchPage_results'> 
          <p className='searchPage_resultCount'>
            About {data?.searchInformation.formattedTotalResults}  
            results ({data?.searchInformation.formattedSearchTime}  ) for {term}
            </p>
            
            
          
          </div> 
  )} */}

    </div>
  )
}

export default SearchPage