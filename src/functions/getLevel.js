module.exports = {
    getLevel:  
    /**
    * @param ${string or number} user
    */
  async function(level) {
     const axios = require('axios')
      let uri = '';
       if(typeof level === "string" || "number") {
           uri = `https://gdbrowser.com/api/level/${level}`
           let result = await axios.get(uri).catch(error => {
           })
           if (result == undefined) {
                return {
                    error: 'The levelID is not valid | O levelID não é válido',
                }
            } else {	
                return result.data
            }
       }
  }
}