import React from 'react';
import axios from 'axios'
import formatSeasons from '../utils/formatSeasons'



async function fetchShow(setShow, setSeasons){
    return(
    axios
      .get(
        "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
      )
      .then(res => {
        // setShow(res.data);
        // setSeasons(formatSeasons(res.data._embedded.episodes));
        // setShow= res.data
        // setSeasons = formatSeasons(res.data._embedded.episodes)
        // console.log('theSeasons', setSeasons)
        // return  setShow, setSeasons
        return res.data
      }));
    };


  export default fetchShow