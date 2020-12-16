import React, { useState } from 'react';
import Footer from './components/Footer/Footer';
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

  const getCreatorClass = id => {
    if (id === genreAndCreator.creatorObj.id) {
      return 'creator-list-item creator-list-item-selected';
    } else {
      return 'creator-list-item';
    }
  };

  const getGenreClass = id => {
    if (id === genreAndCreator.genreObj.id) {
      return 'genre-list-item genre-list-item-selected';
    } else {
      return 'genre-list-item';
    }
  };

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

      <div className='section'>
        <div className='header'>
          <div className='title'>Finding Creators</div>
          <br />

          Checkout my favorite content creators across YouTube.
          <br /> Select a genre to get started.
          <br />
        </div>
      </div>

      <div className='section'>

        <div className='container'>

          <div className='genre-container'>
            <div className='genre-list'>
              {
                genereList
                  .map(genreItem =>
                    <div
                      key={genreItem.id}
                      onClick={() => genreClickHandler(genreItem.id)}
                      className={getGenreClass(genreItem.id)}>
                      {genreItem.name}
                    </div>)
              }
            </div>
          </div>

          <div className='banner-container'>
            <div className='banner'>
              {genreAndCreator.genreObj.name}.
            </div>
            {/* <div className='banner-img-container'>{<img src={genreAndCreator.genreObj.pic} />}</div> */}
          </div>

          <div className='list-and-card-container'>
            <div className='creator-list-container'>
              {
                creatorsList
                  .filter(channel => channel.gid === genreAndCreator.genreObj.id)
                  .map(creator =>
                    <div key={creator.id}
                      onClick={() => creatorClickHandler(creator.id)}
                      className={getCreatorClass(creator.id)}>
                      <div className='creator-name'>{creator.name}</div>
                      <div className='creator-description'>{creator.description}</div>
                      {/* <img src={creator.pic} /> */}
                    </div>)
              }
            </div>

            <div className='card-container'>
              <div className='card'>
                <div className='creator-img-container'>
                  {<img alt='Creator DP' src={genreAndCreator.creatorObj.pic} />}
                </div>
                <div className='creator-link-container'>
                  <a style={{color: '#ffffff'}} target='_blank' rel='noreferrer' href={genreAndCreator.creatorObj.link}> Visit </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
      <div className='section'>
        <Footer />
      </div>

      {/* <br />
      {genreAndCreator.genreObj.id} {genreAndCreator.creatorObj.id}

      <br />

      <img src={genreAndCreator.genreObj.pic} />

      <img src={genreAndCreator.creatorObj.pic} />

      <div className='Genre-List'>
        {
          genereList
            .map(genreItem =>
              <div onClick={() => genreClickHandler(genreItem.id)} className='Genre-List-Item'>
                {genreItem.name}
                <img src={genreItem.pic} />
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
                <img src={creator.pic} />
              </div>)
        }
      </div> */}

    </div>
  );
}

export default App;
