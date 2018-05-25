import React, { Component } from "react";
import { CircleLoader } from 'react-spinners';
import Restaurant from "./Restaurant.js";
import { API } from "aws-amplify";

import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurant: {},
      isLoading: true
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated)
      return;
      
    try {
      const restaurant = await this.randomRestaurantAPI();
      console.log(restaurant);
      this.setState({ restaurant });
    } catch (e) {
      alert(e);
    }

    this.setState({ isLoading: false });
  }

  async randomRestaurantAPI() {
    var x = await API.get("grub", "/yelp");
    return x;
  }


  renderLander() {
    return (
        <div className="lander">
          <h1>Grub Explorer</h1>
          <p>A simple app to find new restaurants</p>
        </div>
    );
  }
  
  renderRestaurant() {
    return (
      <div className="details">
        <Restaurant restaurant={this.state.restaurant} />
      </div>
    );
  }
  
  renderSpinner() {
    return (
        <div className='sweet-loading'>
          <CircleLoader
            color={'#d9534f'} 
            size={150}
          />
        </div>
    );
  }
  
  render() {
    return (
      <div className="Home">
        { this.props.isAuthenticated ? 
          ( this.state.isLoading ? this.renderSpinner() : this.renderRestaurant() )
          : this.renderLander() }
      </div>
    );
  }
}

