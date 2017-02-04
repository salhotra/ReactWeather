var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1  className="text-center">About</h1>
      <p>This application shows you the current weather of any city in the world.
          The application was created and is being maintained by <strong>Nishant Salhotra</strong>.
      </p>
      <p>
        Here are the tools and technology I used:
      </p>
      <ul>
        <li>
          <a href='https://facebook.github.io/react' target='_blank'>React</a> - This is the JavaScript framework
            I used.
        </li>
        <li>
          <a href='https://openweathermap.org' target='_blank'>Open Weather Map</a> - I used Open Weather Map to
            search for weather data by city name.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
