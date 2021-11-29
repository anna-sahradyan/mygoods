import GoodsArr from './data/Goods.json';
import Goods from './Goods.js';
import Cart from './Cart/Cart';
import React from 'react';

class GoodsMain extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			offset: 0,
			cart: {},
			count: 0,


		}
		this.itemsRef = React.createRef();
	}

	//!addToCart
	addToCart = (e) => {
		e.preventDefault();
		if (!e.target.classList.contains('add-to-cart')) {
			return false;
		}
		let cartTemp = this.state.cart;
		cartTemp[e.target.dataset.key] ? cartTemp[e.target.dataset.key]++ : cartTemp[e.target.dataset.key] = 1;
		this.setState({ cart: cartTemp });
		let count = this.state.count;
		count++;
			
		this.setState({ 'count': count });
	}

	leftArrow = () => {
		let offsetCount = this.state.offset;
		offsetCount++;
		this.setState({ offset: offsetCount + 200 })
		if (offsetCount > 800) {
			this.setState({ offset: offsetCount = 0 });


		}
	

		this.itemsRef.current.style.left = -offsetCount + 'px';
	

	}
	rightArrow = () => {
		let offsetCount = this.state.offset;
		offsetCount--;
		this.setState({ offset: offsetCount - 200 });
		if (offsetCount < 0) {
			this.setState({ offset: offsetCount = 800 })
			

		}
		
		this.itemsRef.current.style.left = -offsetCount + 'px';
	

	}

	render() {
	
		let showCart;
		if (this.state.count !== 0) {
			showCart = <Cart cart={this.state.cart} goods={GoodsArr} />
		}
		// else {
		// 	showCart = <div className="showCart">cart is empty <span><img src="images_3/cart2.png" alt=""/></span> </div>;
		// }

		return (
			<>
				<div className="content_products" >
					<div className="products_items" ref={this.itemsRef} style={{ transition: ".5s" }} onClick={this.addToCart}>
						{GoodsArr.map(item => <Goods title={item.title} cost={item.cost} proImages={item.proImages} description={item.description} heart={item.heart} zoomImages={item.zoomImages} arrowsImages={item.arrowsImages} cartImages={item.cartImages} articul={item.articul} key={item.articul} />)}

					</div>
				</div>
				<div className="btn prev" onClick={this.leftArrow}><img src="images_3/left.png" alt="" /></div>
				<div className="btn next" onClick={this.rightArrow}><img src="images_3/arrow right.png" alt="" /></div>

				{showCart}
			</>
		)
	}

}
export default GoodsMain;