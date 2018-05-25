import React, { Component } from "react";
import { PageHeader, ListGroup } from "react-bootstrap";
import { RingLoader } from 'react-spinners';

export default class Restaurant extends Component {

  constructor(props) {
    super(props);
      
    this.state={
      restaurant: {}
    }
  }

  componentDidMount() {
    this.setState({
        restaurant: this.props.restaurant
    });
  }

  componentWillRecieveProps(nextProps,nextState){
    this.setState({
      restaurant: nextProps["restaurant"]
    });
  }

  shouldComponentUpdate(nextProps,nextState){
    // your condition if you want to re-render every time on props change
    return true;
  }

  render() {
      return (
          <div className="details">
            {this.state.restaurant.name}
          </div>
      );
  }
}

