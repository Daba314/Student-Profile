import React from 'react';
import './SearchBarName.css'

const SearchBarName = ({sortByName}) =>
            <div className='search-block'>
                <input type="text" placeholder='Search by name' onChange={e => sortByName(e.target.value)}/>
            </div>       
        
export default SearchBarName