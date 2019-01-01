import React from 'react';
import { Link } from 'gatsby';

export default () => (
  <div>
    <Link
      to="/about"
      style={{
        fontFamily: 'Lato',
        fontSize: 22,
        textDecoration: 'none',
        color: 'black',
      }}
    >
      About
    </Link>
    <span> | </span>
    <Link
      to="/contact"
      style={{
        fontFamily: 'Lato',
        fontSize: 22,
        textDecoration: 'none',
        color: 'black',
      }}
    >
      Contact
    </Link>
  </div>
);
