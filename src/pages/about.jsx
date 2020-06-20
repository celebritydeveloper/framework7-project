import React from 'react';
import { Page, Navbar, Block, BlockTitle, List, ListItem, Subnavbar, Searchbar, Icon, NavLeft, NavRight, NavTitle, Link } from 'framework7-react';


export default () => (
  <Page className="Meal">
   

    <Navbar>
      <NavLeft color="yellow" backLink />
      <NavTitle className="meal--title">Nearby</NavTitle>
      <NavRight>
        <Link><Icon ios="f7:map" aurora="f7:map" md="material:map" size="20px" color="yellow"></Icon></Link>
      </NavRight>
    </Navbar>


    <List mediaList className="meal__list">
    <ListItem
      className="meal--list-item"
      link="#"
      header="11:30AM - 11PM"
      title="Yellow Submarine"
      footer="20 Ikpa Road, Uyo, AKS"
      badge="4.4" badgeColor="yellow"
      noChevron
    >
      <img slot="media" src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg" width="80" />
    </ListItem>

    <ListItem
      className="meal--list-item"
      link="#"
      header="11:30AM - 11PM"
      title="Yellow Submarine"
      footer="20 Ikpa Road, Uyo, AKS"
      badge="3.2" badgeColor="red"
      noChevron
    >
      <img slot="media" src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg" width="80" />
    </ListItem>

    <ListItem
      className="meal--list-item"
      link="#"
      header="11:30AM - 11PM"
      title="Yellow Submarine"
      footer="20 Ikpa Road, Uyo, AKS"
      badge="4.8" badgeColor="green"
      noChevron
    >
      <img slot="media" src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg" width="80" />
    </ListItem>

    <ListItem
      className="meal--list-item"
      link="#"
      header="11:30AM - 11PM"
      title="Yellow Submarine"
      footer="20 Ikpa Road, Uyo, AKS"
      badge="2.5" badgeColor="yellow"
      noChevron
    >
      <img slot="media" src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg" width="80" />
    </ListItem>

    <ListItem
      className="meal--list-item"
      link="#"
      header="11:30AM - 11PM"
      title="Yellow Submarine"
      footer="20 Ikpa Road, Uyo, AKS"
      badge="2.5" badgeColor="yellow"
      noChevron
    >
      <img slot="media" src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg" width="80" />
    </ListItem>

    </List>
  </Page>
);