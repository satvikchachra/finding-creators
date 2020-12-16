import React from 'react';

const CreatorCard = props => {
    return (
        <div className='card-container'>
            <div className='card'>
                <div className='creator-img-container'>
                    {<img alt='Creator DP' src={props.creatorInfo.creatorObj.pic} />}
                </div>
                <div className='creator-link-container'>
                    <a
                        style={{ color: '#ffffff' }}
                        target='_blank' rel='noreferrer'
                        href={props.creatorInfo.creatorObj.link}>
                        Visit
                    </a>
                </div>
            </div>
        </div>
    )
};

export default CreatorCard;