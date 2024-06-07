import '../App.css';
import React, { Component } from 'react';
import '../styles.css';
import SearchBar from '../components/searchBar';
import { Button, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

class SearchPage extends Component {
    render() {
        return (
            <div className='Display-page'>
                <div className='search-page-container'>
                    <div >
                        <SearchBar />
                    </div>
                    <div className='button-group'>
                        <Theme accentColor="gray" radius="large" >
                            <Button className='btn' style={{marginRight: 10}} >Search User</Button>
                            <Button className='btn' style={{marginLeft: 10}}>Search Recipe</Button>
                        </Theme>
                    </div>
                </div>
            </div>
        );
    };
}

export default SearchPage;

