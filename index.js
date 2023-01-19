// this file will run out main fetch function

// const { fetchMyIp, fetchCoordsByIP } = require('./iss.js');


// fetchMyIp((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned IP: ", ip);
// })

// const ipAddress = '99.224.193.223';

// fetchCoordsByIP(ipAddress, (error, coordinates) => {
//   if (error) {
//     console.log("It didnt work!", error);
//     return;
//   }
//   console.log("It worked! Here are your coordinates: ", coordinates);
// });

// const myCoords = { latitude: 43.653226, longitude: -79.3831843 };

// fetchISSFlyOverTimes(myCoords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned flyover times:', passTimes);
// });


const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at  ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});
