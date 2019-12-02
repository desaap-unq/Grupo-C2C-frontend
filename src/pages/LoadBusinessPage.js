import React, { Component } from "react";
import ViandasNavBar from "../components/Navbars/ViandasNavBar.js";
import FormBusiness from "../components/body/FormBusiness";
// import { Button, Form, Card, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';

class LoadBusinessPage extends Component {

    render() {
        return (
          <>
            <ViandasNavBar />
            <div
              className="page-header"
              style={{
                backgroundImage: "url(" + require("../assets/img/pizza-margarita-fast-food-pizza-with-vegetables-pizza-without-meat.jpg") + ")"
              }}
            >
            <FormBusiness/>
            </div>
          </>
        );
    }
}

export default LoadBusinessPage;