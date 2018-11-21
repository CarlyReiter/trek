const URL = 'https://trektravel.herokuapp.com/trips';
// const URLtrip = append the id to the end of the above url

const reportStatus = (message) => {
  $('#status-message').html(message);
};

const loadTrips = () => {
  reportStatus("loading your flippin' trips...");

  const tripList = $('#trip-list');
  tripList.empty();

  axios.get(URL)

  .then((response) => {
    reportStatus(`Successfully loaded ${response.data.length} trips for ya.`);

    response.data.forEach((trip) => {
      tripList.append(`<a href id ='trips'="index.html"><li id='trips'>${trip.name}</li><a>`);
      // add id as class to that element and then search for that to ammend to the url
    });
  })

  .catch((error) => {
    reportStatus(`There was an error: ${error.message}`);
  });
};

// const loadTripDetails = () => {
//   reportStatus("loading your trip...");
//
//   const trip = $('#trip-details');
//   trip.empty();
//
    // create modified url (url plus id) here?

//   axios.get(URLtrip)
//
//   .then((response) => {
//     reportStatus(`Successfully loaded your trip ${trip.name}`);
//   })
//
//   response.data.forEach((trip) => {
//     tripList.append(`<li id='trip-details'>${trip}</li>`);
//   });
//
//   // .catch((error) => {
//   //   reportStatus(`There was an error: ${error.message}`);
//   // });
// };

$(document).ready(() => {
  $('#load').click(loadTrips);
  $('#trips').click(loadTripDetails);
});
