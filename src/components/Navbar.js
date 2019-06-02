import React from 'react'
import { Router, Route, Link, withRouter } from 'react-router-dom';

import './styles/Navbar.css'

const menuItems = [
    'HOME',
    'CLIENTS',
    'PRODUCTS',
    'CONTACT'
 ];

class Navbar extends React.Component {

    state = {}

    componentDidMount(){
        let currentMenu;

        if(this.props.location.pathname === '/') {
            currentMenu = 'HOME'
        }
        else {
            currentMenu = menuItems.find(menu => this.props.location.pathname.toLocaleLowerCase().includes(menu.toLocaleLowerCase()))
        }

        this.setState({ active: currentMenu ? currentMenu.toLocaleLowerCase() : ''})
    }

    _handleClick(menuItem) { 
        this.setState({ active: menuItem.toLowerCase() })
    }

    render() {
            return (
                <div className='menu'>
                    {menuItems.map(menuItem => 
                        <Link key={menuItem}
                            className={`menu-item ${this.state.active === menuItem.toLowerCase() ? 'menu-item-selected' : {}}`}
                            to={`/${menuItem.toLowerCase()}`}
                            onClick={this._handleClick.bind(this, menuItem)}
                        >{menuItem}</Link>
                    )}
                </div>
            )
        }
}

export default withRouter(Navbar)
