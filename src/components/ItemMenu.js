
import React, { Component } from "react";
import { Button, Badge } from "reactstrap";


export class ItemMenu extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="row d-flex align-items-center">
                
                <div className="col-2">
                    <Badge className="mb-0 " color="secondary">{this.props.orderItem.quantity}</Badge>

                </div>
                <div className="col-6">
                    <p>{this.props.orderItem.menu.name}</p>

                </div>
                
                <div className="col-2 pl-0">
                    <Badge className="mb-0 " color="secondary">${this.props.orderItem.menu.price}</Badge>

                </div>
                <div className="col-2">
                    <Button id={this.props.orderItem.menu.id} className="cancel-cart" onClick={this.props.removeItem} ><i className="nc-icon nc-simple-remove"></i></Button>

                </div>
            </div>
        );
    }
}