import React from 'react';
const SearchBarTag = ({sortByTag}) =>
            <div className='search-block'>
                <input type="text" placeholder='Search by tag' onChange={e => sortByTag(e.target.value)}/>
            </div>       
        
export default SearchBarTag