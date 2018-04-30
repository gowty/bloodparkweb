import React, { Component } from 'react';
import '../css/custom.css';
import { Carousel } from 'react-bootstrap';
import a from '../images/a.jpg';
import b from '../images/b.jpg';
import c from '../images/c.jpg';

class Slider extends Component {
	render() {
		return (
			<div>
				<Carousel style={{ marginTop: '-20px' }}>
					<Carousel.Item>
						<img className="carouselimg" alt="900x500" src={a} />
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className="carouselimg" alt="900x500" src={b} />
						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className="carouselimg" alt="900x500" src={c} />
						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>
								Praesent commodo cursus magna, vel scelerisque nisl consectetur.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		);
	}
}

export default Slider;
