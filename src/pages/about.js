import React from 'react';

import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';

export default () => (
  <Layout>
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <PageTitle title="About Me"/>
      <img src="https://res.cloudinary.com/nathanjgaul-com/image/upload/c_scale,h_300,w_300/v1527213552/me/me1.jpg" alt="Me" />
      <div style={{ maxWidth: '580px', fontFamily: 'Lato', fontSize: 22, textJustify: 'inter-word' }}>
        I'm <span style={{ color: '#5A7FA9' }}>Nathan</span>, an aspiring <span style={{ color: '#5A7FA9' }}>Developer</span>  living in Albuquerque, NM. I currently work as an <span style={{ color: '#5A7FA9' }}>Electrical Engineer</span> and in my free time, I enjoy creating.
      </div>
    </div>
  </Layout>
);