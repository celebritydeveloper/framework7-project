import React from 'react';
import { Page, Navbar, List, ListItem, NavLeft, NavRight, NavTitle, Link, Icon } from 'framework7-react';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      products: this.$f7.data.products,
    }
  }

  getBadgeClasses() {
    let classes = "";
    classes += this.state.rating < 3 ? "red" : "blue";
    return classes;
  }
  render() {
    return (
      <Page name="catalog">
        <Navbar>
          <NavLeft color="yellow" backLink="Back" />
          <NavTitle className="meal--title">Nearby</NavTitle>
          <NavRight>
            <Link><Icon ios="f7:map" aurora="f7:map" md="material:map" size="20px" color="yellow"></Icon></Link>
          </NavRight>
        </Navbar>
        <List className="meal__list">
          {this.state.products.map((product) => (
            <ListItem
              key={product.id}
              className="meal--list-item"
              link={`/product/${product.id}/`}
              header={product.time}
              title={product.title}
              footer={product.address}
              badge={product.rating} badgeColor={this.getBadgeClasses()}
              noChevron
            >
              <img slot="media" src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg" width="80" />
            </ListItem>
          ))}
        </List>
      </Page>
    );
  }
}