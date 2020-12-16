import React from 'react';

const GenreList = props => {
    const genereList = props.gList;

    return (
        <div className='genre-container'>
            <div className='genre-list'>
                {
                    genereList
                        .map(genreItem =>
                            <div
                                key={genreItem.id}
                                onClick={() => props.clicked(genreItem.id)}
                                className={props.styling(genreItem.id)}>
                                {genreItem.name}
                            </div>)
                }
            </div>
        </div>
    );
};

export default GenreList;