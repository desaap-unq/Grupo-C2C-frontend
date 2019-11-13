import React, { Component } from 'react';
import {Button} from 'reactstrap';
import {withRouter} from "react-router-dom";

class Business extends Component {

	constructor() {
		super();
		this.redirectMenus = this.redirectMenus.bind(this)
	}

	redirectMenus() {
		this.props.history.push("/business/" + this.props.business.id + "/menus");
	}

	render() {
		return (
			<tr>
				<td>{this.props.business.logo}</td>
				<td>{this.props.business.name}</td>
				<td>{this.props.business.description}</td>
				<td>
					<Button className="btn-round" color="primary" onClick={this.redirectMenus}>
					  ver productos
					</Button>
				</td>
			</tr>
		)
	}
}

export default withRouter(Business);