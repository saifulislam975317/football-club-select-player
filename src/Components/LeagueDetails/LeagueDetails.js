import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ClubDetails from '../ClubDetails/ClubDetails';

const LeagueDetails = () => {
    const {leagueId}=useParams();
    const [league, setLeague]=useState([])
    useEffect(()=>{
        const url=`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeague(data.leagues))
        
    },[])
    return (
        <div>
           
           {
         league.map(clubs=><ClubDetails club={clubs}></ClubDetails>)
       }
        </div>
    );
};

export default LeagueDetails;