import React, { Component } from 'react';
import { Container } from "reactstrap";
import ViandasNavBar from '../components/Navbars/ViandasNavBar';
import SearchPageHeader from "../components/Headers/SearchPageHeader.js";
import DemoFooter from "../components/Footers/DemoFooter";
import BusinessList from '../components/BusinessList';
import API from "../utils/api";

const SERVICE_URL = `business`;

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
      
    API.get(`${SERVICE_URL}/search/${params.food}`)
         .then(({ data: business }) => {
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
        <ViandasNavBar onChangeLanguage={this.props.onChangeLanguage} history={this.props.history}/>
        <SearchPageHeader businesses={this.state.businesses} />
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
          <DemoFooter/>
        </div>
      </>
    );
  }
}
    
export default SearchPage;
