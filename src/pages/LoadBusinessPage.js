import React, { Component } from "react";
import ViandasNavBar from "../components/Navbars/ViandasNavBar.js";
import { Button, Form,Card, FormGroup, Label, Input, FormText } from 'reactstrap';

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
            <div className="">
              <Form  className = "background-form">
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="examplePassword" className="mr-sm-2">Password</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
                </FormGroup>
                <Button>Submit</Button>
              </Form>
            </div>
            
            </div>
          </>
        );
    }
}

export default LoadBusinessPage;