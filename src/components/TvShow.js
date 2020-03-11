import React from 'react';
import TvShowInfo from './elements/TvShowInfo';
import TvShowInfoBar from './elements/TvShowInfoBar';
import Navigation from './elements/Navigation';
import Spinner from './elements/Spinner';
import Grid from './elements/Grid';
import Actor from './elements/Actor';
import { useTvShowFetch} from './hooks/useTvShowFetch';


const TvShow = ({ tvId }) => {
    const [tvShow, loading, error] = useTvShowFetch(tvId);
    console.log(tvShow);
  
    if (error) return <div>Something went wrong ...</div>;
    if (loading) return <Spinner />;
  
    return (
      <React.Fragment>
        <Navigation tvShow={tvShow.original_title} />
        <TvShowInfo tvShow={tvShow} />
        <TvShowInfoBar
          time={tvShow.runtime}
          budget={tvShow.budget}
          revenue={tvShow.revenue}
        />
        <Grid header="Actors">
          {tvShow.actors.map(actor => (
            <Actor key={actor.credit_id} actor={actor} />
          ))}
        </Grid>
      </React.Fragment>
    );
  };

export default TvShow;
