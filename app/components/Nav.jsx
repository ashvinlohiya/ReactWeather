var React = require('react');
var {Link, IndexLink} = require('react-router');

// var Nav = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <h2>Nav Component</h2>
//         <IndexLink to='/' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//         <IndexLink to='/about' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
//         <IndexLink to='/examples' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink>
//       </div>
//     );
//   }
// });

// var Nav = () => {
//
// }

var Nav = React.createClass({

  onSearch: function(e) {
    e.preventDefault();

    var location = this.refs.search.value;
    var enodedLocation = encodeURIComponent(location);
    if (location.length > 0) {
      this.refs.search.value = '';
      window.location.hash = '#/?location='+enodedLocation;
    }

  },

  render:function() {
      return (
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">Weather App</li>
              <li>
                  <IndexLink to='/' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
              </li>
              <li>
                <IndexLink to='/about' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
              </li>
              <li>
                <IndexLink to='/examples' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink>
              </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <form onSubmit={this.onSearch}>
              <ul className="menu">
                <li>
                  <input type="search" placeholder="Search weather by city" ref="search"/>
                </li>
                <li>
                  <input type="submit" className="button" value="Get Weather"/>
                </li>

              </ul>
            </form>
          </div>
        </div>
    );
  }
});

module.exports = Nav;
$(document).foundation();
