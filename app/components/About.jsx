var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });


var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application. Search a city in the search bar to get the current temperature in degree celsius
      </p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
        <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used
        </li>
        <li>
        <a href="http://openweathermap.org">Open Weather Map</a> - This was the service used to fetch the data
        </li>
        <li>
        <a href="https://github.com/ashvinlohiya/ReactWeather"> Source Code </a> - You can find the source code here!
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
