import React from 'react';
import { Link } from 'gatsby';

import Nav from './Nav';

export default () => (
    <header
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: '5px',
      borderBottom: '0.5px solid black',
      width: '90vw',
      margin: '0 auto',
    }}
  >
    <Link
      to="/"
      style={{
        fontFamily: 'Neuton',
        fontWeight: 'bold',
        fontSize: 36,
        textDecoration: 'none',
        color: '#5A7FA9',
        margin: 0,
      }}
    >
      nathanjgaul
    </Link>
    <Nav />
  </header>
)