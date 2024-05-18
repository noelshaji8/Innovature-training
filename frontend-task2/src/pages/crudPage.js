import React, { Component } from 'react';
import '../styles.css';
import NavBar from '../components/navBar';

class CrudPage extends Component {
    render() {
        return (
            <>
                <NavBar />
                <div className='display page'>Display</div>
            </>
        );
    }
}

export default CrudPage;