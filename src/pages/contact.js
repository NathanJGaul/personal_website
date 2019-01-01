import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';

const socialStyle = {
  margin: '0 10px',
  color: 'black',
};

export default () => (
  <Layout>
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <PageTitle title="Contact Me" />
      <div
        style={{
          fontFamily: 'Lato',
          fontSize: 22,
          color: '#5A7FA9',
          marginBottom: '21px',
        }}
      >
        nathanjgaul@gmail.com
      </div>
      <div style={{ display: 'flex' }}>
        <a target="#" href="https://twitter.com/NathanJGaul">
          <FontAwesomeIcon
            icon={['fab', 'twitter']}
            size="lg"
            style={socialStyle}
          />
        </a>
        <a target="#" href="https://github.com/NathanJGaul">
          <FontAwesomeIcon
            icon={['fab', 'github']}
            size="lg"
            style={socialStyle}
          />
        </a>
        <a target="#" href="https://www.freecodecamp.org/nathanjgaul">
          <FontAwesomeIcon
            icon={['fab', 'free-code-camp']}
            size="lg"
            style={socialStyle}
          />
        </a>
      </div>
    </div>
  </Layout>
);
