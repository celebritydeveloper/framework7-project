import React from 'react';
import {
  Page,
  Navbar,
  List,
  ListInput,
  ListItem,
  Toggle,
  BlockTitle,
  Row,
  Button,
  Range,
  Block
} from 'framework7-react';

export default () => (
  <Page name="form">
    <Navbar title="Login" backLink="Back"></Navbar>

    <List >
      <ListInput
        label="E-mail"
        type="email"
        placeholder="E-mail"
      ></ListInput>

      <ListInput
        label="Password"
        type="password"
        placeholder="Password"
      ></ListInput>
    </List>

    <Block>
      <p href="" className="right">Forgot Password?</p>
    </Block>

    <Block>
      <Row tag="p">
        <Button className="col" color="red" round fill>Login</Button>
      </Row>
    </Block>

    

  </Page>
);