import React, { Component } from "react";
import {Spinner, Row, Col } from "reactstrap";


export class BusinessHeader extends Component {

    constructor(props) {
        super();
    }

    render() {
        console.log(this.props);
        return (
            <div>
                {this.props.business === undefined ? (<Spinner animation="border" role="status">
  <span className="sr-only">Loading...</span>
</Spinner>):(<Row>
                    <Col md="2" className="pr-0 pl-5">
                        <img
                            alt="..."
                            className="creative-tim-logo"
                            src={require("../../assets/img/mcDonalsLogo.png")}
                        />
                    </Col>
                    <Col md="3" className="pl-1">
                        <h3>{this.props.business.name}</h3>
                        <h4>{this.props.business.locality}</h4>
                        <h4>{this.props.business.address}</h4>
                        <h4>{this.props.business.link}</h4>
                    </Col>
                    <Col md="7"className="pt-3 mt-4 pl-1">
                        <h4>Tel: {this.props.business.phone}</h4>
                        <h4>Abierto: {this.props.business.days}</h4>
                        <h4>{this.props.business.description}</h4>
                    </Col>
                </Row>)}
                
            </div>
        );
    }

}

