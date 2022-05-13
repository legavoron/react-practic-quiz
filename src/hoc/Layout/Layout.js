import React, { Component } from 'react';
import classes from './Layout.module.css';
import MenuToogle from '../../components/Navigation/MenuToogle/MenuToogle';
import Drawer from '../../components/Navigation/Drawer/Drawer';



class Layout extends Component {

    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuCloseHandler = () => {
        this.setState({
            menu: false
        })
    }


    render() {
        return(
            <div className={classes.Layout}>

                <Drawer
                    isOpen={this.state.menu}
                    onClose={this.toggleMenuHandler}
                />

                <MenuToogle
                    onToogle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />

                <main>
                    { this.props.children }
                </main>
            </div>
        )
    }
}

export default Layout;