import React from 'react'
import axios from 'axios'
import Link from 'next/link'


function EpisodesList({episodesList}) {
    const {results} =episodesList
  return (
    <div>
      <h1>all episodes......</h1>
        {results.map((episode)=>{
            return <h1>
                <Link href={`episodes/${episode.id}`}>
                {episode.name}
                </Link>
                </h1>
        })}
    </div>
  )
}

export default EpisodesList

export const getStaticProps = async () => {
    const {data} =await axios.get('https://rickandmortyapi.com/api/episode');
  
    return { props: 
      { episodesList: data } 
    
    };
  };