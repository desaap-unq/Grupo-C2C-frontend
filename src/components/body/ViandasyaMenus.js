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
                                <Button key={menu.id} id={menu.id} onClick={this.props.addToCart}>Comprar</Button>
                            </CardFooter>
                        </Card >
                    })}
                    {/* {this.props.menus.map(menu => {
                        return <Card className="col-md-6">
                            <CardTitle>{menu.name}</CardTitle>
                            <CardBody className="pb-0">
                                <p>{menu.description}</p>
                                <p className="bold">$ {menu.price}</p>
                                <p>tiempo entrega: {menu.averageDeliveryTime}</p>
                            </CardBody>
                            <CardFooter>
                                <Button key={menu.id + 1}  id={menu.id + 1} onClick={this.props.addToCart}>Comprar</Button>
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
                                <Button key={menu.id +2}  id={menu.id + 2} onClick={this.props.addToCart}>Comprar</Button>
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
                                <Button  key={menu.id + 3}  id={menu.id + 3} onClick={this.props.addToCart}>Comprar</Button>
                            </CardFooter>
                        </Card >
                    })} */}

                </Row>
            </div>
        );
    }
} 