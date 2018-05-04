import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Footer from './components/Footer';

class Routes extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Slider />
				<Footer />
			</div>
		);
	}
}

export default Routes;
