import React, { Component } from 'react';
import { Table } from 'reactstrap';
import Order from './Order';

class ClientTableOrderList extends Component {
	render() {
		const orders = this.props.orders.map(order =>
			<Order key={order.id} order={order}/>
		);
		return(
			<div>
			{/* <div className="col-3"></div> */}
			<div className="offset-md-2 col-md-8">
				<div className="text-center pb-3 ">
					<h1 className="mt-3">Historial de Pedidos</h1>
				</div>

				<Table striped hover>
					<tbody>
						<tr>
						<th>Pedido N°</th>
						<th>Detalle</th>
						<th>Precio</th>
						<th>Negocio</th>
						<th>Fecha de pedido</th>
						<th>delivery</th>
						<th>estado</th>
						</tr>
						{orders}
					</tbody>
				</Table>

			</div>
			<div className="col-3"></div>
			</div>	
		)
	}
}

export default ClientTableOrderList;


