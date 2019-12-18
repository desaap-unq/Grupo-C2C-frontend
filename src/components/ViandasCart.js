import React, { Component } from "react";
import {Button} from "reactstrap";
import {ItemMenu} from "../components/ItemMenu";
import axios from 'axios';
import { FormattedHTMLMessage } from 'react-intl';

const API_URL = 'http://localhost:8080';

export default class ViandasCart extends Component {
    constructor(props){
        super(props);
        this.state = {totalPrice:0}
        this.removeItem = this.removeItem.bind(this);
        this.updateTotalPrice = this.updateTotalPrice.bind(this);
        this.buyMenus = this.buyMenus.bind(this);
        this.clearCart = this.clearCart.bind(this);
    }

    clearCart(){
        this.props.clearCart();
    }

    buyMenus(){
    const orderItems = this.props.cart.map(item=>{return {menuId:item.menu.id, quantity:item.quantity}});
        
    const body = {
        clientId:1,
        delivery:true,
        items:orderItems,
        deliveryTime:"17:00",
        dispatchDate:"2019-10-27"
    };
        
        axios.post(`${API_URL}/order`,body)
            .then(({ data: order }) => {
            alert("La compra ser realizo correctamente");
            this.clearCart();    
            },()=>{ alert("No se realizo la compra vuelva a intentarlo"); this.clearCart()} );
    }

    componentDidMount() {
        this.updateTotalPrice();
    }
    
    componentWillReceiveProps() {
        this.updateTotalPrice();
    }
    
    async removeItem(event){
        await this.props.removeItems(event.currentTarget.id);
        await this.updateTotalPrice();
    }

    updateTotalPrice(){
        this.setState({ totalPrice: this.props.cart.reduce((lastResult,orderMenu) =>{return lastResult + (orderMenu.quantity * orderMenu.menu.price) },0)});
    }


    render() {
        return (
            <div className="viandas-cart col-md-12">
                <div className="header-cart row  justify-content-center mt-2 mb-2">
                    <h4 className="pl-3 mt-0" >
                    <FormattedHTMLMessage id="app.yourOrder"
                                    defaultMessage="Tu Vianda"
                    />
                         </h4>

                </div>
                {this.props.cart.length === 0 ? 
                    (<div className="d-flex justify-content-center">
                        <img
                            alt="..."
                            //  className="creative-tim-logo"
                            src={require("../assets/img/platoVacio.jpg")}
                        />
                    </div>):
                    (<div>
                        
                        {this.props.cart.map(item =>{return(<ItemMenu key={item.menu.id} id={item.menu.id} orderItem={item} removeItem={this.removeItem} />)})}
                        
                        <div className="row pt-4">
                            <h4 className="pl-3 mt-0 col-8 text-center" >TOTAL </h4>
                            <h4 className="pl-3 mt-0 col-4">${this.state.totalPrice}</h4>

                        </div>
                        
                        <div className="row">
                            <Button className="offset-2 col-8 mb-3 mt-4 btn-danger" onClick={this.buyMenus}>
                            <FormattedHTMLMessage id="app.continue"
                                    defaultMessage="Continuar"
                    />
                                </Button>
                        </div>
                    
                    </div>)}
                    

            </div>


        );
    }
}