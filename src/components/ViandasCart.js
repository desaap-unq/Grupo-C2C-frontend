import React, { Component } from "react";
import { Card, CardTitle,ListGroup,ListGroupItem, CardBody, CardFooter, Button } from "reactstrap";
import {ItemMenu} from "../components/ItemMenu";

export default class ViandasCart extends Component {

    super(props) {

    }

    render() {
        return (
            <div className="viandas-cart col-md-12">
                <div className="header-cart row  justify-content-center mt-2 mb-2">
                    <h4 className="pl-3 mt-0 " >Tu Vianda </h4>
                    
                </div>
                {/* <ListGroup >
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Morbi leo risus</ListGroupItem>
                    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                </ListGroup> */}
                <ItemMenu/>    
            </div>




            // <Card className="col-md-12">
            //     <CardTitle>Compra</CardTitle>
            //     <CardBody className="pb-0">
            //         <p>Pizza</p>
            //         <p className="bold">$260</p>
            //         <p>tiempo entrega:</p>
            //     </CardBody>
            //     <CardFooter>
            //         <Button>Comprar</Button>
            //     </CardFooter>
            // </Card >
        );
    }
}