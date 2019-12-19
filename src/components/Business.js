import React, { Component } from 'react';
import {Button} from 'reactstrap';
import {withRouter} from "react-router-dom";

class Business extends Component {

	constructor() {
		super();
		this.redirectMenus = this.redirectMenus.bind(this)
	}

	redirectMenus() {
		this.props.history.push("/business/" + this.props.business.id + "/menu");
	}

	render() {
		return (
			<tr>
				<td>{<img src={`data:image/jpg;base64,${this.props.business.logo}`} alt={this.props.business.name} width="200" height="200"></img>}</td>
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