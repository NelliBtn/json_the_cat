const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName.substring(0, 3)}`,
    (err, resp, data) => { //callback function => description
      if (err) { // wrong address
        console.log(`Url error: ${err}`);
        return;
      }
      data = JSON.parse(data);
      if (data[0] === undefined) { //connection made, no data
        callback('description not found', null);
      } else {
          const description = data[0].description;
          callback(null, description); //success
      }
    });
};

module.exports = { fetchBreedDescription };