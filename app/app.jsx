var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('./components/Main.jsx');
var Weather = require('./components/Weather.jsx');
var About = require('./components/About.jsx');
var Examples = require('./components/Examples.jsx');

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App css
require('style!css!./styles/app.css');

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <Route path='about' component={About}></Route>
        <Route path='examples' component={Examples}></Route>
        <IndexRoute component={Weather}></IndexRoute>
      </Route>
    </Router>,
    document.getElementById('app')
  );
