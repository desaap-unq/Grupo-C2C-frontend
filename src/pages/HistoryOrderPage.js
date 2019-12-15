import React, { Component } from "react";
import API from "../utils/api";
import TemplateWithHeaderPage from "./TemplateWithHeaderPage.js";
import ClientTableOrderList from "../components/ClientTableOrderList.js";
import ClientHeader from "../components/Headers/ClientHeader";

export default class HistoryOrderPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            orders: [{
                id: 1,
                client: {
                    id: 1,
                    name: "Pomelo",
                    surname: "Rock",
                    email: "prock@user.com",
                    phone: 15156205,
                    locality: "LaFuente 2123",
                    address: "Soldati",
                    wallet: {
                        id: 1,
                        balance: 0.0
                    },
                    balance: 0.0
                },
                business: {
                    id: 1,
                    name: "Mc Donald's",
                    locality: "Quilmes",
                    phone: 15152659,
                    address: "Peatonal Rivadavia 112",
                    location: "gmaps coord",
                    description: "Vendemos las mejores hamburguesas",
                    link: "website",
                    email: "hamburguer@mcdonald.com",
                    schedule: "[08-23]",
                    days: "LunADom",
                    delivery: "distance min - delivery",
                    wallet: {
                        id: 2,
                        balance: 0.0
                    },
                    balance: 0.0
                },
                orderItems: [
                    {
                        id: 1,
                        quantity: 4,
                        menu: {
                            id: 1,
                            name: "Doble Cuarto",
                            description: "Doble carne, doble queso",
                            category: [
                                "HAMBURGUESAS"
                            ],
                            deliveryCost: 0.0,
                            startDate: "2019-12-13",
                            dueDate: "2019-12-13",
                            deliveryTime: "21:20:00",
                            averageDeliveryTime: "21:20:00",
                            price: 250.0,
                            minimumQuantity: 1,
                            minimumQuantityPrice: 10.0,
                            minimumQuantityTwo: 2,
                            minimumQuantityPriceTwo: 20.0,
                            maximumAmountSalesPerDay: 20,
                            active: true,
                        },
                        price: 80.0
                    }
                ],
                dispatchType: "DELIVERY",
                orderDate: "2019-12-14",
                dispatchDate: "2019-10-27",
                state: null,
                dispatchTime: null,
                deliveryTime: "17:00:00",
                score: 0
            },{
                id: 1,
                client: {
                    id: 1,
                    name: "Pomelo",
                    surname: "Rock",
                    email: "prock@user.com",
                    phone: 15156205,
                    locality: "LaFuente 2123",
                    address: "Soldati",
                    wallet: {
                        id: 1,
                        balance: 0.0
                    },
                    balance: 0.0
                },
                business: {
                    id: 1,
                    name: "Mc Donald's",
                    locality: "Quilmes",
                    phone: 15152659,
                    address: "Peatonal Rivadavia 112",
                    location: "gmaps coord",
                    description: "Vendemos las mejores hamburguesas",
                    link: "website",
                    email: "hamburguer@mcdonald.com",
                    schedule: "[08-23]",
                    days: "LunADom",
                    delivery: "distance min - delivery",
                    wallet: {
                        id: 2,
                        balance: 0.0
                    },
                    balance: 0.0
                },
                orderItems: [
                    {
                        id: 1,
                        quantity: 4,
                        menu: {
                            id: 1,
                            name: "Doble Cuarto",
                            description: "Doble carne, doble queso",
                            category: [
                                "HAMBURGUESAS"
                            ],
                            deliveryCost: 0.0,
                            startDate: "2019-12-13",
                            dueDate: "2019-12-13",
                            deliveryTime: "21:20:00",
                            averageDeliveryTime: "21:20:00",
                            price: 250.0,
                            minimumQuantity: 1,
                            minimumQuantityPrice: 10.0,
                            minimumQuantityTwo: 2,
                            minimumQuantityPriceTwo: 20.0,
                            maximumAmountSalesPerDay: 20,
                            active: true,
                        },
                        price: 80.0
                    }
                ],
                dispatchType: "DELIVERY",
                orderDate: "2019-12-14",
                dispatchDate: "2019-10-27",
                state: null,
                dispatchTime: null,
                deliveryTime: "17:00:00",
                score: 0
            },
            {
                id: 1,
                client: {
                    id: 1,
                    name: "Pomelo",
                    surname: "Rock",
                    email: "prock@user.com",
                    phone: 15156205,
                    locality: "LaFuente 2123",
                    address: "Soldati",
                    wallet: {
                        id: 1,
                        balance: 0.0
                    },
                    balance: 0.0
                },
                business: {
                    id: 1,
                    name: "Mc Donald's",
                    locality: "Quilmes",
                    phone: 15152659,
                    address: "Peatonal Rivadavia 112",
                    location: "gmaps coord",
                    description: "Vendemos las mejores hamburguesas",
                    link: "website",
                    email: "hamburguer@mcdonald.com",
                    schedule: "[08-23]",
                    days: "LunADom",
                    delivery: "distance min - delivery",
                    wallet: {
                        id: 2,
                        balance: 0.0
                    },
                    balance: 0.0
                },
                orderItems: [
                    {
                        id: 1,
                        quantity: 4,
                        menu: {
                            id: 1,
                            name: "Doble Cuarto",
                            description: "Doble carne, doble queso",
                            category: [
                                "HAMBURGUESAS"
                            ],
                            deliveryCost: 0.0,
                            startDate: "2019-12-13",
                            dueDate: "2019-12-13",
                            deliveryTime: "21:20:00",
                            averageDeliveryTime: "21:20:00",
                            price: 250.0,
                            minimumQuantity: 1,
                            minimumQuantityPrice: 10.0,
                            minimumQuantityTwo: 2,
                            minimumQuantityPriceTwo: 20.0,
                            maximumAmountSalesPerDay: 20,
                            active: true,
                        },
                        price: 80.0
                    }
                ],
                dispatchType: "DELIVERY",
                orderDate: "2019-12-14",
                dispatchDate: "2019-10-27",
                state: null,
                dispatchTime: null,
                deliveryTime: "17:00:00",
                score: 0
            }]};
    }

    
    componentDidMount() {
        this.getOrders();
        this.setState({orders:[{
            id: 1,
            client: {
                id: 1,
                name: "Pomelo",
                surname: "Rock",
                email: "prock@user.com",
                phone: 15156205,
                locality: "LaFuente 2123",
                address: "Soldati",
                wallet: {
                    id: 1,
                    balance: 0.0
                },
                balance: 0.0
            },
            business: {
                id: 1,
                name: "Mc Donald's",
                locality: "Quilmes",
                phone: 15152659,
                address: "Peatonal Rivadavia 112",
                location: "gmaps coord",
                description: "Vendemos las mejores hamburguesas",
                link: "website",
                email: "hamburguer@mcdonald.com",
                schedule: "[08-23]",
                days: "LunADom",
                delivery: "distance min - delivery",
                wallet: {
                    id: 2,
                    balance: 0.0
                },
                balance: 0.0
            },
            orderItems: [
                {
                    id: 1,
                    quantity: 4,
                    menu: {
                        id: 1,
                        name: "Doble Cuarto",
                        description: "Doble carne, doble queso",
                        category: [
                            "HAMBURGUESAS"
                        ],
                        deliveryCost: 0.0,
                        startDate: "2019-12-13",
                        dueDate: "2019-12-13",
                        deliveryTime: "21:20:00",
                        averageDeliveryTime: "21:20:00",
                        price: 250.0,
                        minimumQuantity: 1,
                        minimumQuantityPrice: 10.0,
                        minimumQuantityTwo: 2,
                        minimumQuantityPriceTwo: 20.0,
                        maximumAmountSalesPerDay: 20,
                        active: true,
                    },
                    price: 80.0
                }
            ],
            dispatchType: "DELIVERY",
            orderDate: "2019-12-14",
            dispatchDate: "2019-10-27",
            state: null,
            dispatchTime: null,
            deliveryTime: "17:00:00",
            score: 0
        },{
            id: 1,
            client: {
                id: 1,
                name: "Pomelo",
                surname: "Rock",
                email: "prock@user.com",
                phone: 15156205,
                locality: "LaFuente 2123",
                address: "Soldati",
                wallet: {
                    id: 1,
                    balance: 0.0
                },
                balance: 0.0
            },
            business: {
                id: 1,
                name: "Mc Donald's",
                locality: "Quilmes",
                phone: 15152659,
                address: "Peatonal Rivadavia 112",
                location: "gmaps coord",
                description: "Vendemos las mejores hamburguesas",
                link: "website",
                email: "hamburguer@mcdonald.com",
                schedule: "[08-23]",
                days: "LunADom",
                delivery: "distance min - delivery",
                wallet: {
                    id: 2,
                    balance: 0.0
                },
                balance: 0.0
            },
            orderItems: [
                {
                    id: 1,
                    quantity: 4,
                    menu: {
                        id: 1,
                        name: "Doble Cuarto",
                        description: "Doble carne, doble queso",
                        category: [
                            "HAMBURGUESAS"
                        ],
                        deliveryCost: 0.0,
                        startDate: "2019-12-13",
                        dueDate: "2019-12-13",
                        deliveryTime: "21:20:00",
                        averageDeliveryTime: "21:20:00",
                        price: 250.0,
                        minimumQuantity: 1,
                        minimumQuantityPrice: 10.0,
                        minimumQuantityTwo: 2,
                        minimumQuantityPriceTwo: 20.0,
                        maximumAmountSalesPerDay: 20,
                        active: true,
                    },
                    price: 80.0
                }
            ],
            dispatchType: "DELIVERY",
            orderDate: "2019-12-14",
            dispatchDate: "2019-10-27",
            state: null,
            dispatchTime: null,
            deliveryTime: "17:00:00",
            score: 0
        },
        {
            id: 1,
            client: {
                id: 1,
                name: "Pomelo",
                surname: "Rock",
                email: "prock@user.com",
                phone: 15156205,
                locality: "LaFuente 2123",
                address: "Soldati",
                wallet: {
                    id: 1,
                    balance: 0.0
                },
                balance: 0.0
            },
            business: {
                id: 1,
                name: "Mc Donald's",
                locality: "Quilmes",
                phone: 15152659,
                address: "Peatonal Rivadavia 112",
                location: "gmaps coord",
                description: "Vendemos las mejores hamburguesas",
                link: "website",
                email: "hamburguer@mcdonald.com",
                schedule: "[08-23]",
                days: "LunADom",
                delivery: "distance min - delivery",
                wallet: {
                    id: 2,
                    balance: 0.0
                },
                balance: 0.0
            },
            orderItems: [
                {
                    id: 1,
                    quantity: 4,
                    menu: {
                        id: 1,
                        name: "Doble Cuarto",
                        description: "Doble carne, doble queso",
                        category: [
                            "HAMBURGUESAS"
                        ],
                        deliveryCost: 0.0,
                        startDate: "2019-12-13",
                        dueDate: "2019-12-13",
                        deliveryTime: "21:20:00",
                        averageDeliveryTime: "21:20:00",
                        price: 250.0,
                        minimumQuantity: 1,
                        minimumQuantityPrice: 10.0,
                        minimumQuantityTwo: 2,
                        minimumQuantityPriceTwo: 20.0,
                        maximumAmountSalesPerDay: 20,
                        active: true,
                    },
                    price: 80.0
                }
            ],
            dispatchType: "DELIVERY",
            orderDate: "2019-12-14",
            dispatchDate: "2019-10-27",
            state: null,
            dispatchTime: null,
            deliveryTime: "17:00:00",
            score: 0
        }]});
    }

    getOrders() {
        const { match: { params } } = this.props;
        API.get(`order/${params.id}`)
            .then(({ data: _orders }) => {

                this.setState({ orders: _orders });
            });
    }


    render() {
        return (
            <div>
                <TemplateWithHeaderPage>
                    
                    <ClientHeader client={this.state.orders[0].client}/>

                    <ClientTableOrderList orders={this.state.orders}/>

                </TemplateWithHeaderPage>
                


            </div>
        );
    }
}












