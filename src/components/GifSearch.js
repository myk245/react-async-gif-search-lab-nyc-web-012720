import React from 'react'; 

class GifSearch extends React.Component{
   state = {
      searchTerm: ""
   }

   handleChange = event => {
      this.setState({searchTerm: event.target.value})
   }

   handleSubmit = event => {
      event.preventDefault()
      this.props.fetchGifs(this.state.searchTerm)
      this.setState({ searchTerm: "" })
   }

   render() {
      return (
         <div>
            <form onSubmit={this.handleSubmit}>
               <label>Search for memes:</label>
               <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />  
               <input type="submit" value="Submit" />
            </form>
         </div>
      )
   }

}

export default GifSearch; 