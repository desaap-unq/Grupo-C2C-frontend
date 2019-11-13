import React, { Component } from 'react';

import axios from 'axios';
import { Container } from "reactstrap";

import SearchNavbar from "../components/Navbars/SearchNavbar.js";
import SearchPageHeader from "../components/Headers/SearchPageHeader.js";
import DemoFooter from "../components/Footers/DemoFooter.js";
import BusinessList from '../components/BusinessList';

const API_URL = 'http://localhost:8080';
const INSTRUCTOR_API_URL = `${API_URL}/business`;

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = { businesses:[] };
  }

  componentDidMount() {
      this.initEffect();
      this.getBusinesses();
  }

  getBusinesses() {
    const { match: { params } } = this.props;
      
    axios.get(`${INSTRUCTOR_API_URL}/search/${params.food}`)
         .then(({ data: business }) => {
            console.log('business', business);

          this.setState({ businesses: business });
    });
  }

  initEffect() {
    document.documentElement.classList.remove("nav-open");
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  }

  render() {
  return (
      <>
        <SearchNavbar businesses={this.state.businesses}/>
        <SearchPageHeader />
        <div className="main">
          <div className="section text-center">
            <Container>
              <br />
              <br />
              <BusinessList businesses={this.state.businesses}/>
              <br />
              <br />
            </Container>
          
          </div>
          <DemoFooter />
        </div>
      </>
    );
  }
}
    
export default SearchPage;