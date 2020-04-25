import React from 'react';
import { Carousel, Button } from 'antd';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import { Row, Col } from 'antd';

import './SliderMovies.scss';

export default function SliderMovies(props) {
   const { movies } = props;

   if (movies.loading || !movies.result) {
      return <Loading />;
   }

   const { results } = movies.result;
   return (
      <Carousel autoplay className="slider-movies">
         {results.map(movie => (
            <Movie key={movie.id} movie={movie} />
         ))}
      </Carousel>
   )
}

function Movie(props) {
   const { movie: { id, backdrop_path, title, overview } } = props;

   const backdropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;

   return (
      <Row justify="center">
         <Col span={24}>
            <div className="slider-movies__movie" style={{ backgroundImage: `url('${backdropPath}')` }}>
                     <div className="slider-movies__movie-info">
                        <div>
                           <h2>{title}</h2>
                           <p>{overview}</p>
                           <Link to={`/movie/${id}`}>
                              <Button type="primary">Ver mas</Button>
                           </Link>
                        </div>
                     </div>
            </div >
         </Col>
      </Row>   
   )
}
