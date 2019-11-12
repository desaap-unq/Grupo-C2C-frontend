import React, { Component } from 'react';

class Business extends Component {
	render() {
		return (
			<tr>
				<td>{this.props.business.logo}</td>
				<td>{this.props.business.name}</td>
				<td>{this.props.business.description}</td>
				<td>ver productos-button-</td>
			</tr>
		)
	}
}

export default Business;