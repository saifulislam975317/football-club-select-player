import React, { useEffect, useState } from 'react';
import League from '../League/League';
import './Home.css'


const Home = () => {

    const [leagues, setLeagues]= useState([]);

    useEffect(() => {
      fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
      .then(res => res.json())
      .then(data => setLeagues(data.leagues));
      
    },[])

    return (
        <div>
          <div className="image-div">
            <img src="https://images.immediate.co.uk/production/volatile/sites/3/2019/04/GettyImages-950361606-fe67862.jpg?quality=90&lb=620,413&background=white" alt=""/>
            <h1>English Premier League</h1>
          
          </div>
            
            {
              leagues.map(lg=> <League league={lg}></League>)
            }
 
        </div>
    );
};

export default Home;