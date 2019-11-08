import React, { Component } from 'react';
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  InputGroup,
  Row,
  InputGroupAddon,
  Input,
  InputGroupText,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";
import { thisTypeAnnotation } from "@babel/types";
import {withRouter} from "react-router-dom";
// import {browserHistory} from "react-router";



class SearchBars extends Component {
  constructor(props){
    super(props);
    this.state={food:""};
    this.updateInput =this.updateInput.bind(this);
    this.logFood =this.logFood.bind(this);
  }
  
  updateInput(event){
    this.setState({food: event.target.value});
  }

  logFood(){
    // browserHistory.push("/indexExample");
    this.props.history.push("/indexExample");
    
    console.log(this.state.food);
  }

  render() {
    return (
      <Container>
        <InputGroup>
          <Row>
            <InputGroupAddon addonType="append">
              <Input placeholder="Que comemos!" type="text" value={this.state.food} onChange={this.updateInput} ></Input>
              <InputGroupText>
                <button className="glyphicon glyphicon-search" onClick={this.logFood}>
                  <i aria-hidden={true} className="fa fa-search" />
                </button>
              </InputGroupText>
            </InputGroupAddon>
          </Row>
        </InputGroup>
      </Container >
    );
  }

}

export default withRouter(SearchBars);