import React from 'react';
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem } from 'rc-menu';
import 'rc-dropdown/assets/index.css';
import './styles.css';

class NavMenu extends React.Component {

    onVisibleChange = (visible) => {
    }

    menu = () => {
        const menuItems = this.props.menuItems;
        if (menuItems && menuItems.length > 0) {
            return (
                <Menu onSelect={this.props.onMenuItemSelect}>
                    {
                        menuItems.map(item => {
                            return (
                                <MenuItem
                                    key={item.key}
                                    disabled={item.isDisabled}>
                                    {item.name}
                                </MenuItem>
                            );
                        })
                    }
                </Menu>
            );
        }
        return <Menu />;
    }

    render() {
        return (
            <div >
                <Dropdown
                    trigger={['click']}
                    overlay={this.menu}
                    animation="slide-up"
                    onVisibleChange={this.onVisibleChange}
                >
                    <button className="menu_button">{this.props.name}</button>
                </Dropdown>
            </div>
        );
    }
}

export default NavMenu;