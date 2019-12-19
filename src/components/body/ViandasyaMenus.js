import React, { Component } from "react"

import {Row, Card, Button, CardBody,CardFooter,CardTitle} from "reactstrap";

import { FormattedHTMLMessage } from 'react-intl';

export default class ViandasyaMenu extends Component {

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
                                <p>
                                <FormattedHTMLMessage id="app.deliveryDate"
                                    defaultMessage="tiempo entrega:"
                                />
                                    {menu.averageDeliveryTime}</p>
                            </CardBody>
                            <CardFooter>
                                <Button key={menu.id} id={menu.id} onClick={this.props.addToCart}>
                                <FormattedHTMLMessage id="app.buy"
                                    defaultMessage="Comprar"
                                />
                                </Button>
                            </CardFooter>
                        </Card >
                    })}

                </Row>
            </div>
        );
    }
} 