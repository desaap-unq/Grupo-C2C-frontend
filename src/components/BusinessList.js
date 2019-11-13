import React, { Component } from 'react';
import { Table } from 'reactstrap';
import Business from './Business';

class BusinessList extends Component {
	render() {
		const businesses = this.props.businesses.map(business =>
			<Business key={business.id} business={business}/>
		);
		return(
			<Table striped hover>
				<tbody>
					<tr>
						<th>Img</th>
						<th>Name</th>
						<th>Description</th>
						<th>*</th>
					</tr>
					{businesses}
				</tbody>
			</Table>
		)
	}
}

export default BusinessList;