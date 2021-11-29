import React from 'react';

class Goods extends React.Component {
	constructor(props) {
		super(props);
	

	}


	render() {
	
		return (
			<div>
				<div className="products_item">
					<img src={this.props.sale} alt="" className="sale" />
					<img src={this.props.heart} alt="" className="heart" />
					<a href="" className="products_images">
						<img src={this.props.proImages} alt="" />
					</a>
					<div className="products_hover">
						<a href="" className="products_zoom">
							<img src={this.props.zoomImages} alt="" />
						</a>
						<a href="" className="products_description">
							<img src={this.props.arrowsImages} alt="" />
						</a>
						<a href="" className="products_cart">
							<img src={this.props.cartImages} alt="" />
						</a>

					</div>
					<p className="cost">${this.props.cost} <span className="overline">{this.props.overline}</span></p>
					<a href="" className="description">{this.props.description}</a>
					<div className="articul"><button className="add-to-cart" data-key={this.props.articul}>Add to cart</button></div>

				</div>

			</div>
		)
	}
}
export default Goods;