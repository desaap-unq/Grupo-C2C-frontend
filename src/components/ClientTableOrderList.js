import React, { Component } from 'react';
import { Table } from 'reactstrap';
import Business from './Business';

class ClientTableOrderList extends Component {
	render() {
		const orders = this.props.orders.map(order =>
			<Order key={order.id} order={order}/>
		);
		return(
			<Table striped hover>
				<tbody>
					<tr>
						<th>Pedido N°</th>
						<th>Menu</th>
						<th>Precio</th>
						<th>Negocio</th>
						<th>*</th>
					</tr>
					{orders}
				</tbody>
			</Table>
		)
	}
}

export default ClientTableOrderList;