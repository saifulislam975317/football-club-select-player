import React from 'react';
import { Link } from 'react-router-dom';
import './League.css'

const League = (props) => {
   
    const {strLeague,strSport,idLeague}=props.league;
    return (

            <div className="home-page-container">
   
            <h1>{strLeague}</h1>
            <h2>Sports type: {strSport}</h2>
            <Link to={`/league/${idLeague}`}>
             <button className="button">Show Details</button>
             </Link> 
        </div>
    );
};

export default League;