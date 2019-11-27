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
                    <h4 className="pl-3 mt-0" >Tu Vianda </h4>
                    
                </div>
                <ItemMenu/>    
                <ItemMenu/>    
                <ItemMenu/>    
                <ItemMenu/>
                <div className="row pt-4">
                    <h4 className="pl-3 mt-0 col-8 text-center" >TOTAL </h4>
                    <h4 className="pl-3 mt-0 col-4" >$680 </h4>
                    
                </div> 
                <div className="row">
                    <Button className="offset-2 col-8 mb-3 mt-4 btn-danger">Continuar</Button>   
                </div>
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