module.exports = {
    getPlayerLB:  
    /**
    * @param ${string or number} user
    */
  async function(count) {
     const axios = require('axios')
      let uri = '';
         if(typeof count === "string" || "number") {
                uri = `https://gdbrowser.com/api/leaderboard?accurate&count=${count}`
                let result = await axios.get(uri).catch(error => {
                })
                if (result == undefined) {
                    return {
                        error: 'The count is not valid | O count não é válido',
                    }
                } else {	
                    return result.data
                }
            }
       }
}
