import React, { Component } from "react";
import API from "../utils/api";
import TemplateWithHeaderPage from "./TemplateWithHeaderPage.js";
import ClientTableOrderList from "../components/ClientTableOrderList.js";
import ClientHeader from "../components/Headers/ClientHeader";

export default class HistoryOrderPage extends Component {
    constructor(props) {
        super(props);
        this.state = {order:[] }
    }

    
    componentDidMount() {
        this.getOrders();
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
                {this.state.orders === undefined? <div>Loading</div>:
            
                <TemplateWithHeaderPage>
                    
                    <ClientHeader client={this.state.orders[0].client}/>

                    <ClientTableOrderList orders={this.state.orders}/>

                </TemplateWithHeaderPage>
            }
                


            </div>
        );
    }
}












