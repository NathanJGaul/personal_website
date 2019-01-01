import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faGithub, faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';

import './Layout.css';

import Header from './Header';

library.add(faTwitter, faGithub, faFreeCodeCamp);

export default ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);
