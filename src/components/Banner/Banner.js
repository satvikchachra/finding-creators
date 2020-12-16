import React from 'react';

const Banner = props => {
    return (
        <div className='banner-container'>
            <div className='banner'>
                {props.genreInfo.genreObj.name}.
            </div>
            {/* <div className='banner-img-container'>{<img src={genreAndCreator.genreObj.pic} />}</div> */}
        </div>
    );
};

export default Banner;