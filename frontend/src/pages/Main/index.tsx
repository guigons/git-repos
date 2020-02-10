import React from 'react';

import RepositoryList from '../../components/RepositoryList';
import Sidebar from '../../components/Sidebar';

import { Wrapper, Content } from '../../styles/component';

const Main = () => (
  <Wrapper>
    <Sidebar />
    <Content>
      <RepositoryList />
    </Content>
  </Wrapper>
);

export default Main;
