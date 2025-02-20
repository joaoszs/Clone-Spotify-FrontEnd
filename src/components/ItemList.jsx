/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import SingleItem from './SingleItem';

const ItemList = (props) => {
    console.log(props.title)
  return (
    <div className="item-list">

        <div className="item-list__header">
            <h2>Artistas populares</h2>
            <a className="item-list__link" href="/">
                Mostrar tudo
            </a>
        </div>
    
        <div className="item-list__container">
            <SingleItem/>
            <SingleItem/>
            <SingleItem/>
            <SingleItem/>
            <SingleItem/>
        </div>
    </div>
  )
}

export default ItemList