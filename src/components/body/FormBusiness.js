import React, { Component } from 'react';
import { 
  Button,
  Row,
  Col, 
  CustomInput,
  Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';
import API from "../../utils/api";
import BusinessDto from "../../utils/api";

const SERVICE_URL = `business`;

class FormBusiness extends Component {

  state = { 
    name: "",
    phone: 1234,
    logo: "",
    locality: "",
    address: "",
    days: "",
    description: "",
    link: "website"
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleChangeFile(selectorFiles: FileList){
      console.log(selectorFiles[0]);
  }

  handleSubmit = event => {
    event.preventDefault();

    const business = new BusinessDto();
    business.name = this.state.name;
    business.phone = this.state.phone;
    business.logo = this.state.logo;
    business.locality = this.state.locality;
    business.address = this.state.address;
    business.days = this.state.days;
    business.description = this.state.description;
    business.link = this.state.link;

    API.post(`${SERVICE_URL}/add`, business )
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
                <Input type="text" 
                       name="locality" 
                       id="locality"
                       onChange={this.handleChange}/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="address">Address</Label>
                <Input type="text" 
                       name="address" 
                       id="address"
                       onChange={this.handleChange}/>
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input type="textarea" 
                   name="description" 
                   id="description" 
                   onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="link">Web Site</Label>
            <Input
              type="url"
              name="link"
              id="link"
              placeholder="web site"
              onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email"
                   name="email"
                   id="email"
                   placeholder="pepe@know.com"
                   onChange={this.handleChange}/>
          </FormGroup>
          <Row form>
            <Col md={2}>
              <FormGroup>
                <Label for="zip">Area</Label>
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
                  onChange={this.handleChange}/>
              </FormGroup>
            </Col>
          </Row>
           <FormGroup>
            <Label for="days">Days</Label>
            <div>
              <CustomInput type="radio" 
                           id="days" 
                           name="days" 
                           label="LunAVier"
                           value="LunAVier"
                           onChange={this.handleChange}/>
              <CustomInput type="radio" 
                           id="days" 
                           name="days" 
                           label="LunADom"
                           value="LunADom"
                           onClick={this.handleChange}/>
            </div>  
          </FormGroup>
          <h3>
            funcion Sliders() | Gmaps
          </h3>
          <FormGroup row>
            <Label for="exampleFile" sm={2}>File</Label>
            <Col sm={10}>
              <Input type="file" 
                     name="file" 
                     id="file"
                     onChange={(e) => 
                             this.handleChangeFile(e.target.files)}/>
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