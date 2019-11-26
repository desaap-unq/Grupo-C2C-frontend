
import React, { Component } from "react";
import {Button,Badge } from "reactstrap";


export class ItemMenu extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="row  d-flex align-items-center justify-content-between border-item">
                <spam className="col-10">Hamburguesa con quesossdsdfsdfsdfsddfsdf<Badge color="secondary">$240</Badge></spam>
                <Button className=" cancel-cart mr-3"><i className="nc-icon nc-simple-remove"></i></Button>
            </div>
        );
    }
}