import React, { Component } from "react";
import API from "../utils/api";
import TemplateWithHeaderPage from "./TemplateWithHeaderPage.js";
import ClientTableOrderList from "../components/ClientTableOrderList.js";
import ClientHeader from "../components/Headers/ClientHeader";

export default class HistoryOrderPage extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    
    componentDidMount() {
        this.getClient();
        this.getOrders();
    }

    getOrders() {
        const { match: { params } } = this.props;
        API.get(`order/${params.id}`)
            .then(
                ({ data: _orders }) => {this.setState({ orders: _orders })},
                (error) => {alert(error.message)}
            );
    }

    getClient() {
        const { match: { params } } = this.props;
        API.get(`client/${params.id}`)
            .then(
                ({ data: _client }) => {this.setState({ client: _client })},
                (error) => {alert(error.message)}
            );
    }


    render() {
        return (
            <div>
                {this.state.orders === undefined || this.state.client === null ? 
                    <div>Loading</div>
                    :
                    <TemplateWithHeaderPage history={this.props.history}>
                    
                        <ClientHeader client={this.state.client}/>

                        <ClientTableOrderList orders={this.state.orders}/>

                    </TemplateWithHeaderPage>
            }

            </div>
        );
    }
}












