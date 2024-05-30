import React, { Component } from 'react';
import '../styles.css';
import NavBar from '../components/navBar';
import { Route, Routes } from "react-router-dom";
import DisplayPage from "../pages/displayPage";
import SearchPage from '../pages/searchPage';
import AboutPage from '../pages/aboutPage';

class MainPage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Routes>
                    <Route exact path='/recipes' element={<DisplayPage />} >
                    </Route>
                    <Route path='/search' element={<SearchPage />}>
                    </Route>
                    <Route path='/about' element={<AboutPage />} >
                    </Route>
                </Routes>
            </div>
        );
    }
}

export default MainPage;