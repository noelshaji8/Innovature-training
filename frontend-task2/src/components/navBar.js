import React from 'react';
import '../styles.css';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Avatar from '@radix-ui/react-avatar';
import '../styles.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';



function NavBar() {

  const user = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {

      dispatch(logout());
      navigate("/")

    } catch (error) {
      console.error('Logout error:', error);
      // Handle error (show message, etc.)
    }
  };

  return (
    <NavigationMenu.Root className="navbar">
      <div className="navbar-left">
        <Avatar.Root className="avatar">
          <Avatar.Fallback className="avatar-fallback">{user.username[0]}</Avatar.Fallback>
        </Avatar.Root>
        <span className="user-name">{user.username}</span>
      </div>
      <NavigationMenu.List className="nav-list">
        <NavigationMenu.Item className="nav-item"><Link to="/search">Search</Link></NavigationMenu.Item>
        <NavigationMenu.Item className="nav-item"><Link to="/recipes">All Recipes</Link></NavigationMenu.Item>
        <NavigationMenu.Item className="nav-item"><Link to="/add_delete">Add/Delete</Link></NavigationMenu.Item>
        <NavigationMenu.Item className="nav-item" onClick={handleLogout}>Logout</NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );

}


export default NavBar;
