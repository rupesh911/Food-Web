import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import CartItemsService from '../../actions/cartItems';

import '../PizzaItems/pizzaItems.css';


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: []
        }
    }
    componentDidMount() {
        CartItemsService.getCartItems().then((res) => {
            this.setState({ cartItems: res.data });
        });
    }
    removeCartItem(id) {
        CartItemsService.deletecartItem(id).then(res => {
            alert("Item deleted from the cart successfully");
            this.componentDidMount();
        });
    }

    render() {
        const allCartItems = this.state.cartItems.map((cart) => (
            <div className="container1">
                <header>
                    <h5 className="h3">{cart.name}</h5>
                </header>
                <main className="main">
                    <div className="desc">
                        <p className="price">Price: {cart.price}</p>
                        <p>Description: {cart.description}</p>
                    </div>
                    <div className="middle"></div>
                    <div className="imgContainer">
                        <img className="img" src={cart.image} alt={cart.name} />
                    </div>
                </main>
                <footer>
                    <button className="btn" type="button" onClick={() => this.removeCartItem(cart._id)}>Remove</button>
                </footer>
                <hr></hr>
            </div>
        ))
        return (
            <div>
                {allCartItems}
                <Link className="button1" to='/'><button type="button" className="btn" onClick={() => { }}>Place Order</button></Link>
            </div>
        )
    }
}

export default Cart;