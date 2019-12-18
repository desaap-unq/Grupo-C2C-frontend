import React, { Component } from 'react';
import { Table } from 'reactstrap';
import Business from './Business';
import {FormattedHTMLMessage} from 'react-intl';

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
						<th>
						
						<FormattedHTMLMessage id="app.name"
                        defaultMessage="Nombre"
                    />
							</th>
						<th>
						<FormattedHTMLMessage id="app.description"
                        defaultMessage="Descripcion"
                    />
							</th>
						<th>*</th>
					</tr>
					{businesses}
				</tbody>
			</Table>
		)
	}
}

export default BusinessList;