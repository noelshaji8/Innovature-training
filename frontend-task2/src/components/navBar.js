import React from 'react';
import '../styles.css';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Avatar from '@radix-ui/react-avatar';
import '../styles.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { readAllRecipes, readOwnRecipes, searchRecipe, searchUser } from "../Api"
import { readRecipe, logoutRecipe, } from "../redux/recipeSlice"


function NavBar() {

  const user = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {

      dispatch(logout());
      dispatch(logoutRecipe());
      navigate("/")

    } catch (error) {
      console.error('Logout error:', error);
      // Handle error (show message, etc.)
    }
  };

 const handleUserRecipes = async () => {
      try {
          const recipesData = await readOwnRecipes();
          dispatch(readRecipe(recipesData))      
          navigate("/display")
  
      } catch (error) {
          console.error('display error:', error);
          // Handle error (show message, etc.)
      }
  
  };

  const handleAllRecipes = async () => {
      try {
          const recipesData = await readAllRecipes();
          dispatch(readRecipe(recipesData))
          navigate("/recipes")
          
      } catch (error) {
          console.error('display error:', error);
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
        <NavigationMenu.Item className="nav-item" ><Link onClick={handleUserRecipes} >Home</Link></NavigationMenu.Item>
        <NavigationMenu.Item className="nav-item" ><Link onClick={handleAllRecipes} >All Recipes</Link></NavigationMenu.Item>
        <NavigationMenu.Item className="nav-item" ><Link to="/search">Search</Link></NavigationMenu.Item>
        <NavigationMenu.Item className="nav-item" ><Link to="/add">Add</Link></NavigationMenu.Item>
        <NavigationMenu.Item className="nav-item" onClick={handleLogout}><Link>Logout</Link></NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );

}


export default NavBar;
