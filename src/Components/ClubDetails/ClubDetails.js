import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, facoffee } from '@fortawesome/free-solid-svg-icons'
import './ClubDetails.css'
import male from '../../images/male.png'
import female from '../../images/female.png'

const ClubDetails = (props) => {
    console.log(props);
    const {dateFirstEvent,strLogo,strDescriptionEN,strDescriptionFR,strCountry,strGender,strLeagueAlternate,strSport}=props.club;
  
    let gender;
    
    if(strGender==="Male"){

        gender =<img src={male} alt=""/>
    }else{
        gender =<img src={female} alt=""/>
    }

    return (


        <div className="details-container">
            <div className="details-banner">
           <img src={strLogo} alt=""/>
            </div>
            <div className="league-container">
                
            <div className="league-details">
            <h2>{strLeagueAlternate}</h2>
            <h5>Founded: {dateFirstEvent}</h5>
            <h1>country: {strCountry}</h1>
            <p>Gender: {strGender}</p>
            <h3>Sport Type: {strSport}</h3>
            </div>
            <div className="league-image">
            {gender}
            </div>
            </div>
            <br/>
            <div className="league-description">
                <p> {strDescriptionEN}</p>
                <br/>
                <p>{strDescriptionFR}</p>
            </div>

           <div className="social-icons">
           <a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook"></i></a>
           <a href="https://www.twitter.com" target="_blank"><i class="fab fa-twitter-square"></i></a>
           <a href="https://www.youtube.com" target="_blank"><i class="fab fa-youtube"></i></a>
           
           
           
       
           </div>
        
        
        </div>
    );
};

export default ClubDetails;