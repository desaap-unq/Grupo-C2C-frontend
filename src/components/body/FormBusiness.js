import React, { Component } from 'react';
import {
  Button,
  Row,
  Col,
  CustomInput,
  Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
import API from "../../utils/api";
import BusinessDto from "../../utils/api";

const SERVICE_URL = `business`;

class FormBusiness extends Component {

  constructor(props) {
    super(props);
    this.handleChangeFile = this.handleChangeFile.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleChangeFile(selectorFiles) {
    this.toBase64(selectorFiles[0]).then((response, error) => {
      // data:image/png;base64, iVBORw0KGgoAAAAN | go split business.js & headerBusiness.js
      this.setState({ file: response });
      this.setState({ file: response }, console.log(this.state));
    });
  }

  toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

  handleSubmit = event => {
    event.preventDefault();

    const business = new BusinessDto();
    business.name = this.state.name;
    business.phone = this.state.phone;
    business.logo = this.state.file;
    business.locality = this.state.locality;
    business.address = this.state.address;
    business.days = this.state.days;
    business.description = this.state.description;
    business.link = this.state.link;

    API.post(`${SERVICE_URL}/add`, business)
      .then(res => {
        console.log(res);
        alert("El negocio se cargo correctamente");
      })
  }

  render() {
    return (
      <>
        <div className="col-8 col-sm-8 col-lg-6 col-xl-4 col-md-6 business-load-form background-form  ">
          <h2 className="text-center mt-3 font-weight-bold">Carga tu negocio</h2>  
          <Form className="mt-2" onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="name">Nombre de tu negocio</Label>
              <Input
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                placeholder="name"
                onChange={this.handleChange} />
            </FormGroup>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="locality">Locality</Label>
                  <Input type="text"
                    name="locality"
                    id="locality"
                    onChange={this.handleChange} />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="address">Address</Label>
                  <Input type="text"
                    name="address"
                    id="address"
                    onChange={this.handleChange} />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input type="textarea"
                name="description"
                id="description"
                onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="link">Web Site</Label>
              <Input
                type="url"
                name="link"
                id="link"
                placeholder="web site"
                onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email"
                name="email"
                id="email"
                placeholder="pepe@know.com"
                onChange={this.handleChange} />
            </FormGroup>
            <Row form>
              <Col md={2}>
                <FormGroup>
                  <Label for="zip">Area</Label>
                  <Input type="number" name="zip" id="zip" />
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
                    onChange={this.handleChange} />
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
                  onChange={this.handleChange} />
                <CustomInput type="radio"
                  id="days"
                  name="days"
                  label="LunADom"
                  value="LunADom"
                  onClick={this.handleChange} />
              </div>
            </FormGroup>
            
            <FormGroup>
              <div className="col pl-0">
                <Label for="exampleFile">Logo</Label>
                <input type="file"
                  name="file"
                  id="file"
                  onChange={(e) =>
                    this.handleChangeFile(e.target.files)} />
                
                <FormText >
                  carga el logo de tu Negocio.
              </FormText>
              
              </div>
            
            </FormGroup>

            <Button className="btn-danger mb-3">Enviar</Button>
          </Form>
        </div>
      </>
    );
  }
}

export default FormBusiness;