import React from 'react'
import axios from 'axios';


function SingleEpisode({episode}) {
 console.log(episode)
  return (
    <div>Episode: {episode.name} ..... {episode.id} </div>
  )
}

export default SingleEpisode


export async function getStaticPaths() {
  const {data} =await axios.get(`https://rickandmortyapi.com/api/episode`);

  
const paths = data.results.map((episode)=>{
  return {params:{episodeId : episode.id.toString()}}
})
return {
        paths,
        fallback: false,
      };
    
}
export const getStaticProps = async (context) => {

    const {params} = context
    const {data} = await axios.get(`https://rickandmortyapi.com/api/episode/${params.episodeId}`);
  
    return { props: {
      episode: data 
    }
      
    
    };
  };