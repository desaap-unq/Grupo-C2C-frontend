import React, { Component } from 'react';

class Order extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<tr>
				<td>{this.props.order.id}</td>
				<td>{this.props.order.detallw}</td>
				<td>{this.props.order.price}</td>
				<td>{this.props.order.business.name}</td>
				<td>{this.props.order.orderDate}</td>
				<td>{this.props.order.dispatchType}</td>
				<td>{this.props.order.state}</td>
			</tr>
		)
	}
}

export default Order;