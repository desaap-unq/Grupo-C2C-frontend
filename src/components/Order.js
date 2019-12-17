import React, { Component } from 'react';

class Order extends Component {

	render() {
		const detailsName  =this.props.order.orderItems.map(item =>item.menu.name);// {menu:{name:""}} 
		// console.log(this.props.order);
		const detail = detailsName.reduce((name, currentName)=> name + currentName +", " , "" ) ;
		// console.log(this.props.order.orderItems[0].menu.name);//.orderItems.reduce((item, currentItem)=>item.menu.name + currentItem.menu.name,""));
		return (
			<tr>
				<td>{this.props.order.id}</td>
				<td>{detail}</td>
				<td>{this.props.order.totalPrice}</td>
				<td>{this.props.order.business.name}</td>
				<td>{this.props.order.orderDate}</td>
				<td>{this.props.order.dispatchType}</td>
				<td>{this.props.order.state}</td>
			</tr>
		)
	}
}

export default Order;