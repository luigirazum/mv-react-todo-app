import React from 'react';

import { Link, Outlet } from 'react-router-dom';

const About = () => (
  <>
    <div>
      <h2>About</h2>
      <ul>
        <li>
          <Link to="app">About App</Link>
        </li>
        <li>
          <Link to="author">About Author</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  </>
);

export default About;
