
import React, { Component } from "react";
import { Button, Badge } from "reactstrap";


export class ItemMenu extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.orderItem.menu.name);
    }
    render() {
        return (
            <div className="row d-flex align-items-center">

                <p className="col-8">{this.props.orderItem.menu.name}</p>
                
                <div className="col-2 pl-0">
                    <Badge className="mb-0 " color="secondary">$240</Badge>

                </div>
                <div className="col-2">
                    <Button id={this.props.orderItem.menu.id} className="cancel-cart" onClick={this.props.removeItem}><i className="nc-icon nc-simple-remove"></i></Button>

                </div>
            </div>
        );
    }
}