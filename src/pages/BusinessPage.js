import React, { Component } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8080';
const INSTRUCTOR_API_URL = `${API_URL}/business`;

class BusinessPage extends Component {

  componentDidMount() {
    this.getBusiness();
  }

  getBusiness() {
    
    axios.get(`${INSTRUCTOR_API_URL}/1`)
         .then(({ data: business }) => {
            console.log('business', business);

          // this.setState({ businesses: business });
    });
  }

  render() {
    return(
      <h1>h1. Bootstrap heading</h1>
    )
  }
}

export default BusinessPage;