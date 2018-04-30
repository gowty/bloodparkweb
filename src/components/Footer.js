import React from 'react';
import { Well } from 'react-bootstrap';
import '../css/custom.css';

class Footer extends React.Component {
	render() {
		return (
			<div>
				<Well bsSize="small" className="footer navbar-fixed-bottom">
					<span style={{ color: '#fff' }}>© 2018 All Rights Reserved</span>
					<span className="pull-right">
						<a
							href="https://play.google.com/store/apps/details?id=com.kitscholarship"
							style={{ textDecoration: 'none' }}>
							<i className="fab fa-android" style={{ color: '#6dbc8f' }} />&nbsp;<span
								style={{ color: '#fff' }}>
								Download Android App
							</span>
						</a>
					</span>
				</Well>
			</div>
		);
	}
}

export default Footer;
