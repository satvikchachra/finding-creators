import React, { useState } from 'react';
import Footer from './components/Footer/Footer';
import { techChannels, brainyChannels, comedyChannels } from './data/creatorData';
import { genereList } from './data/genreData';
import Header from './components/Header/Header';
import GenreList from './components/GenreList/GenreList';
import Banner from './components/Banner/Banner';
import CreatorList from './components/CreatorList/CreatorList';
import CreatorCard from './components/CreatorCard/CreatorCard';
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
        <Header title='Finding Creators' />
      </div>

      <div className='section'>

        <div className='container'>

          <GenreList
            clicked={genreClickHandler}
            styling={getGenreClass}
            gList={genereList} />

          <Banner genreInfo={genreAndCreator} />

          <div className='list-and-card-container'>
            <CreatorList
              clicked={creatorClickHandler}
              styling={getCreatorClass}
              genreCreatorInfo={genreAndCreator}
              cList={creatorsList} />

            <CreatorCard creatorInfo={genreAndCreator} />

          </div>
        </div>
      </div>

      <div className='section'>
        <Footer />
      </div>

    </div>
  );
}

export default App;
