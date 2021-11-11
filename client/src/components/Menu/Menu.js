import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Figure from 'react-bootstrap/Figure';

import './menu.css';
import FoodItemsService from '../../actions/foodItems';
import NavBar from "../NavBar/NavBar.js";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: []
        }
    }

    componentDidMount() {
        FoodItemsService.getFoodItems().then((res) => {
            this.setState({ menu: res.data });
        });
    }

    render() {
        const menuItems = this.state.menu.map((item) => {
            return (

                <div key={item.id} className="col-12 col-md-3">
               
                    <Figure>
                        <Figure.Image className="figure" alt= {item.name} src={item.image} roundedCircle />
                        <Figure.Caption className="caption">

                            <Link className="link" to={{ pathname: `/${item.name}`, data: item.subItems }}><b>{item.name}</b></Link>
                        </Figure.Caption>
                    </Figure>
                </div>

            );
        })
        return (
            <div className="container container-left">
                <div className="row mt-5">
                    {menuItems}

                </div>
             
            </div>
    
        )
    }
}

export default Menu;