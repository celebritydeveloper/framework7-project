import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button,
  Icon
} from 'framework7-react';

export default () => (
  <Page name="home" className="home">
    {/* Top Navbar */}
    <Navbar large sliding={false}>
      <NavLeft>
        <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" />
      </NavLeft>
      <NavTitle sliding>Interview App</NavTitle>
      <NavRight>
        <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="right" />
      </NavRight>
      <NavTitleLarge>Interview App</NavTitleLarge>
    </Navbar>

    {/* Page content */}
    <Block className="text-center">
      <img src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg" width="80" />
    </Block>

    <BlockTitle className="text-center">
      <p>Get the best coffee in town! </p>
    </BlockTitle>
    
    

    <Block>
      <Row tag="p">
        <Link href="/register/" className="col btn-brown">Register</Link>
        <Link href="/login/" className="col btn-yellow">Login</Link>
      </Row>
      <Row tag="p">
        <Link href="http://facebook.com" className="col facebook-btn" external><Icon ios="f7:facebook" aurora="f7:facebook" md="material:facebook" size="20px"></Icon>  Continue with Facebook</Link>
      </Row>
    </Block>
   
  </Page>
);