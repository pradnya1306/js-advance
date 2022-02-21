// const axios=require("axios")
// console.log(axios)
const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://api.merakilearn.org/courses')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  data=response.JSON.stringfy