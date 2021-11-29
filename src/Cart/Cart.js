import React from 'react';
import './Cart.css';

class Cart extends React.Component {
	constructor(props) {
		super(props);

	}
	renderObj = () => {
		let out = [];
		for (let key in this.props.cart) {	
			let goods = this.getGoodsFromArr(key);
			console.log(goods)	
			out.push(<tr key={key}>
				<td>{goods['title']}</td>
				<td>{this.props.cart[key]}</td>
				<td>$ {this.props.cart[key] * goods['cost']} </td>

			</tr>
			)
		}
		return out;
	}
	getGoodsFromArr = (art) => {
		for (let i = 0; i < this.props.goods.length; i++) {
			if (art ===this.props.goods[i]['articul']){
				return this.props.goods[i];
			}
		}

	}
	render() {
		return (
			<div className="cart-items">
				<h1>Cart</h1>
				<table>
					<tbody>
						<tr>
							<th>Title</th>
							<th>Pieces</th>
							<th>Price</th>
						</tr>
						{this.renderObj()}
					</tbody>
				</table>
			</div>
		)
	}

}
export default Cart;