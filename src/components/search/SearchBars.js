import React, { Component } from 'react';

import {
  InputGroup,
  Col,
  InputGroupAddon,
  Input,
  Button,
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
          <Col className="offset-1 col-md-10 mt-4">
            <InputGroupAddon addonType="append">
              <Input className="form-control" placeholder="Que comemos!" type="text" value={this.state.food} onChange={this.updateInput} ></Input>
              <Button className="btn btn-danger" onClick={this.redirecSearch}>
                Buscar
              </Button>
            </InputGroupAddon>
          </Col>
        </InputGroup>
      </Container >
    );
  }

}

export default withRouter(SearchBars);