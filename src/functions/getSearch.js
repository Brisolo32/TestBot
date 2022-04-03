module.exports = {
    getSearch:  
    /**
    * @param ${string or number} user
    */
  async function(name) {
     const axios = require('axios')
      let uri = '';
       if(typeof name === "string" || typeof name === "number") {
           uri = `https://gdbrowser.com/api/search/${name}`
           let result = await axios.get(uri).catch(error => {
           })
           return result.data;
       }
  }
}
