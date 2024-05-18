import React, { Component } from 'react';
import '../styles.css';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Avatar from '@radix-ui/react-avatar';
import '../styles.css';

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
                
                <NavigationMenu.Item className="nav-item"><a href="#recipes">Recipes</a></NavigationMenu.Item>
                <NavigationMenu.Item className="nav-item"><a href="#profile">Profile</a></NavigationMenu.Item>
                <NavigationMenu.Item className="nav-item"><a href="#about">About</a></NavigationMenu.Item>
              </NavigationMenu.List>
            </NavigationMenu.Root>
          );
    }
}


export default NavBar;
