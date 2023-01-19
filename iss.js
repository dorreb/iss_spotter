//contain most of the logic for fetching the data from each API endpoint.
const request = require('request');

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */


const fetchMyIp = function(callback) {
  const apiUrl = `https://api.ipify.org?format=json`;
  request(apiUrl, (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP. Response: ${body}`), null);
      return;
    }

    const ip = JSON.parse(body);

    if (ip.length === 0) {
      callback(`No ip found!`, null);
      return;
    }

    callback(null, ip);

  });

};

module.exports = { fetchMyIp };