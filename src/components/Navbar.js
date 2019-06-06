import React from 'react'
import { Link, withRouter } from 'react-router-dom';

import './styles/Navbar.css'

const menuItems = [
    'HOME',
    'PRODUCTS',
    'CLIENTS',
    'CONTACT'
 ];

class Navbar extends React.Component {

    state = {}

    componentDidMount(){
        this.setLocation(this.props.location)
    }

    componentWillReceiveProps(nextProps) {
        this.setLocation(nextProps.location)
    }

    setLocation(location) {
        let currentMenu;
        if(location.pathname === '/') {
            currentMenu = 'HOME'
        }
        else {
            currentMenu = menuItems.find(menu => location.pathname.toLocaleLowerCase().includes(menu.toLocaleLowerCase()))
        }

        this.setState({ active: currentMenu ? currentMenu.toLocaleLowerCase() : ''})
    }

    _handleClick(menuItem) { 
        this.setState({ active: menuItem.toLowerCase() })
    }

    render() {
            return (
                <div className='main-bar'>
                    <div className='menu'>
                        {menuItems.map(menuItem => 
                            <Link key={menuItem}
                                className={`menu-item ${this.state.active === menuItem.toLowerCase() ? 'menu-item-selected' : {}}`}
                                to={`/${menuItem.toLowerCase()}`}
                            >{menuItem}</Link>
                        )}
                    </div>
                </div>
            )
        }
}

export default withRouter(Navbar)
