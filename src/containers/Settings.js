import React, { Component } from "react";
import {
  HelpBlock,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
import { API } from "aws-amplify";

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null
    };
  }
  
  render() {
    return <div className="Notes">Notes</div>;
  }
}