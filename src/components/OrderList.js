import React, { Component } from 'react';
import { Table } from 'reactstrap';
import Business from './Business';

class OrderList extends Component {
	render() {
		const orders = this.props.orders.map(order =>
			<Order key={order.id} order={order}/>
		);
		return(
			<Table striped hover>
				<tbody>
					<tr>
						<th>Menu</th>
						<th>Descripcion</th>
						<th>Precio</th>
						<th>Description</th>
						<th>*</th>
					</tr>
					{orders}
				</tbody>
			</Table>
		)
	}
}

export default OrderList;