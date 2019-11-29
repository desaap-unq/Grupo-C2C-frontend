import React, { Component } from 'react';
import { 
  Button,
  Row,
  Col, 
  CustomInput,
  Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';
import API from "../../utils/api";

const SERVICE_URL = `business`;

class FormBusiness extends Component {

  state = { 
    name: ''
  }

  handleChange = event => {
    this.setState({ 
      name: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const business = {
      name: this.state.name
    };

    API.post(`${SERVICE_URL}/add`, { business })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="name">Business Name</Label>
            <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="name"
                    onChange={this.handleChange}/>
            <FormFeedback tooltip>You will not be able to see this</FormFeedback>
            <FormText>Example help text that remains unchanged.</FormText>
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="locality">Locality</Label>
                <Input type="text" name="locality" id="locality"/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="address">Address</Label>
                <Input type="text" name="address" id="address"/>
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input type="textarea" name="description" id="description" />
          </FormGroup>
          <FormGroup>
            <Label for="link">Web Site</Label>
            <Input
              type="url"
              name="link"
              id="link"
              placeholder="web site"
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="pepe@know.com"
            />
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="zip">Zip</Label>
                <Input type="number" name="zip" id="zip"/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="phone">Number</Label>
                <Input
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="12345678"
                />
              </FormGroup>
            </Col>
          </Row>
           <FormGroup>
            <Label for="days">Days</Label>
            <div>
              <CustomInput type="radio" id="days" name="days" label="LunAVier" />
              <CustomInput type="radio" id="days" name="days" label="LunADom" />
            </div>  
          </FormGroup>
          <h3>
            funcion Sliders() | Gmaps
          </h3>
          <FormGroup row>
            <Label for="exampleFile" sm={2}>File</Label>
            <Col sm={10}>
              <Input type="file" name="file" id="exampleFile" />
              <FormText color="muted">
                This is some placeholder block-level help text for the above input.
                It's a bit lighter and easily wraps to a new line.
              </FormText>
            </Col>
          </FormGroup>

          <Button>Submit</Button>
        </Form>
      </>
    );
  }
}

export default FormBusiness;