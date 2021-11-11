import React from 'react';
import CartItemsService from '../../actions/cartItems';

import './pizzaItems.css';

const PizzaItems = (props) => {
    const pizzaItems = props.location.data;
    const createCartItem = (cartItem) => {
        CartItemsService.createCartItem(cartItem)
            .then((res) => {
                alert("Food Item has been addedd to the cart");
            })
    }
    return (
        pizzaItems.map((data) => (
            <div className="container1">
                <header>
                    <h5 className="h3">{data.name}</h5>
                </header>
                <main className="main">
                    <div className="desc">
                        <p className="price">Price:<b> {data.price}</b></p>
                        <p>Description: {data.description}</p>
                    </div>
                    <div className="middle"></div>
                    <div className="imgContainer">
                        <img className="img" src={data.image} alt={data.name} />
                    </div>
                </main>
                <footer>
                    <button className="btn" type="button" onClick={() => createCartItem(data)}>Order Now</button>
                </footer>
                <hr></hr>
            </div>
        ))
    )

}

export default PizzaItems;