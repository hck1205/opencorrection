import React from 'react';
import { Header, Footer, MainTemplate } from 'components';

import Container from './container';

const Main = () => (
  <MainTemplate header={<Header />} footer={<Footer />}>
    <Container />
  </MainTemplate>
);

export default Main;
