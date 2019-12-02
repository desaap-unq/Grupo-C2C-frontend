import React, { Component } from "react";
import ViandasNavBar from "../components/Navbars/ViandasNavBar.js";
import ViandasyaHeader from "../components/Headers/ViandasyaHeader.js";
import ViandasyaMenus from "../components/body/ViandasyaMenus.js";
import ViandasCart from "../components/ViandasCart.js";
import API from "../utils/api";

export default class BuyMenuPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            business: {},
            menus: [],
            cart: []};

        this.addToCart = this.addToCart.bind(this); 
        this.createOrderItem = this.createOrderItem.bind(this); 
        this.updateCart = this.updateCart.bind(this); 
        this.removeItem = this.removeItem.bind(this); 
        this.addQuantity = this.addQuantity.bind(this); 
        this.clearCart = this.clearCart.bind(this); 
        
    }

    clearCart(){
        this.setState({cart:[]});
    }
    
    componentDidMount() {
        this.setState({menus:[]});
        this.getMenus();
        this.getBusiness();
        
    }

    addToCart(item){
        
        if (this.state.cart.some( orderItem => orderItem.menu.id  === parseInt(item.currentTarget.id) ) ) 
            this.addQuantity(parseInt(item.currentTarget.id));
        else
            this.setState({cart:this.updateCart(item.currentTarget.id) });
    }
    
    removeItem(id){
        this.setState({cart:this.state.cart.filter( orderItem => orderItem.menu.id !== parseInt(id) )});    
    }

    updateCart(id){
        let currentCart = this.state.cart;
        currentCart.push(this.createOrderItem(id));
        return  currentCart;
    }

    addQuantity(id){
        let itemOrder = this.state.cart.find(item=>item.menu.id === id);
        itemOrder.quantity++;
        this.setState({cart:this.state.cart})
    }

    createOrderItem(id){
        return { quantity:1, menu: this.state.menus.find(menu=>menu.id === parseInt(id)) }; 
    }

    getBusiness() {
        const { match: { params } } = this.props;
        console.log(`API/business/${params.id}`);
        API.get(`business/${params.id}`)
            .then(({ data: _business }) => {
                console.log('business', _business);

                this.setState({ business: _business });
            });
    }

    getMenus() {
        const { match: { params } } = this.props;
        API.get(`menu/business/${params.id}`)
            .then(({ data: _menus }) => {

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
                        <ViandasCart cart={this.state.cart } clearCart={this.clearCart} removeItems={this.removeItem}/>
                    </div>
                    <div className="col-md-1">
                        
                    </div>

                </div>

            </div>
        );
    }
}