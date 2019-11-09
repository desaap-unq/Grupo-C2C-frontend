import React, { Component } from 'react';

import classnames from "classnames";

import {
  Button,
  Collapse,
  NavbarBrand,
  InputGroup,
  Col,
  InputGroupAddon,
  Input,
  InputGroupText,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

import {withRouter} from "react-router-dom";



class SearchBars extends Component {
  constructor(props){
    super(props);
    this.state={food:""};
    this.updateInput =this.updateInput.bind(this);
    this.redirecSearch =this.redirecSearch.bind(this);
  }
  
  updateInput(event){
    this.setState({food: event.target.value});
  }

  redirecSearch(){
    this.props.history.push("/search/" + this.state.food);
  }

  render() {
    return (
      <Container>
        <InputGroup>
          <Col className="md=12 mt-4">
            <InputGroupAddon addonType="append">
              <Input placeholder="Que comemos!" type="text" value={this.state.food} onChange={this.updateInput} ></Input>
              <InputGroupText>
                <button className="glyphicon glyphicon-search" onClick={this.redirecSearch}>
                  <i aria-hidden={true} className="fa fa-search" />
                </button>
              </InputGroupText>
            </InputGroupAddon>
          </Col>
        </InputGroup>
      </Container >
    );
  }

}

export default withRouter(SearchBars);