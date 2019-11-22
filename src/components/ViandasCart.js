import React,{ Component } from "react";
import { Card ,CardTitle,CardBody,CardFooter,Button } from "reactstrap";

export default class ViandasCart extends Component {

    super(props) {

    }

    render() {
        return (
            <Card className="col-md-12 fixed-top">
                <CardTitle>Compra</CardTitle>
                <CardBody className="pb-0">
                    <p>Pizza</p>
                    <p className="bold">$260</p>
                    <p>tiempo entrega:</p>
                </CardBody>
                <CardFooter>
                    <Button>Comprar</Button>
                </CardFooter>
            </Card >
        );
    }
}