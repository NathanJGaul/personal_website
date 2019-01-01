import React from 'react';

import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import ProjectCard from '../components/ProjectCard';

export default () => (
  <Layout>
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <PageTitle title="What I've Made"/>
      <div style={{ display: 'flex' }}>
        <ProjectCard imageSrc="https://picsum.photos/200/200/?random" imageAlt="" title="Project 1" description="My First Project" />
        <ProjectCard imageSrc="https://picsum.photos/200/200/?random" imageAlt="" title="Project 2" description="My Second Project" />
      </div>
    </div>
  </Layout>
);
