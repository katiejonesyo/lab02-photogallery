import React, { Component } from'react';
import Header from './Header.js';
import ImageList from './ImageList.js';
import './App.css';
import images from './Data.js';



export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <ImageList array={images}/>
      </div>
    )
  }
};