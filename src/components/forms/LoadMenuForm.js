import React, { Component } from 'react';
import {
  Button,
  Row,
  Col,
  Form, FormGroup, Label, Input
} from 'reactstrap';
import API from "../../utils/api";

class LoadMenuForm extends Component {

  constructor(props) {
    super(props);
    this.postMenu = this.postMenu.bind(this); 
    this.clearState = this.clearState.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }
  
  clearState(){
    // this.state = {}
  }


  postMenu(){
    const { match: { params } } = this.props.props;

    API.post(`/menu/business/${params.id}`,this.state)
    .then(({ data: menu }) => {
      alert("El menu se cargo correctamente");
      this.clearState();    
      },()=>{ alert("No se realizo la carga correctamente vuelva a intentarlo"); this.clearState()} );
  }

  handleSubmit = event => {
    event.preventDefault();
    this.postMenu();  

    console.log(this.state);

  }

  render() {
    return (
      <>
        <div className="col-8 col-sm-8 col-lg-6 col-xl-4 col-md-6 business-load-form background-form  ">
          <h2 className="text-center mt-3 font-weight-bold">Carga tu menu</h2>  
          <Form className="mt-2" onSubmit={this.handleSubmit} autoComplete="none">
            <FormGroup>
              <Label for="name">Nombre de menu</Label>
              <Input
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                placeholder="name"
                onChange={this.handleChange} />
            </FormGroup>
            <Row>
              <Col md={8}>
                <FormGroup>
                  <Label for="categoria">Categoria</Label>
                  <Input type="select"
                         name="categoria"
                         id="categoria"
                         onChange={this.handleChange} >
                    <option>HAMBURGUESAS</option>
                    <option>CERVEZA</option>
                    <option>PIZZA</option>
                    <option>SUSHI</option>
                    <option>EMPANADAS</option>
                    <option>GREEN</option>
                    <option>VEGANO</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="price">Precio</Label>
                  <Input type="number"
                    name="price"
                    id="price"
                    onChange={this.handleChange} />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="description">Descripcion</Label>
              <Input type="textarea"
                name="description"
                id="description"
                onChange={this.handleChange} />
            </FormGroup>
            <div className="row">
            <FormGroup className="col-6">
              <Label for="startDate">Fech de inicio</Label>
              <Input
                type="date"
                name="startDate"
                id="startDate"
                onChange={this.handleChange} />
            </FormGroup>
            <FormGroup className="col-6">
              <Label for="dueDate">Fecha de finalizacion</Label>
              <Input type="date"
                name="dueDate"
                id="dueDate"
                onChange={this.handleChange} />
            </FormGroup>
            </div>
            
            <Col>
              <FormGroup className="row pt-3">
                  <Label className="pl-0 col-md-3" for="minimumQuantity">Cantidad minima</Label>
                  <Input className="col-md-3" type="number"
                    name="minimumQuantity"
                    id="minimumQuantity"
                    onChange={this.handleChange} />
                  <Label className="col-md-3 " for="minimumQuantityPrice">Precio</Label>
                  <Input className="col-md-3" type="number"
                    name="minimumQuantityPrice"
                    id="minimumQuantityPrice"
                    onChange={this.handleChange} />
              </FormGroup>
              <FormGroup className="row">
                  <Label className="pl-0 col-md-3" for="minimumQuantityTwo ">cantidad minima 2</Label>
                  <Input className="col-md-3" type="number"
                    name="minimumQuantityTwo "
                    id="minimumQuantityTwo "
                    onChange={this.handleChange} />
                  <Label className="col-md-3" for="minimumQuantityPriceTwo">Precio</Label>
                  <Input className="col-md-3" type="number"
                    name="minimumQuantityPriceTwo"
                    id="minimumQuantityPriceTwo"
                    onChange={this.handleChange} />
              </FormGroup>
              <FormGroup className="row">
                  <Label className="pl-0 col-md-9" for="maximumAmountSalesPerDay ">Cantidad maxima de ventas diarias</Label>
                  <Input className="col-md-3" type="number"
                    name="maximumAmountSalesPerDay "
                    id="maximumAmountSalesPerDay "
                    onChange={this.handleChange} />
              </FormGroup>
            </Col>

            <Button className="btn-danger mt-3 mb-3" >Enviar</Button>
          </Form>
        </div>
      </>
    );
  }
}

export default LoadMenuForm;