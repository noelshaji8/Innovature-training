import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import '../styles.css';
import { Theme, TextField } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        // Handle the search logic here
        console.log('Searching for:', event.target.value);
    };

    return (
        <div>
            <Theme accentColor="gray" radius="full">
                <TextField.Root className='Search-bar' placeholder="Search the docs…" type="text"
                    value={searchTerm}
                    onChange={handleSearch}>

                    <TextField.Slot>
                        <MagnifyingGlassIcon height="16" width="16" />
                    </TextField.Slot>

                </TextField.Root>
            </Theme>
        </div>
    );
}


export default SearchBar;
