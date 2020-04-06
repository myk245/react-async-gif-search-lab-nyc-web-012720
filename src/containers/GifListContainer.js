import React from 'react'; 
import GifList from '../components/GifList'; 
import GifSearch from '../components/GifSearch'; 

class GifListContainer extends React.Component {
   state = {
      gifs: [], 
   }

   render() {
      return (
         <div>
            <GifSearch fetchGifs={this.fetchGifs} />
            <GifList gifs={this.state.gifs} />
         </div>
      )
   }

   fetchGifs = (searchTerm = "hello") => {
      fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=mXPgu7dCtqIJMkaje1r971O6e0PfZeZq&rating=g`)
         .then(resp => resp.json())
         .then(({ data }) => {
            this.setState({
               gifs: data.map(gif => ({ url: gif.images.original.url }))
            })
         })
   }

   componentDidMount() {
      this.fetchGifs()
   }

}

export default GifListContainer; 
