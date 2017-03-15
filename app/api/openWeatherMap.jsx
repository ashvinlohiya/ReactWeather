var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&units=metric&appid=866c8e153c124553b73c574ab9b46ffb';

//866c8e153c124553b73c574ab9b46ffb

module.exports =  {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {
      if (res.data.cod  && res.data.message ) {
        throw new Error('Unable to fetch weather');
      } else {
        return res.data.main.temp;
      }
    }, function(res) {
      throw new Error('Unable to fetch weather');
    });
  }
}
