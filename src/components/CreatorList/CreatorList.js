import React from 'react';

const CreatorList = props => {
    const creatorsList = props.cList;

    return (
        <div className='creator-list-container'>
            {
                creatorsList
                    .filter(channel => channel.gid === props.genreCreatorInfo.genreObj.id)
                    .map(creator =>
                        <div key={creator.id}
                            onClick={() => props.clicked(creator.id)}
                            className={props.styling(creator.id)}>
                            <div className='creator-name'>{creator.name}</div>
                            <div className='creator-description'>{creator.description}</div>
                        </div>)
            }
        </div>
    );
};

export default CreatorList;