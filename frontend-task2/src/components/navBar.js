import React, { Component } from 'react';
import '../styles.css';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Avatar from '@radix-ui/react-avatar';
import '../styles.css';
import { Link } from 'react-router-dom';

const user = {
  "name": "Noel"
}
class NavBar extends Component{

    render(){
        return (
            <NavigationMenu.Root className="navbar">
              <div className="navbar-left">
                <Avatar.Root className="avatar">  
                  <Avatar.Image className="avatar-image" src={user.avatar} alt={user.name} />
                  <Avatar.Fallback className="avatar-fallback">{user.name[0]}</Avatar.Fallback>
                </Avatar.Root>
                <span className="user-name">{user.name}</span>
              </div>
              <NavigationMenu.List className="nav-list">
              <NavigationMenu.Item className="nav-item"><Link to="/search">Search</Link></NavigationMenu.Item>
                <NavigationMenu.Item className="nav-item"><Link to="/recipes">All Recipes</Link></NavigationMenu.Item>
                <NavigationMenu.Item className="nav-item"><Link to="/add_delete">Add/Delete</Link></NavigationMenu.Item>
                <NavigationMenu.Item className="nav-item"><Link to="/about">About</Link></NavigationMenu.Item>
              </NavigationMenu.List>
            </NavigationMenu.Root>
          );
    }
}


export default NavBar;
