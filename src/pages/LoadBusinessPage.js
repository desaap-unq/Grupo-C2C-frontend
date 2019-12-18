import React, { Component } from "react";
import ViandasNavBar from "../components/Navbars/ViandasNavBar.js";
import FormBusiness from "../components/body/FormBusiness";
import ViandasYaFooter from "../components/Footers/ViandasYaFooter";
// import { Button, Form, Card, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';

class LoadBusinessPage extends Component {

    render() {
        return (
          <>
            <ViandasNavBar onChangeLanguage={this.props.onChangeLanguage} history={this.props.history}/>
            <div
              className="page-header"
              style={{
                backgroundImage: "url(" + require("../assets/img/pizza-margarita-fast-food-pizza-with-vegetables-pizza-without-meat.jpg") + ")"
              }}
            >
            <div className="filter" />
            <FormBusiness/>
            <ViandasYaFooter/>
            </div>
          </>
        );
    }
}

export default LoadBusinessPage;