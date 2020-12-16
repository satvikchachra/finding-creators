import React from 'react';

const Header = props => {
    return (
        <div className='header'>
            <div className='title'>{props.title}</div>
            <br />

          Checkout my favorite content creators across YouTube.
            <br /> Select a genre to get started.
            <br />
        </div>
    );
}

export default Header;