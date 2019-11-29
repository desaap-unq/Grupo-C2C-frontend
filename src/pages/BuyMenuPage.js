import React, { Component } from "react";
import ViandasNavBar from "../components/Navbars/ViandasNavBar.js";
import ViandasyaHeader from "../components/Headers/ViandasyaHeader.js";
import ViandasyaMenus from "../components/body/ViandasyaMenus.js";
import axios from 'axios';
import ViandasCart from "../components/ViandasCart.js";
const API_URL = 'http://localhost:8080';


export default class BuyMenuPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            business: {},
            menus: [],
            cart: [{quantity:1, menu:{id:3, name:"hamburguesa", price:200}},
                              {quantity:2, menu:{id:4, name:"hamburguesa", price:150}}
                            ]};

        // this.state = { business: {} };
        // this.state = { menus: [] };
        
        this.addToCart = this.addToCart.bind(this); 
        this.createOrderItem = this.createOrderItem.bind(this); 
        this.updateCart = this.updateCart.bind(this); 
        this.removeItem = this.removeItem.bind(this); 
        
        // this.business = this.menus[0].business;
    }
    
    componentDidMount() {
        this.setState({menus:[{ "id": 1, "name": "Doble Cuarto", "description": "Doble carne, doble queso", "category": ["HAMBURGUESAS"], "deliveryCost": 0.0, "startDate": "2019-11-15", "dueDate": "2019-11-15", "deliveryTime": "21:20:00", "averageDeliveryTime": "21:20:00", "price": 250.0, "minimumQuantity": 1, "minimumQuantityPrice": 10.0, "minimumQuantityTwo": 2, "minimumQuantityPriceTwo": 20.0, "maximumAmountSalesPerDay": 20, "active": true, "business": { "id": 1, "name": "Mc Donald", "logo": "path Logo", "locality": "Quilmes", "phone": 15152659, "address": "Peatonal Rivadavia 112", "location": "gmaps coord", "description": "Vendemos las mejores hamburguesas", "link": "website", "email": "hamburguer@mcdonald.com", "schedule": "[08-23]", "days": "LunADom", "delivery": "distance min - delivery", "wallet": { "id": 2, "balance": 0.0 }, "balance": 0.0 } },
                             { "id": 2, "name": "TripleMc", "description": "Triple carne, aderezo casero", "category": ["HAMBURGUESAS"], "deliveryCost": 0.0, "startDate": "2019-11-15", "dueDate": "2019-11-15", "deliveryTime": "21:20:00", "averageDeliveryTime": "21:20:00", "price": 250.0, "minimumQuantity": 1, "minimumQuantityPrice": 10.0, "minimumQuantityTwo": 2, "minimumQuantityPriceTwo": 20.0, "maximumAmountSalesPerDay": 20, "active": true, "business": { "id": 1, "name": "Mc Donald", "logo": "path Logo", "locality": "Quilmes", "phone": 15152659, "address": "Peatonal Rivadavia 112", "location": "gmaps coord", "description": "Vendemos las mejores hamburguesas", "link": "website", "email": "hamburguer@mcdonald.com", "schedule": "[08-23]", "days": "LunADom", "delivery": "distance min - delivery", "wallet": { "id": 2, "balance": 0.0 }, "balance": 0.0 } }]
                        });
        this.getMenus();
        this.getBusiness();
    }

    addToCart(item){
        // console.log(item.currentTarget.id);
        // console.log(this.createOrderItem(item.currentTarget.id));
        this.setState({cart:this.updateCart(item.currentTarget.id) });
        // console.log(item.currentTarget.id);
        // console.log(this.createOrderItem(item.currentTarget.id));
    }
    
    removeItem(id){
        this.setState({cart:this.state.cart.filter( orderItem => orderItem.menu.id !== parseInt(id) )});    

    }

    updateCart(id){
        let currentCart = this.state.cart;
        currentCart.push(this.createOrderItem(id));
        console.log(currentCart);
        return  currentCart;

    }

    createOrderItem(id){
        return { quantity:1, menu: this.state.menus.find(menu=>menu.id == id) }; 
    }

    getBusiness() {
        const { match: { params } } = this.props;
        console.log(`${API_URL}/business/${params.id}`);
        axios.get(`${API_URL}/business/${params.id}`)
            .then(({ data: _business }) => {
                console.log('business', _business);

                this.setState({ business: _business });
            });
    }

    getMenus() {
        const { match: { params } } = this.props;
        axios.get(`${API_URL}/menu/business/${params.id}`)
            .then(({ data: _menus }) => {
                console.log('menus', _menus);

                this.setState({ menus: _menus });
            });
    }

    render() {
        return (
            <div>
                <ViandasNavBar />
                <ViandasyaHeader business={this.state.business} />
                <div className="row">
                    <div className="col-md-2">
                        
                    </div>
                    <div className="col-md-6">
                        <ViandasyaMenus  menus={this.state.menus}  addToCart={this.addToCart}/>

                    </div>
                    <div className="col-md-3 cart-responvive ">
                        <ViandasCart cart={this.state.cart } removeItems={this.removeItem}/>
                    </div>
                    <div className="col-md-1">
                        
                    </div>

                </div>

            </div>
        );
    }
}