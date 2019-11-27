
import React, { Component } from "react";
import { Button, Badge } from "reactstrap";


export class ItemMenu extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="row d-flex align-items-center">

                <spam className="col-8">Hamburguesa con quesossdsdfsdfsdfsddfsdf</spam>
                
                
                <div className="col-2 pl-0">
                    <Badge className="mb-0 " color="secondary">$240</Badge>

                </div>
                <div className="col-2">
                    <Button className="cancel-cart"><i className="nc-icon nc-simple-remove"></i></Button>

                </div>
            </div>
        );
    }
}