import React, { useState, useEffect } from 'react';
import { techChannels, brainyChannels, comedyChannels } from './data/creatorData';
import { genereList } from './data/genreData';
import './App.css';

const App = () => {
  const creatorsList = [...techChannels, ...brainyChannels, ...comedyChannels];

  const [genreAndCreator, setGenreAndCreator] = useState(
    {
      genreObj: genereList[0], // Default
      creatorObj: creatorsList[0] // Default
    }
  );

  let getGenreNameInital = genreAndCreator.genreObj.name.charAt(0);
  let defaultId = '' + getGenreNameInital + '0';
  console.log(defaultId);

  const genreClickHandler = id => {
    const genre = genereList.find(genre => genre.id === id);
    defaultId = '' + genre.name.charAt(0) + '0';
    const creator = creatorsList.find(creator => creator.id === defaultId);

    setGenreAndCreator(
      {
        genreObj: genre,
        creatorObj: creator
      }
    );
  };

  const creatorClickHandler = id => {
    const creator = creatorsList.find(creator => creator.id === id);
    const genre = genereList.find(genre => genre.id === creator.gid);

    setGenreAndCreator({
      genreObj: genre,
      creatorObj: creator
    });

  };

  return (
    <div className='App'>

      <h1>Finding Creators</h1>
      <br />

      Checkout my favorite content creators across YouTube. Select a genre to get started.
      <br />

      <br />
      {genreAndCreator.genreObj.id} {genreAndCreator.creatorObj.id}

      <br />

      <img src={genreAndCreator.genreObj.pic} height="150px" width="150px" />

      <img src={genreAndCreator.creatorObj.pic} height="150px" width="150px" />

      <div className='Genre-List'>
        {
          genereList
            .map(genreItem =>
              <div onClick={() => genreClickHandler(genreItem.id)} className='Genre-List-Item'>
                {genreItem.name}
                <img src={genreItem.pic} height="150px" width="150px" />
              </div>)
        }
      </div>


      <div className='Creator-List'>
        {
          creatorsList
            .filter(channel => channel.gid === genreAndCreator.genreObj.id)
            .map(creator =>
              <div onClick={() => creatorClickHandler(creator.id)} className='Creator-List-Item'>
                {creator.id}<br />
                {creator.name}<br />
                {creator.description}<br />
                <img src={creator.pic} height="150px" width="150px" />
              </div>)
        }
      </div>

    </div>
  );
}

export default App;
