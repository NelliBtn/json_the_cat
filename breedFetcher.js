const request = require('request');
const breed = process.argv.slice(2).join();
let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed.substring(0, 3)}`;


request(url, (err, resp, data) => {
  if (err) {
    console.log(`Url error: ${err}`);
    return;
  }

  data = JSON.parse(data);
  if (data[0] === undefined) {
    console.log('Breed was not found');
    return;
  }
  
  console.log(data[0].description);
});