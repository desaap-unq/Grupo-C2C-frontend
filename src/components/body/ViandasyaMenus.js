import React, { Component } from "react"

import {Row, Card, Button, CardBody,CardFooter,CardTitle} from "reactstrap";


export default class ViandasyaMenu extends Component {
    constructor(props){
        super(props) 

    }

    render() {
        return (
            <div className="ml-auto mr-auto text-center col-md-12">

                <Row>
                    {this.props.menus.map(menu => {
                        return <Card className="col-md-6">
                            <CardTitle>{menu.name}</CardTitle>
                            <CardBody className="pb-0">
                                <p>{menu.description}</p>
                                <p className="bold">$ {menu.price}</p>
                                <p>tiempo entrega: {menu.averageDeliveryTime}</p>
                            </CardBody>
                            <CardFooter>
                                <Button>Comprar</Button>
                            </CardFooter>
                        </Card >
                    })}
                    {this.props.menus.map(menu => {
                        return <Card className="col-md-6">
                            <CardTitle>{menu.name}</CardTitle>
                            <CardBody className="pb-0">
                                <p>{menu.description}</p>
                                <p className="bold">$ {menu.price}</p>
                                <p>tiempo entrega: {menu.averageDeliveryTime}</p>
                            </CardBody>
                            <CardFooter>
                                <Button>Comprar</Button>
                            </CardFooter>
                        </Card >
                    })}
                    {this.props.menus.map(menu => {
                        return <Card className="col-md-6">
                            <CardTitle>{menu.name}</CardTitle>
                            <CardBody className="pb-0">
                                <p>{menu.description}</p>
                                <p className="bold">$ {menu.price}</p>
                                <p>tiempo entrega: {menu.averageDeliveryTime}</p>
                            </CardBody>
                            <CardFooter>
                                <Button>Comprar</Button>
                            </CardFooter>
                        </Card >
                    })}
                    {this.props.menus.map(menu => {
                        return <Card className="col-md-6">
                            <CardTitle>{menu.name}</CardTitle>
                            <CardBody className="pb-0">
                                <p>{menu.description}</p>
                                <p className="bold">$ {menu.price}</p>
                                <p>tiempo entrega: {menu.averageDeliveryTime}</p>
                            </CardBody>
                            <CardFooter>
                                <Button>Comprar</Button>
                            </CardFooter>
                        </Card >
                    })}

                </Row>
            </div>
        );
    }
} 