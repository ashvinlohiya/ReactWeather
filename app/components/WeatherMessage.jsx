var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function() {
//     var {temp, location} = this.props;
//     return(
//       <h3>It's {temp} in {location}!</h3>
//     );
//   }
// });

var WeatherMessage = (props) => {
  var {temp, location} = props;
  return(
    <h3>It's {temp} in {location}!</h3>
  )
};

//Another way using ES6 destructuring
// var WeatherMessage = ({temp, location}) => {
//   return(
//     <h3>It's {temp} in {location}!</h3>
//   )
// };

module.exports = WeatherMessage;
