import React, { Component } from "react";
import {Spinner, Row, Col } from "reactstrap";
import { useAuth0 } from "../../contexts/auth0-context";


export default class ClientHeader extends Component {
    
    constructor(props) {
        super(props);
    }

    getPhoto = ()=>{useAuth0().user()}
    
    render() {
        // console.log(useAuth0());
        console.log(this.props);
        return (
            <div>
                {this.props.client === undefined ? 
                (<Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>)
                :
                (<Row>
                    <Col md="2" className="pr-0 pl-4">
                        <img
                            alt="..."
                            className="creative-tim-logo"
                            src={require("../../assets/img/faces/erik-lucatero-2.jpg")}
                            // src={this.props.client.avatar}
                        />
                    </Col>
                    <Col md="3" className="pl-1">
                        <h3>{this.props.client.name}</h3>
                        <h4>{this.props.client.surname}</h4>
                        <h4>{this.props.client.locality}</h4>
                        <h4>{this.props.client.address}</h4>
                    </Col>
                    <Col md="7"className="pt-3 mt-4 pl-1">
                        <h4>Tel: {this.props.client.phone}</h4>
                        <h4>Email: {this.props.client.email}</h4>
                        <h4>Saldo: ${this.props.client.wallet.balance}</h4>
                    </Col>
                </Row>)}
                
            </div>
        );
    }

}

