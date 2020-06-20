import React from 'react';
import { Device }  from 'framework7/framework7-lite.esm.bundle.js';
import {
  App,
  Panel,
  Views,
  View,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter
} from 'framework7-react';
import cordovaApp from '../js/cordova-app';
import routes from '../js/routes';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      // Framework7 Parameters
      f7params: {
        id: 'io.framework7.myapp', // App bundle ID
        name: 'Interview App', // App name
        theme: 'auto', // Automatic theme detection

        // App root data
        data: function () {
          return {

            // Demo products for Catalog section
            products: [
              {
                id: '1',
                title: 'Chicken and Chips',
                address: "9, Ikpa Road, Uyo",
                rating: 4.4,
                time: "11AM - 11PM",
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
              },
              {
                id: '2',
                title: 'Pizza Expresso',
                address: "Flat 2, Ekeki Estate, Yenagoa",
                rating: 3.5,
                time: "12PM - 3PM",
                description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
              },
              {
                id: '3',
                title: 'Rice and Stew',
                address: "9, Ikpa Road, Uyo",
                rating: 2.3,
                time: "10AM - 6PM",
                description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
              },
              {
                id: '3',
                title: 'Akpankukwo',
                address: "9, Ikpa Road, Uyo",
                rating: 2.3,
                time: "10AM - 6PM",
                description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
              },

              {
                id: '4',
                title: 'Afang Soup with Fufu',
                address: "9, Ikpa Road, Uyo",
                rating: 2.3,
                time: "10AM - 6PM",
                description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
              },

              {
                id: '5',
                title: 'Basmatic Rice',
                address: "12, Oron Road, Uyo",
                rating: 2.3,
                time: "10AM - 6PM",
                description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
              },
            ]
          };
        },

        // App routes
        routes: routes,


        // Input settings
        input: {
          scrollIntoViewOnFocus: Device.cordova && !Device.electron,
          scrollIntoViewCentered: Device.cordova && !Device.electron,
        },
        // Cordova Statusbar settings
        statusbar: {
          iosOverlaysWebView: true,
          androidOverlaysWebView: false,
        },
      },
      // Login screen demo data
      username: '',
      password: '',
    }
  }
  render() {
    return (
      <App params={ this.state.f7params } >

        {/* Left panel with cover effect*/}
        <Panel left cover themeDark>
          <View>
            <Page>
              <Navbar title="Left Panel"/>
              <Block>Left panel content goes here</Block>
            </Page>
          </View>
        </Panel>


        {/* Right panel with reveal effect*/}
        <Panel right reveal themeDark>
          <View>
            <Page>
              <Navbar title="Right Panel"/>
              <Block>Right panel content goes here</Block>
            </Page>
          </View>
        </Panel>


        {/* Views/Tabs container */}
        <Views tabs className="safe-areas">
          {/* Tabbar for switching views-tabs */}
          <Toolbar tabbar labels bottom className="toolbar">
            <Link tabLink="#view-home" tabLinkActive iconIos="f7:house" iconAurora="f7:house" iconMd="material:home" text="Home" />
            <Link tabLink="#view-catalog" iconIos="f7:gift_fill" iconAurora="f7:gift_fill" iconMd="material:room_service" text="Meals" />
            <Link tabLink="#view-about" iconIos="f7:map_pin_ellipse" iconAurora="f7:map_pin_ellipse" iconMd="material:place" text="Location" />
            <Link tabLink="#view-settings" iconIos="f7:gear_alt_fill" iconAurora="f7:gear_alt_fill" iconMd="material:settings" text="Settings" />
          </Toolbar>

          {/* Your main view/tab, should have "view-main" class. It also has "tabActive" prop */}
          <View id="view-home" main tab tabActive url="/" />

          {/* Catalog View */}
          <View id="view-catalog" name="catalog" tab url="/catalog/" />

          {/* Settings View */}
          <View id="view-about" name="settings" tab url="/about/" />

          {/* Settings View */}
          <View id="view-settings" name="settings" tab url="/settings/" />

        </Views>

     

        
      </App>
    )
  }

  componentDidMount() {
    this.$f7ready((f7) => {
      // Init cordova APIs (see cordova-app.js)
      if (Device.cordova) {
        cordovaApp.init(f7);
      }
      // Call F7 APIs here
    });
  }
}