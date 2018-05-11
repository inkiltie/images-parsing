// Any JS in here is automatically ran for us

// Import the React library
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';

// Create a component
// const App = () => {
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  componentWillMount() {
    // Fantastic place to load data!
    // console.log('App is about to render');
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0.json')
      .then(response => this.setState({ images: response.data.data }));
    // NEVER DO THIS -
    // this.state.images = [ {}, {} ];
  }

  render() {
    // console.log(this.state.images);
    return (
      <div>
        <ImageList images={this.state.images} />
      </div>
    );
  }
};

// Render this component to the screen
Meteor.startup(() => { // Handles container class appearance before DOM starts
  ReactDOM.render(<App />, document.querySelector('.container'));
});
