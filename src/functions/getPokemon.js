module.exports = {
    getPokemon:  
    /**
    * @param ${string or number} id
    */
  async function(id) {
     const axios = require('axios')
      let uri = '';
       if(typeof id === "string" || "number") {
           uri = `https://www.pokeapi.co/api/v2/pokemon/${id}`
           let result = await axios.get(uri).catch(error => {
           })
           if (result == undefined) {
                return {
                    error: 'The pokemonID is not valid | O pokemonID não é válido',
                }
            } else {	
                return result.data
            }
       }
  }
}