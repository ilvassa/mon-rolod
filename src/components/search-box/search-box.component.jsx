import React from 'react';

import './search-box.style.css';


export const SearchBox = ({placeholder, handleChange}) => (
    <input 
        className='search'
        type='search' 
        placeholder={placeholder} 
        onChange={handleChange}
    />
);


//onChange={
//  e => this.setState({serachVal: e.target.value}, funzione chiamata
//  () => console.log(this.state) // callback function (simile ad await di Flutter) che viene chiamata dopo che la prima funzione è eseguita
//}