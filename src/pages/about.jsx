import React from 'react';
import { Page, Navbar, Block, BlockTitle, List, ListItem } from 'framework7-react';

export default () => (
  <Page className="Meal">
    <Navbar title="About" backLink="Back" />
    <BlockTitle>About My App</BlockTitle>
    <Block strong>
      <p>Fugiat perspiciatis excepturi, soluta quod non ullam deleniti. Nobis sint nemo consequuntur, fugiat. Eius perferendis animi autem incidunt vel quod tenetur nostrum, voluptate omnis quasi quidem illum consequuntur, a, quisquam.</p>
      <p>Laudantium neque magnam vitae nemo quam commodi, in cum dolore obcaecati laborum, excepturi harum, optio qui, consequuntur? Obcaecati dolor sequi nesciunt culpa quia perspiciatis, reiciendis ex debitis, ut tenetur alias.</p>
    </Block>
    <Block strong>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni molestiae laudantium dignissimos est nobis delectus nemo ea alias voluptatum architecto, amet similique, saepe iste consectetur in repellat ut minus quibusdam!</p>
      <p>Molestias et distinctio porro nesciunt ratione similique, magni doloribus, rerum nobis, aliquam quae reiciendis quasi modi. Nam a recusandae, fugiat in ea voluptates fuga eius, velit corrupti reprehenderit dignissimos consequatur!</p>
      <p>Blanditiis, cumque quo adipisci. Molestiae, dolores dolorum quos doloremque ipsa ullam eligendi commodi deserunt doloribus inventore magni? Ea mollitia veniam nostrum nihil, iusto doloribus a at! Ea molestiae ullam delectus!</p>
    </Block>
    <BlockTitle>Songs</BlockTitle>
    <List mediaList>
      <ListItem
      className="meal--list"
      link="#"
      text="Hello World"
      title="Yellow Submarine"
      subtitle="Beatles"
      text="Lorem ipsum dolor."
      after="$15"
    >
      <img slot="media" src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg" width="80" />
    </ListItem>

    <ListItem
      className="meal--list"
      link="#"
      header="11:30AM - 11PM"
      title="Yellow Submarine"
      footer="20 Ikpa Road, Uyo, AKS"
      after="$15"
      noChevron
    >
      <img slot="media" src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg" width="80" />
    </ListItem>
    </List>
  </Page>
);